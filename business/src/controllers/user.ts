import * as grpc from "@grpc/grpc-js";

import {list, findUserById} from "../services/user";
import {handleGrpcError} from "../utils/error";
import {UsersListRequest__Output} from "../pb/challenge/UsersListRequest";
import {UserResponse__Output} from "../pb/challenge/UserResponse";
import {UserRequest__Output} from "../pb/challenge/UserRequest";
import {UsersListResponse__Output} from "../pb/challenge/UsersListResponse";

export const listUsers = async (
  req: grpc.ServerUnaryCall<UsersListRequest__Output, UsersListResponse__Output>,
  res: grpc.sendUnaryData<UsersListResponse__Output>
) => {
  try {
    const users = await list();

    res(null, {users});
  } catch (error: unknown) {
    res(handleGrpcError(error));
  }
};

export const getUser = async (
  req: grpc.ServerUnaryCall<UserRequest__Output, UserResponse__Output>,
  res: grpc.sendUnaryData<UserResponse__Output>
) => {
  try {
    const user = await findUserById(req.request.id);

    if (!user) {
      throw {
        code: grpc.status.NOT_FOUND,
        message: "User not found"
      };
    }
    res(null, user as UserResponse__Output);
  } catch (error: unknown) {
    res(handleGrpcError(error));
  }
};
