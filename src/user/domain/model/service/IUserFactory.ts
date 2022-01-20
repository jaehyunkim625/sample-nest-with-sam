import IUser from '../../interface/IUser';
import CreateUserCommand from '../command/CreateUserCommand';

export default abstract class IUserFactory {
  protected abstract factoryMethod(createUserCommand: CreateUserCommand): IUser;
  public createUser(userCreateCommand: CreateUserCommand): IUser {
    const user = this.factoryMethod(userCreateCommand);
    return user;
  }
}
