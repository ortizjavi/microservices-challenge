// Original file: ../proto/main.proto


export interface UsersListRequest {
  'result_per_page'?: (number);
  'page'?: (number);
  'email'?: (string);
  '_result_per_page'?: "result_per_page";
  '_page'?: "page";
  '_email'?: "email";
}

export interface UsersListRequest__Output {
  'result_per_page'?: (number);
  'page'?: (number);
  'email'?: (string);
  '_result_per_page': "result_per_page";
  '_page': "page";
  '_email': "email";
}
