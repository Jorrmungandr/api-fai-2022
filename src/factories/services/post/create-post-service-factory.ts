import { TypeormPostRepository } from '@/database/repositories';
import { CreatePostService } from '@/services/post';

export const makeCreatePostService = () => {
  const postRepository = new TypeormPostRepository();

  return new CreatePostService(postRepository);
};
