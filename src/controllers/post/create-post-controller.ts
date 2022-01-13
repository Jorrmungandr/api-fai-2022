import { NextFunction, Request, Response } from 'express';

import { CreatePostService } from '@/services/post';

export class CreatePostController {
  constructor(private createPostService: CreatePostService) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { content, media, userId } = req.body;

      const createdPost = await this.createPostService.execute({
        content,
        media,
        userId,
      });

      next(createdPost);
    } catch (err) {
      next(err);
    }
  }
}
