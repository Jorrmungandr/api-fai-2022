import { UpdateUserController } from '@/controllers/user';
import { makeUpdateUserService } from '@/factories/services/user';

export const makeUpdateUserController = () => {
  const userService = makeUpdateUserService();

  return new UpdateUserController(userService);
};
