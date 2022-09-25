// next
import { NextApiRequest, NextApiResponse } from 'next';

import { productReviews } from 'data/e-commerce';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ productReviews });
}
