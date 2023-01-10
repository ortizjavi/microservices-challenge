import {Request, Response, NextFunction} from "express";

import AuthenticateService from "../services/auth";

const authenticateService = new AuthenticateService();

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = authenticateService.login(req.body);

    res.status(200).json(body);
  } catch (error) {
    next(error);
  }
};

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = await authenticateService.signUp(req.body);

    res.status(200).json(body);
  } catch (error) {
    return next(error);
  }
};
