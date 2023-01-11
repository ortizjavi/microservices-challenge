// Original file: ../proto/main.proto

import type { Long } from '@grpc/proto-loader';

export interface UserResponse {
  'id'?: (string);
  'email'?: (string);
  'created_at'?: (number | string | Long);
  'updated_at'?: (number | string | Long);
}

export interface UserResponse__Output {
  'id': (string);
  'email': (string);
  'created_at': (string);
  'updated_at': (string);
}
