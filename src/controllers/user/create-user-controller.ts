import { NextFunction, Request, Response } from 'express';

import { CreateUserService } from '@/services/user';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, email, password, age, cpf } = req.body;

      const createdUser = await this.createUserService.execute({
        name,
        email,
        password,
        age,
        cpf,
      });

      next(createdUser);
    } catch (err) {
      next(err);
    }
  }
}
