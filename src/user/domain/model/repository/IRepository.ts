export default interface IRepository<T> {
  get(userId: string): Promise<T>;
  delete(userId: string): Promise<void>;
  save(user: T): Promise<void>;
  update(user: T): Promise<T>;
}
