import {Request, Response, NextFunction} from "express";

import authenticateService from "../services/auth";

export default async function authToken(
  req: Request & {userId?: string},
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const response = await authenticateService.verifyUser({access_token: token || ""});

    req.userId = response.id;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).send("Invalid or expired token");
  }
}
