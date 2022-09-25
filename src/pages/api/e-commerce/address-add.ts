// next
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as UIDV4 } from 'uuid';
import { address } from 'data/e-commerce';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, destination, building, street, city, state, country, post, phone, isDefault } = req.body;
  const newAddress = {
    id: UIDV4(),
    name,
    destination,
    building,
    street,
    city,
    state,
    country,
    post,
    phone,
    isDefault
  };

  let result = address;

  if (isDefault) {
    result = address.map((item) => {
      if (item.isDefault === true) {
        return { ...item, isDefault: false };
      }
      return item;
    });
  }

  result = [...result, newAddress];
  res.status(200).json({ address: result });
}
