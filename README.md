## Starting with NestJS

```bash
# To get started, grab the NestJS CLI:
$ npm i -g @nestjs/cli

# With the CLI installed, we can create a new project with:
$ nest new serverless-nest

# You’ll be prompted for which package manager to use. e.g. npm

# Once Base nest app is generated, you will need to create template.yaml and Makefile(for Custom build) for SAM CLI
```

## Installing AWS SAM CLI

```bash
$ brew tap aws/tap
$ brew install aws-sam-cli
$ sam --version
```

## First Run

```bash
# Compile typescript
$ nest build
# Testing the API Gateway Endpoint locally (--warm-containers EAGER : not build local lambda docker image if no changes in code)
$ sam local start-api --warm-containers EAGER
$ curl "http://localhost:3000"
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Debug

```bash
# 1. Run sam local invoke with the --debug-port option
$ sam local start-api --warm-containers EAGER --debug-port 5858

# 2. Place a breakpoint where needed

# 3. Start external debugger (in Visual Studio Code, you can just press F5). Check .vscode/launch.json

# 4. Invoke API
$ e.g. curl "http://localhost:3000"
```

## Deployment via SAM CLI
```bash
$ sam build # to ensure .aws-sam is up to date
$ sam deploy # first time, with '--guided' option
```
