// Original file: ../proto/main.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { UsersListRequest as _challenge_UsersListRequest, UsersListRequest__Output as _challenge_UsersListRequest__Output } from '../challenge/UsersListRequest';
import type { UsersListResponse as _challenge_UsersListResponse, UsersListResponse__Output as _challenge_UsersListResponse__Output } from '../challenge/UsersListResponse';

export interface BusinessServiceClient extends grpc.Client {
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
  listUsers: grpc.handleUnaryCall<_challenge_UsersListRequest__Output, _challenge_UsersListResponse>;
  
}

export interface BusinessServiceDefinition extends grpc.ServiceDefinition {
  listUsers: MethodDefinition<_challenge_UsersListRequest, _challenge_UsersListResponse, _challenge_UsersListRequest__Output, _challenge_UsersListResponse__Output>
}
