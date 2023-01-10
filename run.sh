#!/bin/bash

protogen.sh auth

docker-compose down
docker-compose up