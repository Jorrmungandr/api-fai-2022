import { Post } from '@/entities';

export interface CreatePostUseCase {
  execute(postParams: CreatePostUseCase.Params): Promise<CreatePostUseCase.Result>;
}

export namespace CreatePostUseCase {
  export type Params = {
    content: Post['content'];
    media: Post['media'];
    userId: Post['user']['id'];
  };

  export type Result = Post;
}
