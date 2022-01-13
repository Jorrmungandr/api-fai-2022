import { CreatePostController } from '@/controllers/post';
import { makeCreatePostService } from '@/factories/services/post';

export const makeCreatePostController = () => {
  const postService = makeCreatePostService();

  return new CreatePostController(postService);
};
