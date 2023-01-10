import path from "path";

import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

const PROTO_FILE = "../../../proto/main.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE), options);
const proto = grpc.loadPackageDefinition(packageDef);

// host
const AuthenticateHost = process.env.AuthHost || "localhost:3001";
// const TodoHost = env.TodoHost || "localhost:3003";

const {AuthService}: any = proto.challenge;

export const authenticateService = new AuthService(
  AuthenticateHost,
  grpc.credentials.createInsecure()
);
