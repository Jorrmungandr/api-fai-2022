import { NextFunction, Request, Response } from 'express';

import { ListPostService } from '@/services/post';

export class ListPostController {
  constructor(private listPostService: ListPostService) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;

      const posts = await this.listPostService.execute({
        id,
      });

      next(posts);
    } catch (err) {
      next(err);
    }
  }
}
