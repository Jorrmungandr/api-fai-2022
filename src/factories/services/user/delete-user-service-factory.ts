import { TypeormUserRepository } from '@/database/repositories';
import { DeleteUserService } from '@/services/user';

export const makeDeleteUserService = () => {
  const userRepository = new TypeormUserRepository();

  return new DeleteUserService(userRepository);
};
