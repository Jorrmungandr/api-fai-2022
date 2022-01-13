import { TypeormUserRepository } from '@/database/repositories';
import { UpdateUserService } from '@/services/user';

export const makeUpdateUserService = () => {
  const userRepository = new TypeormUserRepository();

  return new UpdateUserService(userRepository);
};
