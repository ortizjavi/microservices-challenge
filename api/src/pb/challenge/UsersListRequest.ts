// Original file: ../proto/main.proto


export interface UsersListRequest {
  'limit'?: (number);
  'offset'?: (number);
  '_limit'?: "limit";
  '_offset'?: "offset";
}

export interface UsersListRequest__Output {
  'limit'?: (number);
  'offset'?: (number);
  '_limit': "limit";
  '_offset': "offset";
}
