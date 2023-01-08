// Original file: ../proto/main.proto

import type { UserResponse as _challenge_UserResponse, UserResponse__Output as _challenge_UserResponse__Output } from '../challenge/UserResponse';

export interface UsersListResponse {
  'users'?: (_challenge_UserResponse)[];
}

export interface UsersListResponse__Output {
  'users': (_challenge_UserResponse__Output)[];
}
