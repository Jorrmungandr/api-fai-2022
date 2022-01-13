import { PostRepository } from '@/interfaces/repositories';
import { ListPostUseCase } from '@/interfaces/usecases/post';

export class ListPostService implements ListPostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(params: ListPostUseCase.Params): Promise<ListPostUseCase.Result> {
    return this.postRepository.list(params);
  }
}
