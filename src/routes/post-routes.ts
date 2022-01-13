import { Router } from 'express';

import {
  makeCreatePostController,
  makeDeletePostController,
  makeListPostController,
  makeUpdatePostController,
} from '@/factories/controllers/post';

const postRouter = Router();

postRouter.post('/', makeCreatePostController().handle);
postRouter.get('/:id?', makeListPostController().handle);
postRouter.put('/:id?', makeUpdatePostController().handle);
postRouter.delete('/:id?', makeDeletePostController().handle);

export { postRouter };
