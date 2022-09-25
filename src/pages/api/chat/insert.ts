// next
import { NextApiRequest, NextApiResponse } from 'next';

import { chatHistories } from 'data/chat';

// ==============================|| CHAT - NEW MESSAGE ||============================== //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { from, to, text, time } = req.body;
    const result = chatHistories.push({ from, to, text, time });
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
