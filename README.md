# Monorepo

## Prerequsites
- docker installed
- nodejs installed

## How to run
```sh
# run database
docker-compose up

# install all packages
npm install

# run api endpoint
nest start api

# open new terminal
# run service 1
nest start svc1

# open new terminal
# hit the hello endpoint
curl --location --request GET 'http://localhost:3000/hello'

# hit the hello endpoint with payload
curl --location --request GET 'http://localhost:3000/hello-payload'
```

## TODO:
- Add database with postgreSql to create user CRUD
- Add global error handler. See: [https://docs.nestjs.com/exception-filters#catch-everything](https://docs.nestjs.com/exception-filters#catch-everything)
- Add redis timeout exception with interceptor. See: [https://docs.nestjs.com/interceptors#more-operators](https://docs.nestjs.com/interceptors#more-operators)