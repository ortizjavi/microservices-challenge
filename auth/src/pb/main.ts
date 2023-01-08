import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _challenge_AuthServiceClient, AuthServiceDefinition as _challenge_AuthServiceDefinition } from './challenge/AuthService';
import type { BusinessServiceClient as _challenge_BusinessServiceClient, BusinessServiceDefinition as _challenge_BusinessServiceDefinition } from './challenge/BusinessService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  challenge: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _challenge_AuthServiceClient> & { service: _challenge_AuthServiceDefinition }
    BusinessService: SubtypeConstructor<typeof grpc.Client, _challenge_BusinessServiceClient> & { service: _challenge_BusinessServiceDefinition }
    GetUsersRequest: MessageTypeDefinition
    SignInInput: MessageTypeDefinition
    SignInOutput: MessageTypeDefinition
    SignUpInput: MessageTypeDefinition
    SignUpOutput: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
    UsersListRequest: MessageTypeDefinition
    UsersListResponse: MessageTypeDefinition
  }
}

