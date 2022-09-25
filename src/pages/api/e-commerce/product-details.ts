// next
import { NextApiRequest, NextApiResponse } from 'next';

import { products } from 'data/e-commerce';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  let results;
  if (id === 'default') {
    [results] = products;
  } else {
    [results] = products.filter((product) => product.id === Number(id));
  }
  res.status(200).json(results);
}
