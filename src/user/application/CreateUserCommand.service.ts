import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import IUser from '../domain/interface/IUser';
import CreateUserCommand from '../domain/model/command/CreateUserCommand';
import { UserRepository } from '../domain/model/repository/UserRepository';
import IUserFactory from '../domain/model/service/IUserFactory';
import SystemUserFactory from '../domain/model/service/SystemUserFactory';
import UserFactory from '../domain/model/service/UserFactory';
import UserDDbRepository from '../infrastructure/persistence/UserDDbRepository';

@Injectable()
export class CreateUserCommandService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserDDbRepository();
  }

  public async createUser(command: CreateUserCommand): Promise<void> {
    const factory: IUserFactory = this.getFactory(command.userType);
    const user: IUser = factory.createUser(command);
    return await this.userRepository.save(user);
  }

  private getFactory(userType: USER_TYPE): IUserFactory {
    let factory: IUserFactory;
    switch (userType) {
      case USER_TYPE.User:
        factory = new UserFactory();
        break;
      case USER_TYPE.SystemUser:
        factory = new SystemUserFactory();
        break;
      default:
        throw new NotFoundException(400, 'method not supported');
    }
    return factory;
  }
}
