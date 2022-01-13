import { User } from '@/entities';

export interface UserRepository {
  create(params: UserRepository.createParams): Promise<Omit<User, 'password'>>;
  list(params: UserRepository.listParams): Promise<User[]>;
  update(params: UserRepository.updateParams): Promise<User>;
  delete(params: UserRepository.deleteParams): Promise<void>;
}

export namespace UserRepository {
  export type createParams = {
    name: User['name'];
    email: User['email'];
    password: User['password'];
    age: User['age'];
    cpf: User['cpf'];
  };

  export type listParams = {
    id?: string;
  };

  export type updateParams = {
    id: string;
    name?: User['name'];
    email?: User['email'];
    password?: User['password'];
    age?: User['age'];
    cpf?: User['cpf'];
  };

  export type deleteParams = {
    id: string;
  };
}
