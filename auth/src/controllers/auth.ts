import * as grpc from "@grpc/grpc-js";

import {SignInInput__Output} from "..//pb/challenge/SignInInput";
import {SignInOutput__Output} from "../pb/challenge/SignInOutput";
import {SignUpInput__Output} from "..//pb/challenge/SignUpInput";
import {SignUpOutput__Output} from "../pb/challenge/SignUpOutput";
import {login, signUp, verifyUser as verifyUserService} from "../services/auth";
import {handleGrpcError} from "../utils/error";
import {VerifyUserRequest__Output} from "../pb/challenge/VerifyUserRequest";
import {VerifyUserResponse__Output} from "../pb/challenge/VerifyUserResponse";

export const loginHandler = async (
  req: grpc.ServerUnaryCall<SignInInput__Output, SignInOutput__Output>,
  res: grpc.sendUnaryData<SignInOutput__Output>
) => {
  try {
    const access_token = await login(req.request.email, req.request.password);

    res(null, {
      access_token
    });
  } catch (error: unknown) {
    res(handleGrpcError(error));
  }
};

export const registerHandler = async (
  req: grpc.ServerUnaryCall<SignUpInput__Output, SignUpOutput__Output>,
  res: grpc.sendUnaryData<SignUpOutput__Output>
) => {
  try {
    const user = await signUp(req.request.email, req.request.password);

    res(null, {
      _id: user.id
    });
  } catch (error: unknown) {
    res(handleGrpcError(error));
  }
};

export const verifyUser = async (
  req: grpc.ServerUnaryCall<VerifyUserRequest__Output, VerifyUserResponse__Output>,
  res: grpc.sendUnaryData<VerifyUserResponse__Output>
) => {
  try {
    const user = await verifyUserService(req.request.access_token);

    res(null, user);
  } catch (error: unknown) {
    res(handleGrpcError(error));
  }
};
