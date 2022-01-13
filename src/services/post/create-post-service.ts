import { PostRepository } from '@/interfaces/repositories';
import { CreatePostUseCase } from '@/interfaces/usecases/post';

export class CreatePostService implements CreatePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(params: CreatePostUseCase.Params): Promise<CreatePostUseCase.Result> {
    return this.postRepository.create(params);
  }
}
