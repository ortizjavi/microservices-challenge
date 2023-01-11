#!/bin/bash

protogen.sh auth
protogen.sh api
protogen.sh business

docker-compose down
docker-compose up