import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppController } from './controller/app.controller';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app = await NestFactory.createApplicationContext(AppModule);
  return app;
}
// bootstrap();

export async function handler(event, context) {
  const app = await bootstrap();
  const appController = app.get(AppController);
  let data: string;

  if (event.httpMethod === 'GET' && event.path === '/') {
    data = appController.getHello();
  } else if (event.httpMethod === 'GET' && event.path === '/chris') {
    data = appController.getChris();
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: data,
    }),
  };
}
