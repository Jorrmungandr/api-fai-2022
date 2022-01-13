import { Post } from '@/entities';

export interface ListPostUseCase {
  execute(postParams: ListPostUseCase.Params): Promise<ListPostUseCase.Result>;
}

export namespace ListPostUseCase {
  export type Params = {
    id?: string;
  };

  export type Result = Post[];
}
