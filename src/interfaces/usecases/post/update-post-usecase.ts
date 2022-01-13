import { Post } from '@/entities';

export interface UpdatePostUseCase {
  execute(PostParams: UpdatePostUseCase.Params): Promise<UpdatePostUseCase.Result>;
}

export namespace UpdatePostUseCase {
  export type Params = {
    id: string;
    content?: Post['content'];
    media?: Post['media'];
    userId?: Post['user']['id'];
  };

  export type Result = Post;
}
