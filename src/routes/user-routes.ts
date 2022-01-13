import { Router } from 'express';

import {
  makeCreateUserController,
  makeDeleteUserController,
  makeListUserController,
  makeUpdateUserController,
} from '@/factories/controllers/user';

const userRouter = Router();

userRouter.post('/', (...props) => {
  const createUserController = makeCreateUserController();
  return createUserController.handle(...props);
});
userRouter.get('/:id?', makeListUserController().handle);
userRouter.put('/:id?', makeUpdateUserController().handle);
userRouter.delete('/:id?', makeDeleteUserController().handle);

export { userRouter };
