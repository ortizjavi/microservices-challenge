import bcrypt from "bcrypt";
import * as grpc from "@grpc/grpc-js";
import {JwtPayload} from "jsonwebtoken";

import {signJwt, verifyJwt} from "../utils/jwt";
import {User} from "../types/user";

import {createUser, findUser} from "./user";

export const login = async (email: string, password: string): Promise<string> => {
  const user = await findUser(email);

  // Check if user exist and password is correct
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw {
      code: grpc.status.INVALID_ARGUMENT,
      message: "Invalid email or password"
    };
  }

  // Create jwt
  const access_token = signJwt({id: user.id});

  return access_token;
};

export const signUp = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = createUser(email, hashedPassword);

  return user;
};

export const verifyUser = async (token: string) => {
  const user = verifyJwt(token);

  if (!user || !(user as JwtPayload).id) {
    throw {
      code: grpc.status.PERMISSION_DENIED,
      message: "Invalid or expired token"
    };
  }

  return user as User;
};
