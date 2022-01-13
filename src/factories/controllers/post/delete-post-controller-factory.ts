import { DeletePostController } from '@/controllers/post';
import { makeDeletePostService } from '@/factories/services/post';

export const makeDeletePostController = () => {
  const postService = makeDeletePostService();

  return new DeletePostController(postService);
};
