import { NextFunction, Request, Response } from 'express';

import { UpdatePostService } from '@/services/post';

export class UpdatePostController {
  constructor(private updatePostService: UpdatePostService) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { content, media, userId } = req.body;

      const updatedPost = await this.updatePostService.execute({
        id,
        content,
        media,
        userId,
      });

      next(updatedPost);
    } catch (err) {
      next(err);
    }
  }
}
