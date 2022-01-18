import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../src/hello/controller/app.controller';
import { AppService } from '../../src/hello/application/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World 4!"', () => {
      expect(appController.getHello()).toBe('Hello World 4!');
    });
  });
});
