// Original file: ../proto/main.proto

import type { Long } from '@grpc/proto-loader';

export interface UserResponse {
  '_id'?: (string);
  'email'?: (string);
  'dateCreated'?: (number | string | Long);
  'dateUpdated'?: (number | string | Long);
}

export interface UserResponse__Output {
  '_id': (string);
  'email': (string);
  'dateCreated': (string);
  'dateUpdated': (string);
}
