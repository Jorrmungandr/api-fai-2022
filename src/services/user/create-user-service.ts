import { UserRepository } from '@/interfaces/repositories';
import { CreateUserUseCase } from '@/interfaces/usecases/user';

export class CreateUserService implements CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(params: CreateUserUseCase.Params): Promise<CreateUserUseCase.Result> {
    return this.userRepository.create(params);
  }
}
