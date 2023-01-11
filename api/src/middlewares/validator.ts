import {Request, Response, NextFunction} from "express";
import {ValidationChain, validationResult} from "express-validator";

export const handleOneOfMiddleWare = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  res.status(400).json({errors: errors.array()});
};

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({errors: errors.array()});
  };
};
