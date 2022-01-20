import { NotFoundException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserController } from './controller/User.controller';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  return app;
}

export async function handler(event, context) {
  const app = await bootstrap();
  const userController = app.get(UserController);

  let response: any;

  if (event.httpMethod === 'POST' && event.path === '/') {
    response = await userController.createUser(event);
  } else {
    throw new NotFoundException(404, 'no method exist');
  }

  return response;
}
