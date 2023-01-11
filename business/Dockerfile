FROM node:19-alpine

ENV SERVICE_PATH /usr/src/service

ADD proto ${SERVICE_PATH}/proto
ADD auth ${SERVICE_PATH}/auth

WORKDIR ${SERVICE_PATH}/auth

RUN npm ci

ENTRYPOINT [ "npm", "run", "start:dev" ]
EXPOSE 3000