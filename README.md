# Conexa Challenge API

This microservices project consists on 3 services, two of them private and the last one is the web API to communicate using HTTP.

The three services uses GRPC to communicate lightweight, you can find the modeled messages on [proto](https://github.com/ortizjavi/microservices-challenge.git/proto) folder.
## Prerequisites

To use these files, you must first have the following installed:

- [Docker](https://docs.docker.com/engine/installation/)
- [docker-compose](https://docs.docker.com/compose/install/)

## How to use

The following steps will run a local instance of the Microservices using the default configuration file (`docker-compose.yml`):

1. Clone this repository.
2. Change directory into the root of the project.
3. Run the `run.sh` bash script.

```bash
git clone https://github.com/ortizjavi/microservices-challenge.git
cd  microservices-challenge
bash run.sj
```

After the server has started, the API will listen on: [http://localhost:3000](http://localhost:3000).

## Endpoints

## GET
###### * Should use Authentication Header

`Get users list` [/users?limit=<number>&offset=<number>](#get-users)
`-- limit & offset are optionals`

`Get specific user` [/users/:idOrEmail](#get-users)

## POST
`Create new user` [/auth/signup](#post-1billingstart-trialjson)
`Login user` [/auth/login](#post-login)
___


## Disclaimer

This project was made as a PoC for development only.
For production we should add testing, productions scripts and docker images.


