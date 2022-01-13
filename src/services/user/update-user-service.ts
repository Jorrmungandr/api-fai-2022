import { UserRepository } from '@/interfaces/repositories';
import { UpdateUserUseCase } from '@/interfaces/usecases/user';

export class UpdateUserService implements UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(params: UpdateUserUseCase.Params): Promise<UpdateUserUseCase.Result> {
    return this.userRepository.update(params);
  }
}
