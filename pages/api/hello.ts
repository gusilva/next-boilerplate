import nc from 'next-connect';
import onError from '../../middleware/error';
import { Request, Response } from '../../types';

const handler = nc({ onError });

handler.get((req: Request, res: Response) => {
  res.send({ name: 'John Doe' });
});

export default handler;
