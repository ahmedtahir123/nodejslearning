import { Request, Response, NextFunction } from 'express';

export const permission = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.headers['user-id'];
  if (!userId) {
    return res.status(403).send('Access denied. No user ID provided.');
  }
  next();
};