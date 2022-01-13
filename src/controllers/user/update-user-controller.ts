import { NextFunction, Request, Response } from 'express';

import { UpdateUserService } from '@/services/user';

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { name, email, password, age, cpf } = req.body;

      const updatedUser = await this.updateUserService.execute({
        id,
        name,
        email,
        password,
        age,
        cpf,
      });

      next(updatedUser);
    } catch (err) {
      next(err);
    }
  }
}
