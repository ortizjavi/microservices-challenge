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

  if ((error as GrpcError).code === grpc.status.INVALID_ARGUMENT) {
    return error as GrpcError;
  }

  return {
    code: grpc.status.INTERNAL,
    message: (error as GrpcError).message
  };
};
