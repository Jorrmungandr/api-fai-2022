import { User } from '@/entities';

export interface CreateUserUseCase {
  execute(userParams: CreateUserUseCase.Params): Promise<CreateUserUseCase.Result>;
}

export namespace CreateUserUseCase {
  export type Params = {
    name: User['name'];
    email: User['email'];
    password: User['password'];
    age: User['age'];
    cpf: User['cpf'];
  };

  export type Result = User;
}
