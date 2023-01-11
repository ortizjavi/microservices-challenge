import {Request, Response, NextFunction} from "express";

import businessService from "../services/user";

export const listUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = await businessService.listUsers(req.body);

    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
