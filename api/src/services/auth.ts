import {SignInInput__Output} from "../pb/challenge/SignInInput";
import {SignInOutput__Output} from "../pb/challenge/SignInOutput";
import {SignUpInput__Output} from "../pb/challenge/SignUpInput";
import {SignUpOutput__Output} from "../pb/challenge/SignUpOutput";
import {GrpcError} from "../types/types/grpc";
import {VerifyUserRequest__Output} from "../pb/challenge/VerifyUserRequest";
import {VerifyUserResponse__Output} from "../pb/challenge/VerifyUserResponse";

import {authenticateService} from "./proto";

class AuthenticateService {
  async login({email, password}: SignInInput__Output): Promise<SignInOutput__Output> {
    return new Promise((resolve, reject) => {
      authenticateService.signIn(
        {
          email,
          password
        },
        (err: GrpcError, res: SignInOutput__Output) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  async signUp({email, password}: SignUpInput__Output): Promise<SignUpOutput__Output> {
    return new Promise((resolve, reject) => {
      authenticateService.signUp(
        {
          email,
          password
        },
        (err: GrpcError, res: SignUpOutput__Output) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  async verifyUser({access_token}: VerifyUserRequest__Output): Promise<VerifyUserResponse__Output> {
    return new Promise((resolve, reject) => {
      authenticateService.verifyUser(
        {
          access_token
        },
        (err: GrpcError, res: VerifyUserResponse__Output) => {
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

export default new AuthenticateService();
