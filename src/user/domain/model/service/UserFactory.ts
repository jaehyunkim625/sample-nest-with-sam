import IUser from '../../interface/IUser';
import CreateUserCommand from '../command/CreateUserCommand';
import User from '../vo/User';
import IUserFactory from './IUserFactory';

export default class UserFactory extends IUserFactory {
  protected factoryMethod(createUserCommand: CreateUserCommand): IUser {
    console.log('UserFactory - User created...');
    const user = new User(createUserCommand);
    user.assignRole('Normal');
    return user;
  }
}
