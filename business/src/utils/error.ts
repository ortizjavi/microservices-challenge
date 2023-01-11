import * as grpc from "@grpc/grpc-js";
import {Prisma} from "@prisma/client";

import {GrpcError} from "../types/grpc";

export const handleGrpcError = (error: unknown): GrpcError => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return {
      code: grpc.status.ALREADY_EXISTS,
      message: error.message
    };
  }

  switch ((error as GrpcError).code) {
    case grpc.status.INVALID_ARGUMENT:
      return error as GrpcError;
    case grpc.status.NOT_FOUND:
      return error as GrpcError;
  }

  return {
    code: grpc.status.INTERNAL,
    message: (error as GrpcError).message
  };
};
