// Original file: ../proto/main.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { UserRequest as _challenge_UserRequest, UserRequest__Output as _challenge_UserRequest__Output } from '../challenge/UserRequest';
import type { UserResponse as _challenge_UserResponse, UserResponse__Output as _challenge_UserResponse__Output } from '../challenge/UserResponse';
import type { UsersListRequest as _challenge_UsersListRequest, UsersListRequest__Output as _challenge_UsersListRequest__Output } from '../challenge/UsersListRequest';
import type { UsersListResponse as _challenge_UsersListResponse, UsersListResponse__Output as _challenge_UsersListResponse__Output } from '../challenge/UsersListResponse';

export interface BusinessServiceClient extends grpc.Client {
  getUser(argument: _challenge_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _challenge_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _challenge_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _challenge_UserRequest, callback: grpc.requestCallback<_challenge_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _challenge_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _challenge_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _challenge_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _challenge_UserRequest, callback: grpc.requestCallback<_challenge_UserResponse__Output>): grpc.ClientUnaryCall;
  
  listUsers(argument: _challenge_UsersListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _challenge_UsersListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _challenge_UsersListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _challenge_UsersListRequest, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _challenge_UsersListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _challenge_UsersListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _challenge_UsersListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _challenge_UsersListRequest, callback: grpc.requestCallback<_challenge_UsersListResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface BusinessServiceHandlers extends grpc.UntypedServiceImplementation {
  getUser: grpc.handleUnaryCall<_challenge_UserRequest__Output, _challenge_UserResponse>;
  
  listUsers: grpc.handleUnaryCall<_challenge_UsersListRequest__Output, _challenge_UsersListResponse>;
  
}

export interface BusinessServiceDefinition extends grpc.ServiceDefinition {
  getUser: MethodDefinition<_challenge_UserRequest, _challenge_UserResponse, _challenge_UserRequest__Output, _challenge_UserResponse__Output>
  listUsers: MethodDefinition<_challenge_UsersListRequest, _challenge_UsersListResponse, _challenge_UsersListRequest__Output, _challenge_UsersListResponse__Output>
}
