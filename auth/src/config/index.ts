const config: {
  port: number;
  accessTokenExpiresIn: string;
  dbUri: string;
  accessTokenPrivateKey: string;
} = {
  port: parseInt(process.env.PORT || "3000"),
  accessTokenExpiresIn: process.env.EXPIRE_TOKEN_IN || "1h",
  dbUri: process.env.DATABASE_URL as string,
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string
};

export default config;
