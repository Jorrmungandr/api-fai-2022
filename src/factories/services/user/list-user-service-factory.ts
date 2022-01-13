import { TypeormUserRepository } from '@/database/repositories';
import { ListUserService } from '@/services/user';

export const makeListUserService = () => {
  const userRepository = new TypeormUserRepository();

  return new ListUserService(userRepository);
};
