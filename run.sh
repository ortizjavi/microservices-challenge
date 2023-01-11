#!/bin/bash

protogen.sh auth
protogen.sh api

docker-compose down
docker-compose up