import {prisma} from "../utils/prisma";

export const findUser = async (email: string) => {
  return await prisma.user.findFirst({
    where: {email, deleted: false}
  });
};

export const findUserById = async (id: string) => {
  return await prisma.user.findFirst({
    where: {id, deleted: false}
  });
};

export const createUser = async (email: string, password: string) => {
  return await prisma.user.create({data: {email, password}, select: {id: true, email: true}});
};

export const list = async () => {
  return [];
};
