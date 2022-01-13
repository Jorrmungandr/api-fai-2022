import { ListUserController } from '@/controllers/user';
import { makeListUserService } from '@/factories/services/user';

export const makeListUserController = () => {
  const userService = makeListUserService();

  return new ListUserController(userService);
};
