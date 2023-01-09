// Original file: ../proto/main.proto

import type { Long } from '@grpc/proto-loader';

export interface UserResponse {
  'id'?: (string);
  'email'?: (string);
  'dateCreated'?: (number | string | Long);
  'dateUpdated'?: (number | string | Long);
  '_dateCreated'?: "dateCreated";
  '_dateUpdated'?: "dateUpdated";
}

export interface UserResponse__Output {
  'id': (string);
  'email': (string);
  'dateCreated'?: (string);
  'dateUpdated'?: (string);
  '_dateCreated': "dateCreated";
  '_dateUpdated': "dateUpdated";
}
