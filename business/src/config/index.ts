const config: {
  port: number;
  dbUri: string;
  defaultPaginationLimit: number;
} = {
  port: parseInt(process.env.PORT || "3000"),
  dbUri: process.env.DATABASE_URL as string,
  defaultPaginationLimit: parseInt(process.env.DEFAULT_LIMIT || "10")
};

export default config;
