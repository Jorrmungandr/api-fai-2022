import { NextFunction, Request, Response } from 'express';

import { DeletePostService } from '@/services/post';

export class DeletePostController {
  constructor(private deletePostService: DeletePostService) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;

      await this.deletePostService.execute({
        id,
      });

      next();
    } catch (err) {
      next(err);
    }
  }
}
