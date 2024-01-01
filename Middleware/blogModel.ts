import { Request, Response, NextFunction } from 'express';

export function blobModelMiddleWare (req: Request, res: Response, next: NextFunction) {
    const { title, content, username } = req.body;
    if (title !== null &&  content!== null && username !== null ) {
      return res.status(500).send('VAlue is missing');
    }
    next();
}
