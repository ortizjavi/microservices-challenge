import * as grpc from "@grpc/grpc-js";

import {UsersListResponse__Output} from "../pb/challenge/UsersListResponse";
import {GetUsersRequest__Output} from "../pb/challenge/GetUsersRequest";

export const getUsers = async (
  req: grpc.ServerUnaryCall<GetUsersRequest__Output, UsersListResponse__Output>,
  res: grpc.sendUnaryData<UsersListResponse__Output>
) => {
  console.log(req);
};
