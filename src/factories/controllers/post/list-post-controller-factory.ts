import { ListPostController } from '@/controllers/post';
import { makeListPostService } from '@/factories/services/post';

export const makeListPostController = () => {
  const postService = makeListPostService();

  return new ListPostController(postService);
};
