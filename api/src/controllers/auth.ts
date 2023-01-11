import {Request, Response, NextFunction} from "express";

import authenticateService from "../services/auth";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = await authenticateService.login(req.body);

    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = await authenticateService.signUp(req.body);

    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
