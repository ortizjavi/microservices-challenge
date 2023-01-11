const config: {
  port: number;
  accessTokenExpiresIn: number;
  dbUri: string;
  accessTokenPrivateKey: string;
} = {
  port: parseInt(process.env.PORT || "3000"),
  accessTokenExpiresIn: 15,
  dbUri: process.env.DATABASE_URL as string,
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string
};

export default config;
