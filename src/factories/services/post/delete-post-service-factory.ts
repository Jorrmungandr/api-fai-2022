import { TypeormPostRepository } from '@/database/repositories';
import { DeletePostService } from '@/services/post';

export const makeDeletePostService = () => {
  const postRepository = new TypeormPostRepository();

  return new DeletePostService(postRepository);
};
