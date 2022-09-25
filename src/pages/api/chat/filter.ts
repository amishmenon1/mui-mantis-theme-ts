// next
import { NextApiRequest, NextApiResponse } from 'next';

import { chatHistories } from 'data/chat';

// ==============================|| CHAT - FILTER ||============================== //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user } = req.query;
    const result = chatHistories.filter((item) => item.from === user || item.to === user);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
