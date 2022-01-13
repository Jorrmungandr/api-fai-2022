import Router from 'express';

import { postRouter } from './post-routes';
import { userRouter } from './user-routes';

const router = Router();

router.use('/posts', postRouter);
router.use('/users', userRouter);

export { router };
