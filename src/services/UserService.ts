import { UserRepository } from '@/data/repositories';
import { UserUsecase } from '@/data/usecases';
import bcrypt from 'bcrypt';

export class UserService implements UserUsecase {
  constructor(private userRepository: UserRepository) {}

  async create(createParams: UserUsecase.createParams) {
    const hashedPassword = await bcrypt.hash(createParams.password, 10);

    return this.userRepository.create({
      name: createParams.name,
      email: createParams.email,
      age: createParams.age,
      password: hashedPassword,
    });
  }

  async list() {
    return this.userRepository.list();
  }

  async update(updateParams: UserUsecase.updateParams) {
    return this.userRepository.update(updateParams);
  }

  async delete(deleteParams: UserUsecase.deleteParams) {
    return this.userRepository.delete(deleteParams);
  }
}
