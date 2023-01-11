import {Request, Response, NextFunction} from "express";
import * as validator from "express-validator";

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

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {idOrEmail} = req.params;

    const isEmail = idOrEmail.includes("@");
    const body = await businessService.getUser(
      isEmail ? {id: "", email: idOrEmail} : {id: idOrEmail, email: ""}
    );

    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
