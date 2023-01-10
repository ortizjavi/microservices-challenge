import * as grpc from "@grpc/grpc-js";
import {Request, Response, NextFunction} from "express";

import {GrpcError} from "../types/grpc";

export default function handleError(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const response = {} as GrpcError;

  const {ALREADY_EXISTS, INVALID_ARGUMENT, INTERNAL, UNAVAILABLE} = grpc.status;

  const err = error as GrpcError;

  switch (err.code) {
    case ALREADY_EXISTS:
      response.code = 409;
      response.message = "The entity you are trying to create already exists";
      break;
    case INVALID_ARGUMENT:
      response.code = 401;
      response.message = err.message;
      break;
    case INTERNAL:
      response.code = 503;
      response.message = "We are working for a solution";
      break;
    case UNAVAILABLE:
      response.code = 503;
      response.message = "We are working for a solution";
      break;
    default:
      response.code = 500;
      response.message = "We are working for a solution";
  }

  res.status(response.code).json(response);
}
