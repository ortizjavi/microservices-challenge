import {prisma} from "../utils/prisma";

export const findUser = async (email: string) => {
  return await prisma.user.findFirst({
    where: {email, deleted: false}
  });
};

export const createUser = async (email: string, password: string) => {
  return await prisma.user.create({data: {email, password}, select: {id: true, email: true}});
};
