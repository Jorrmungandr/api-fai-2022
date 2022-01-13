import { UserRepository } from '@/interfaces/repositories';
import { ListUserUseCase } from '@/interfaces/usecases/user';

export class ListUserService implements ListUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(params: ListUserUseCase.Params): Promise<ListUserUseCase.Result> {
    return this.userRepository.list(params);
  }
}
