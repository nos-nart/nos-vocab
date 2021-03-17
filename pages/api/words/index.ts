import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

import { getWords } from '@/lib/data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    if (!session) {
      return res.status(401).send('Unauthorized');
    }
    const words = await getWords();
    console.log("🚀 ~ file: index.ts ~ line 13 ~ words", words);
    return res.status(200).json({ words });
  } catch (error) {
    return res.status(400).json({ error });
  }
}
