import * as grpc from "@grpc/grpc-js";

import {AuthServiceHandlers} from "./pb/challenge/AuthService";
import authPackage from "./utils/proto";
import config from "./config";
import connectDB from "./utils/prisma";
import {loginHandler, registerHandler} from "./controllers/auth";
import {getUsers} from "./controllers/user";

const server = new grpc.Server();

server.addService((authPackage.AuthService as any).service, {
  signIn: (req, res) => loginHandler(req, res),
  signUp: (req, res) => registerHandler(req, res),
  getUsers: (req, res) => getUsers(req, res)
} as AuthServiceHandlers);

server.bindAsync(`0.0.0.0:${config.port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);

    return;
  }
  server.start();
  connectDB().then(() => {
    console.log(`Server listening on ${port}`);
  });
});
