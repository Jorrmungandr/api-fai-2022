import { TypeormSingleton } from '../config';
import { User } from '../models';

import { UserRepository } from '@/interfaces/repositories';

export class TypeormUserRepository implements UserRepository {
  async create(params: UserRepository.createParams): Promise<Omit<User, 'password'>> {
    try {
      const { password, ...user } = await TypeormSingleton.instance.getRepository(User).save({ ...params });

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async list(params: UserRepository.listParams): Promise<User[]> {
    try {
      const users = await TypeormSingleton.instance.getRepository(User).find({
        where: { id: params.id },
      });

      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(params: UserRepository.updateParams): Promise<User> {
    try {
      const { id, ...restParams } = params;

      await TypeormSingleton.instance.getRepository(User).update(id, restParams);
      const [updatedUser] = await TypeormSingleton.instance.getRepository(User).findByIds([id]);

      return updatedUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(params: UserRepository.deleteParams): Promise<void> {
    try {
      await TypeormSingleton.instance.getRepository(User).delete(params.id);

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}
