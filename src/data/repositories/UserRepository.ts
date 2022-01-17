import { User } from '../entities';

export interface UserRepository {
  create(params: UserRepository.createParams): Promise<Omit<User, 'password'>>;
  findOne(params?: UserRepository.findOneParams): Promise<User>;
  list(params?: UserRepository.listParams): Promise<User[]>;
  update(params: UserRepository.updateParams): Promise<User>;
  delete(params: UserRepository.deleteParams): Promise<void>;
}

export namespace UserRepository {
  export type createParams = Omit<User, 'id'>;

  export type findOneParams = { id: User['id'] };

  export type listParams = { id?: User['id']; email?: User['email'] };

  export type updateParams = {
    id: User['id'];

    name?: User['name'];
    age?: User['age'];
    email?: User['email'];
    password?: User['password'];
  };

  export type deleteParams = {
    id: string;
  };
}
