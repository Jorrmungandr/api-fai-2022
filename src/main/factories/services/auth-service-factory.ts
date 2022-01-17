import { TypeORMUserRepository } from '@/repositories';
import { AuthService } from '@/services';

export const makeAuthService = () => {
  const userRepository = new TypeORMUserRepository();
  const authService = new AuthService(userRepository);

  return authService;
};
