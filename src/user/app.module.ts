import { Module } from '@nestjs/common';
import { UserController } from './controller/User.controller';
import { CreateUserCommandService } from './application/CreateUserCommand.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserCommandService],
})
export class AppModule {}
