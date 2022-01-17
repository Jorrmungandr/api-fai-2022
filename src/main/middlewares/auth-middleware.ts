import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send('Unauthorized');
  }

  const accessToken = authorization.replace('Bearer ', '');

  if (!accessToken) {
    return res.status(401).send('Unauthorized');
  }

  try {
    jwt.verify(accessToken, 'JlhjadbskfahsbljGAOUY');
  } catch (err) {
    return res.status(400).send('Invalid token');
  }

  next();
}