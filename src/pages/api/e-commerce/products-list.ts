// next
import { NextApiRequest, NextApiResponse } from 'next';

import { products } from 'data/e-commerce';

// ==============================|| CALENDAR - EVENTS ||============================== //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ products });
}
