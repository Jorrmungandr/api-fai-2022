import { User } from '../entities';

export interface AuthUsecase {
  login(params: AuthUsecase.loginParams): Promise<{ user: Omit<User, 'password'>, accessToken: string }>;
}

export namespace AuthUsecase {
  export type loginParams = { email: User['email']; password: User['password'] };
}
