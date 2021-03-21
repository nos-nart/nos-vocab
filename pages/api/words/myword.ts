import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

import { getMyWord } from '@/lib/data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    if (!session) {
      return res.status(401).send('Unauthorized');
    }
    const myWords = await getMyWord(session.user.id);
    return res.status(201).json({ myWords });
  } catch (error) {
    return res.status(400).json({ error });
  }
}
