import { PostRepository } from '@/interfaces/repositories';
import { DeletePostUseCase } from '@/interfaces/usecases/post';

export class DeletePostService implements DeletePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(params: DeletePostUseCase.Params): Promise<DeletePostUseCase.Result> {
    return this.postRepository.delete(params);
  }
}
