// next
import { NextApiRequest, NextApiResponse } from 'next';

// third-party
import reject from 'lodash/reject';

import { events } from 'data/calendar';

// ==============================|| CALENDAR - EVENT DELETE ||============================== //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { eventId } = req.body;
    reject(events, { id: eventId });

    res.status(200).json(eventId);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
