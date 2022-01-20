/* eslint-disable @typescript-eslint/no-unused-vars */
import IUser from '../../domain/interface/IUser';
import { UserRepository } from '../../domain/model/repository/UserRepository';

export default class UserDDbRepository implements UserRepository {
  public async getUserByName(_userName: string): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }
  public async get(_userId: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  public async delete(_userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public async save(_user: IUser): Promise<void> {
    return null;
  }
  public async update(_user: IUser): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
}
