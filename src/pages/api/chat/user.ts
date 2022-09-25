// next
import { NextApiRequest, NextApiResponse } from 'next';

import { users } from 'data/chat';

// ==============================|| CHAT - USER DETAILS ||============================== //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const index = users.findIndex((x: any) => x.id.toString() === id);
    res.status(200).json(users[index]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
