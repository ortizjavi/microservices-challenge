import * as grpc from "@grpc/grpc-js";

import {User} from "../types/user";
import {prisma} from "../utils/prisma";

export const findUser = async (email: string) => {
  return await prisma.user.findFirst({
    where: {email, deleted: false}
  });
};

export const findUserBy = async (where: any) => {
  const user = await prisma.user.findFirst({
    where: {...where, deleted: false}
  });

  if (!user) {
    throw {
      code: grpc.status.NOT_FOUND,
      message: "User not found"
    };
  }

  return user;
};

export const createUser = async (email: string, password: string) => {
  return await prisma.user.create({data: {email, password}, select: {id: true, email: true}});
};

export const list = async (take: number, skip: number) => {
  const response = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.findMany({
      where: {deleted: false},
      take,
      skip
    })
  ]);

  return {total_count: response[0], users: response[1]};
};
