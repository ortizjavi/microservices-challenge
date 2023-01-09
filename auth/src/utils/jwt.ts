import jwt, {JwtPayload, SignOptions} from "jsonwebtoken";

import config from "../config";

export const verifyJwt = (token: string): JwtPayload | string | null => {
  try {
    return jwt.verify(token, config.accessTokenPrivateKey);
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const signJwt = (payload: JwtPayload, options: SignOptions = {}) => {
  options.expiresIn = config.accessTokenExpiresIn;

  return jwt.sign(payload, config.accessTokenPrivateKey, {
    ...options,
    algorithm: "RS256"
  });
};
