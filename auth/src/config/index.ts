import path from "path";

import dotenv from "dotenv";

dotenv.config({path: path.join(__dirname, "../../.env.local")});

const customConfig: {
  port: number;
  accessTokenExpiresIn: number;
  dbUri: string;
  accessTokenPrivateKey: string;
  accessTokenPublicKey: string;
} = {
  port: parseInt(process.env.PORT || "3000"),
  accessTokenExpiresIn: 15,
  dbUri: process.env.DATABASE_URL as string,
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
  accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY as string
};

export default customConfig;
