import { TypeormUserRepository } from '@/database/repositories';
import { CreateUserService } from '@/services/user';

export const makeCreateUserService = () => {
  const userRepository = new TypeormUserRepository();

  return new CreateUserService(userRepository);
};
