import { UserRepository } from '@/data/repositories';
import { TypeormHelper } from '@/db/config';
import { User } from '@/db/models';

export class TypeORMUserRepository implements UserRepository {
  async create(createUserParams: UserRepository.createParams) {
    const { password, ...createdUser } = await TypeormHelper.connection.getRepository(User).save(createUserParams);

    return createdUser;
  }

  async findOne({ id }: UserRepository.findOneParams) {
    const user = await TypeormHelper.connection.getRepository(User).findOne({ id }, { select: ['password', 'email'] });
    return user;
  }

  async list(listParams: UserRepository.listParams = {}) {
    const filteredParams = Object.fromEntries(
      Object.entries(listParams).filter(([, value]) => {
        if (value === undefined) {
          return false;
        }
        return true;
      }),
    );

    const users = await TypeormHelper.connection.getRepository(User).find(filteredParams);

    return users;
  }

  async update(params: UserRepository.updateParams) {
    const { id, ...updateUserParams } = params;

    const filteredParams = Object.fromEntries(
      Object.entries(updateUserParams).filter(([, value]) => {
        if (value === undefined) {
          return false;
        }
        return true;
      }),
    );

    await TypeormHelper.connection.getRepository(User).update(id, filteredParams);
    const updatedUser = await TypeormHelper.connection.getRepository(User).findOne({ id });

    return updatedUser;
  }

  async delete(deleteUserParams: UserRepository.deleteParams) {
    const { id } = deleteUserParams;

    await TypeormHelper.connection.getRepository(User).delete({ id });
  }
}
