import { UpdatePostController } from '@/controllers/post';
import { makeUpdatePostService } from '@/factories/services/post';

export const makeUpdatePostController = () => {
  const postService = makeUpdatePostService();

  return new UpdatePostController(postService);
};
