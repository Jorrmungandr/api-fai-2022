import { User } from '@/entities';

export interface ListUserUseCase {
  execute(userParams: ListUserUseCase.Params): Promise<ListUserUseCase.Result>;
}

export namespace ListUserUseCase {
  export type Params = {
    id?: string;
  };

  export type Result = User[];
}
