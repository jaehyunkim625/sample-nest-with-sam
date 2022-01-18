import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World 4!';
  }
  getChris(): string {
    return 'Hello Chris!';
  }
}
