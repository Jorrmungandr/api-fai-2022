import { User } from "@/data/entities";
import { UserRepository } from "@/data/repositories";
import { AuthUsecase } from "@/data/usecases";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService implements AuthUsecase {
  constructor(private userRepository: UserRepository) {}

  async login({ email, password }: AuthUsecase.loginParams): Promise<{ user: Omit<User, 'password'>, accessToken: string }> {
    const [user] = await this.userRepository.list({ email });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const authUser = await this.userRepository.findOne({ id: user.id });

    const isPasswordValid = await bcrypt.compare(password, authUser.password);

    if (!isPasswordValid) {
      throw new Error('Senha inválida');
    }

    const accessToken = jwt.sign({ email, type: 'access' }, 'JlhjadbskfahsbljGAOUY', { expiresIn: '2h' });
    const refreshToken = jwt.sign({ email, type: 'refresh' }, 'JlhjadbskfahsbljGAOUY', { expiresIn: '3days' });

    return {
      user,
      accessToken,
    };
  }
}