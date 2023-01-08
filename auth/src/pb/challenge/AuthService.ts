// Original file: ../proto/main.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUsersRequest as _challenge_GetUsersRequest, GetUsersRequest__Output as _challenge_GetUsersRequest__Output } from '../challenge/GetUsersRequest';
import type { SignInInput as _challenge_SignInInput, SignInInput__Output as _challenge_SignInInput__Output } from '../challenge/SignInInput';
import type { SignInOutput as _challenge_SignInOutput, SignInOutput__Output as _challenge_SignInOutput__Output } from '../challenge/SignInOutput';
import type { SignUpInput as _challenge_SignUpInput, SignUpInput__Output as _challenge_SignUpInput__Output } from '../challenge/SignUpInput';
import type { SignUpOutput as _challenge_SignUpOutput, SignUpOutput__Output as _challenge_SignUpOutput__Output } from '../challenge/SignUpOutput';
import type { UsersListResponse as _challenge_UsersListResponse, UsersListResponse__Output as _challenge_UsersListResponse__Output } from '../challenge/UsersListResponse';

export interface AuthServiceClient extends grpc.Client {
  getUsers(argument: _challenge_GetUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _challenge_GetUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _challenge_GetUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _challenge_GetUsersRequest, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _challenge_GetUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _challenge_GetUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _challenge_GetUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _challenge_GetUsersRequest, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  
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
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  getUsers: grpc.handleUnaryCall<_challenge_GetUsersRequest__Output, _challenge_UsersListResponse>;
  
  signIn: grpc.handleUnaryCall<_challenge_SignInInput__Output, _challenge_SignInOutput>;
  
  signUp: grpc.handleUnaryCall<_challenge_SignUpInput__Output, _challenge_SignUpOutput>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  getUsers: MethodDefinition<_challenge_GetUsersRequest, _challenge_UsersListResponse, _challenge_GetUsersRequest__Output, _challenge_UsersListResponse__Output>
  signIn: MethodDefinition<_challenge_SignInInput, _challenge_SignInOutput, _challenge_SignInInput__Output, _challenge_SignInOutput__Output>
  signUp: MethodDefinition<_challenge_SignUpInput, _challenge_SignUpOutput, _challenge_SignUpInput__Output, _challenge_SignUpOutput__Output>
}
