// next
import { NextApiRequest, NextApiResponse } from 'next';

// third-party
import { v4 as UIDV4 } from 'uuid';

import { events } from 'data/calendar';

// ==============================|| CALENDAR - EVENT ADD ||============================== //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { allDay, description, color, textColor, end, start, title } = req.body;
    const event = {
      id: UIDV4(),
      allDay,
      description,
      color,
      textColor,
      end,
      start,
      title
    };

    events.push(event);

    res.status(200).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
