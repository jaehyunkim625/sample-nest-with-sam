import IUser from '../../interface/IUser';
import IRepository from './IRepository';

export interface UserRepository extends IRepository<IUser> {
  getUserByName(name: string): Promise<Array<IUser>>;
}
