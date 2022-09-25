// next
import { NextApiRequest, NextApiResponse } from 'next';

// third-party
import { map, assign } from 'lodash';

import { events } from 'data/calendar';

// ==============================|| CALENDAR - EVENT EDIT ||============================== //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { eventId, update } = req.body;
    let event = null;
    map(events, (_event) => {
      if (_event.id === eventId) {
        assign(_event, { ...update });
        event = _event;
      }

      return _event;
    });

    res.status(200).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
