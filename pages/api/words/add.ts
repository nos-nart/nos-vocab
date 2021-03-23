import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

import { addWord } from '@/lib/data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    if (!session) {
      return res.status(401).send('Unauthorized');
    }
    const newWord = await addWord(req.body);
    return res.status(201).json({ newWord });
  } catch (error) {
    return res.status(400).json({ error });
  }
}
