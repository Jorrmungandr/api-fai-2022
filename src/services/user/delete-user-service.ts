import { UserRepository } from '@/interfaces/repositories';
import { DeleteUserUseCase } from '@/interfaces/usecases/user';

export class DeleteUserService implements DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(params: DeleteUserUseCase.Params): Promise<DeleteUserUseCase.Result> {
    return this.userRepository.delete(params);
  }
}
