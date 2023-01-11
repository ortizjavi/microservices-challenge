import * as grpc from "@grpc/grpc-js";

import {BusinessServiceHandlers} from "./pb/challenge/BusinessService";
import protoPkg from "./utils/proto";
import config from "./config";
import connectDB from "./utils/prisma";
import {listUsers, getUser} from "./controllers/user";

const server = new grpc.Server();

server.addService((protoPkg.BusinessService as any).service, {
  listUsers: (req, res) => listUsers(req, res),
  getUser: (req, res) => getUser(req, res)
} as BusinessServiceHandlers);

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
