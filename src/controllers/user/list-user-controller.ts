import { NextFunction, Request, Response } from 'express';

import { ListUserService } from '@/services/user';

export class ListUserController {
  constructor(private listUserService: ListUserService) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;

      const users = await this.listUserService.execute({
        id,
      });

      next(users);
    } catch (err) {
      next(err);
    }
  }
}
