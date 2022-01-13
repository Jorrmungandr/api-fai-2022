import { DeleteUserController } from '@/controllers/user';
import { makeDeleteUserService } from '@/factories/services/user';

export const makeDeleteUserController = () => {
  const userService = makeDeleteUserService();

  return new DeleteUserController(userService);
};
