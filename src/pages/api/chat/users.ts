// next
import { NextApiRequest, NextApiResponse } from 'next';

import { users } from 'data/chat';

// ==============================|| CHAT - USER LIST ||============================== //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ users });
}
