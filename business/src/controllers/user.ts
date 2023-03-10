import * as grpc from "@grpc/grpc-js";

import {list, findUserBy} from "../services/user";
import {handleGrpcError} from "../utils/error";
import {UsersListRequest__Output} from "../pb/challenge/UsersListRequest";
import {UserResponse__Output} from "../pb/challenge/UserResponse";
import {UserRequest__Output} from "../pb/challenge/UserRequest";
import {UsersListResponse__Output} from "../pb/challenge/UsersListResponse";
import config from "../config/index";

export const listUsers = async (
  req: grpc.ServerUnaryCall<UsersListRequest__Output, UsersListResponse__Output>,
  res: grpc.sendUnaryData<UsersListResponse__Output>
) => {
  try {
    const {limit, offset} = req.request;
    const result = await list(limit || config.defaultPaginationLimit, offset || 0);

    res(null, {
      ...result,
      users: result.users.map((user) => ({
        ...user,
        created_at: user.created_at.toUTCString(),
        updated_at: user.updated_at.toUTCString()
      }))
    });
  } catch (error: unknown) {
    res(handleGrpcError(error));
  }
};

export const getUser = async (
  req: grpc.ServerUnaryCall<UserRequest__Output, UserResponse__Output>,
  res: grpc.sendUnaryData<UserResponse__Output>
) => {
  try {
    let {email, id}: {email: string | undefined; id: string | undefined} = req.request;

    email = email ? email : undefined;
    id = id ? id : undefined;

    const user = await findUserBy({email, id});

    res(null, {
      ...user,
      created_at: user.created_at.toUTCString(),
      updated_at: user.updated_at.toUTCString()
    });
  } catch (error: unknown) {
    res(handleGrpcError(error));
  }
};
