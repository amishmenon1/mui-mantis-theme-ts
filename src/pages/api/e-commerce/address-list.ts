// next
import { NextApiRequest, NextApiResponse } from 'next';

import { address } from 'data/e-commerce';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ address });
}
