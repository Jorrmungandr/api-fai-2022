import { User } from './User';

export type Post = {
  id: string;

  content: string;
  media: string;
  user: User;

  createdAt: Date;
  updatedAt: Date;
};
