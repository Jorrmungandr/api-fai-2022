import { Post } from '@/entities';

export interface PostRepository {
  create(params: PostRepository.createParams): Promise<Post>;
  list(params: PostRepository.listParams): Promise<Post[]>;
  update(params: PostRepository.updateParams): Promise<Post>;
  delete(params: PostRepository.deleteParams): Promise<void>;
}

export namespace PostRepository {
  export type createParams = {
    content: Post['content'];
    media: Post['media'];
    userId: Post['user']['id'];
  };

  export type listParams = {
    id?: string;
  };

  export type updateParams = {
    id: string;
    content?: Post['content'];
    media?: Post['media'];
    userId?: Post['user']['id'];
  };

  export type deleteParams = {
    id: string;
  };
}
