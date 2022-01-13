import { PostRepository } from '@/interfaces/repositories';
import { UpdatePostUseCase } from '@/interfaces/usecases/post';

export class UpdatePostService implements UpdatePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(params: UpdatePostUseCase.Params): Promise<UpdatePostUseCase.Result> {
    return this.postRepository.update(params);
  }
}
