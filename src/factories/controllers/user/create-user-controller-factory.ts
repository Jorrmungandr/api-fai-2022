import { CreateUserController } from '@/controllers/user';
import { makeCreateUserService } from '@/factories/services/user';

export const makeCreateUserController = () => {
  const userService = makeCreateUserService();

  return new CreateUserController(userService);
};
