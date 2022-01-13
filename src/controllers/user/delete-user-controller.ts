import { NextFunction, Request, Response } from 'express';

import { DeleteUserService } from '@/services/user';

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;

      await this.deleteUserService.execute({
        id,
      });

      next();
    } catch (err) {
      next(err);
    }
  }
}
