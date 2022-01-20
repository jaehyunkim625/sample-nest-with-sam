import { Controller, Post } from '@nestjs/common';
import { CreateUserCommandService } from '../application/CreateUserCommand.service';
import CreateUserCommand from '../domain/model/command/CreateUserCommand';
import AwsEvent from './interface/AWSEvent';
import { Response } from './interface/Response';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserCommandService: CreateUserCommandService,
  ) {}

  @Post()
  public async createUser(event: AwsEvent): Promise<Response> {
    try {
      const command = new CreateUserCommand();
      command.userName = event.headers.username;
      command.userType = event.headers.usertype;
      command.userId = 'q01234'; // testing...

      await this.createUserCommandService.createUser(command);

      const response: Response = {
        statusCode: 200,
        body: JSON.stringify('Successfully User has been created.'),
      };
      return response;
    } catch (error) {
      console.error('PaymentProcessController - makePayment', error);
      const errorMessage = {
        message: error.message,
      };
      const errorResponse = {
        statusCode: 500,
        body: JSON.stringify(errorMessage),
      };
      return errorResponse;
    }
  }
}
