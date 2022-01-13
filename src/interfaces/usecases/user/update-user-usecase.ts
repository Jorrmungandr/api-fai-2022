import { User } from '@/entities';

export interface UpdateUserUseCase {
  execute(userParams: UpdateUserUseCase.Params): Promise<UpdateUserUseCase.Result>;
}

export namespace UpdateUserUseCase {
  export type Params = {
    id: string;
    name?: User['name'];
    email?: User['email'];
    password?: User['password'];
    age?: User['age'];
    cpf?: User['cpf'];
  };

  export type Result = User;
}
