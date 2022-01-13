import { TypeormPostRepository } from '@/database/repositories';
import { UpdatePostService } from '@/services/post';

export const makeUpdatePostService = () => {
  const postRepository = new TypeormPostRepository();

  return new UpdatePostService(postRepository);
};
