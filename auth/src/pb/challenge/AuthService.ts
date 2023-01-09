// Original file: ../proto/main.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SignInInput as _challenge_SignInInput, SignInInput__Output as _challenge_SignInInput__Output } from '../challenge/SignInInput';
import type { SignInOutput as _challenge_SignInOutput, SignInOutput__Output as _challenge_SignInOutput__Output } from '../challenge/SignInOutput';
import type { SignUpInput as _challenge_SignUpInput, SignUpInput__Output as _challenge_SignUpInput__Output } from '../challenge/SignUpInput';
import type { SignUpOutput as _challenge_SignUpOutput, SignUpOutput__Output as _challenge_SignUpOutput__Output } from '../challenge/SignUpOutput';
import type { VerifyUserRequest as _challenge_VerifyUserRequest, VerifyUserRequest__Output as _challenge_VerifyUserRequest__Output } from '../challenge/VerifyUserRequest';
import type { VerifyUserResponse as _challenge_VerifyUserResponse, VerifyUserResponse__Output as _challenge_VerifyUserResponse__Output } from '../challenge/VerifyUserResponse';

export interface AuthServiceClient extends grpc.Client {
  signIn(argument: _challenge_SignInInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_SignInOutput__Output>): grpc.ClientUnaryCall;
  signIn(argument: _challenge_SignInInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_SignInOutput__Output>): grpc.ClientUnaryCall;
  signIn(argument: _challenge_SignInInput, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_SignInOutput__Output>): grpc.ClientUnaryCall;
  signIn(argument: _challenge_SignInInput, callback: grpc.requestCallback<_challenge_SignInOutput__Output>): grpc.ClientUnaryCall;
  signIn(argument: _challenge_SignInInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_SignInOutput__Output>): grpc.ClientUnaryCall;
  signIn(argument: _challenge_SignInInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_SignInOutput__Output>): grpc.ClientUnaryCall;
  signIn(argument: _challenge_SignInInput, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_SignInOutput__Output>): grpc.ClientUnaryCall;
  signIn(argument: _challenge_SignInInput, callback: grpc.requestCallback<_challenge_SignInOutput__Output>): grpc.ClientUnaryCall;
  
  signUp(argument: _challenge_SignUpInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_SignUpOutput__Output>): grpc.ClientUnaryCall;
  signUp(argument: _challenge_SignUpInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_SignUpOutput__Output>): grpc.ClientUnaryCall;
  signUp(argument: _challenge_SignUpInput, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_SignUpOutput__Output>): grpc.ClientUnaryCall;
  signUp(argument: _challenge_SignUpInput, callback: grpc.requestCallback<_challenge_SignUpOutput__Output>): grpc.ClientUnaryCall;
  signUp(argument: _challenge_SignUpInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_SignUpOutput__Output>): grpc.ClientUnaryCall;
  signUp(argument: _challenge_SignUpInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_SignUpOutput__Output>): grpc.ClientUnaryCall;
  signUp(argument: _challenge_SignUpInput, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_SignUpOutput__Output>): grpc.ClientUnaryCall;
  signUp(argument: _challenge_SignUpInput, callback: grpc.requestCallback<_challenge_SignUpOutput__Output>): grpc.ClientUnaryCall;
  
  verifyUser(argument: _challenge_VerifyUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_VerifyUserResponse__Output>): grpc.ClientUnaryCall;
  verifyUser(argument: _challenge_VerifyUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_VerifyUserResponse__Output>): grpc.ClientUnaryCall;
  verifyUser(argument: _challenge_VerifyUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_VerifyUserResponse__Output>): grpc.ClientUnaryCall;
  verifyUser(argument: _challenge_VerifyUserRequest, callback: grpc.requestCallback<_challenge_VerifyUserResponse__Output>): grpc.ClientUnaryCall;
  verifyUser(argument: _challenge_VerifyUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_VerifyUserResponse__Output>): grpc.ClientUnaryCall;
  verifyUser(argument: _challenge_VerifyUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_VerifyUserResponse__Output>): grpc.ClientUnaryCall;
  verifyUser(argument: _challenge_VerifyUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_VerifyUserResponse__Output>): grpc.ClientUnaryCall;
  verifyUser(argument: _challenge_VerifyUserRequest, callback: grpc.requestCallback<_challenge_VerifyUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  signIn: grpc.handleUnaryCall<_challenge_SignInInput__Output, _challenge_SignInOutput>;
  
  signUp: grpc.handleUnaryCall<_challenge_SignUpInput__Output, _challenge_SignUpOutput>;
  
  verifyUser: grpc.handleUnaryCall<_challenge_VerifyUserRequest__Output, _challenge_VerifyUserResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  signIn: MethodDefinition<_challenge_SignInInput, _challenge_SignInOutput, _challenge_SignInInput__Output, _challenge_SignInOutput__Output>
  signUp: MethodDefinition<_challenge_SignUpInput, _challenge_SignUpOutput, _challenge_SignUpInput__Output, _challenge_SignUpOutput__Output>
  verifyUser: MethodDefinition<_challenge_VerifyUserRequest, _challenge_VerifyUserResponse, _challenge_VerifyUserRequest__Output, _challenge_VerifyUserResponse__Output>
}
