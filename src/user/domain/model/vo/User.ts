import IUser from '../../interface/IUser';
import UserCreateCommand from '../command/CreateUserCommand';

export default class User implements IUser {
  private PK: string; // Partition key
  private SK: string; // Sort Key

  userId: string;
  userName: string;
  userType: USER_TYPE;
  userRole: string;

  constructor(user: UserCreateCommand) {
    this.PK = user.userId;
    this.SK = user.userId;
    this.userId = user.userId;
    this.userName = user.userName;
    this.userType = user.userType;
  }

  public assignRole(role: string): void {
    this.userRole = role;
  }
}
