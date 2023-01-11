FROM node:19-alpine

ENV SERVICE_PATH /usr/src/service

ADD proto ${SERVICE_PATH}/proto
ADD business ${SERVICE_PATH}/business

WORKDIR ${SERVICE_PATH}/business

RUN npm ci

ENTRYPOINT [ "npm", "run", "start:dev" ]
EXPOSE 3000