import * as grpc from "@grpc/grpc-js";

import {SignInInput__Output} from "..//pb/challenge/SignInInput";
import {SignInOutput__Output} from "../pb/challenge/SignInOutput";
import {SignUpInput__Output} from "..//pb/challenge/SignUpInput";
import {SignUpOutput__Output} from "../pb/challenge/SignUpOutput";

export const loginHandler = async (
  req: grpc.ServerUnaryCall<SignInInput__Output, SignInOutput__Output>,
  res: grpc.sendUnaryData<SignInOutput__Output>
) => {
  console.log(req);
};

export const registerHandler = async (
  req: grpc.ServerUnaryCall<SignUpInput__Output, SignUpOutput__Output>,
  res: grpc.sendUnaryData<SignUpOutput__Output>
) => {
  console.log(req);
};
