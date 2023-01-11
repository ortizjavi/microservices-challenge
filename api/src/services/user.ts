import {UsersListRequest__Output} from "../pb/challenge/UsersListRequest";
import {UsersListResponse__Output} from "../pb/challenge/UsersListResponse";
import {GrpcError} from "../types/grpc";

import {businessService} from "./proto";

class BusinessService {
  async listUsers({limit, offset}: UsersListRequest__Output): Promise<UsersListResponse__Output> {
    return new Promise((resolve, reject) => {
      businessService.listUsers(
        {
          limit,
          offset
        },
        (err: GrpcError, res: UsersListResponse__Output) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }
}

export default new BusinessService();
