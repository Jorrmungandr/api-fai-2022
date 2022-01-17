import { makeAuthService } from '../services';

import { AuthController } from '@/controllers';

export const makeAuthController = () => {
  const authService = makeAuthService();
  const authController = new AuthController(authService);

  return authController;
};
