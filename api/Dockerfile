FROM node:19-alpine

ENV SERVICE_PATH /usr/src/service

ADD proto ${SERVICE_PATH}/proto
ADD api ${SERVICE_PATH}/api

WORKDIR ${SERVICE_PATH}/api

RUN npm ci

ENTRYPOINT [ "npm", "run", "nodemon" ]
EXPOSE 3000