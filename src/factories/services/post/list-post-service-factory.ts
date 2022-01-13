import { TypeormPostRepository } from '@/database/repositories';
import { ListPostService } from '@/services/post';

export const makeListPostService = () => {
  const postRepository = new TypeormPostRepository();

  return new ListPostService(postRepository);
};
