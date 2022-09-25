// next
import { NextApiRequest, NextApiResponse } from 'next';

import { products } from 'data/e-commerce';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  const results = products.filter((product) => product.id !== Number(id));
  res.status(200).json(results);
}
