import { TypeormSingleton } from '../config';
import { Post } from '../models';

import { PostRepository } from '@/interfaces/repositories';

export class TypeormPostRepository implements PostRepository {
  async create(params: PostRepository.createParams): Promise<Post> {
    try {
      const createdPost = await TypeormSingleton.instance.getRepository(Post).save({ ...params });

      return createdPost;
    } catch (error) {
      throw new Error(error);
    }
  }

  async list(params: PostRepository.listParams): Promise<Post[]> {
    try {
      const posts = await TypeormSingleton.instance.getRepository(Post).find({
        where: { id: params.id },
      });

      return posts;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(params: PostRepository.updateParams): Promise<Post> {
    try {
      const { id, ...restParams } = params;

      await TypeormSingleton.instance.getRepository(Post).update(id, restParams);
      const [updatedPost] = await TypeormSingleton.instance.getRepository(Post).findByIds([id]);

      return updatedPost;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(params: PostRepository.deleteParams): Promise<void> {
    try {
      await TypeormSingleton.instance.getRepository(Post).delete(params.id);

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}
