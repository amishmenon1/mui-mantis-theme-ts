// next
import { NextApiRequest, NextApiResponse } from 'next';

import { events } from 'data/calendar';

// ==============================|| CALENDAR - EVENTS ||============================== //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ events });
}
