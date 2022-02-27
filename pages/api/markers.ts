import type { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MarkerObject } from 'lib/markers';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MarkerObject[]>
) {
  const markers: MarkerObject[] = [
    {
      id: '1',
      lat: 50.46372175476692,
      lng: 30.529234424870925,
      type: 'shelter',
      description: `Please \n\nhelp me find my brother! \n\nContact me on: \n+380967897654`,
    },
    {
      id: '2',
      lat: 49.26372175476692,
      lng: 28.429234424870925,
      type: 'evacuate',
      description: `Please \n\nhelp me find my brother! \n\nContact me on: \n+380967897654`,
    },
    {
      id: '3',
      lat: 48.42372175476692,
      lng: 28.509234424870925,
      type: 'isMissing',
      description: `Please \n\nhelp me find my brother! \n\nContact me on: \n+380967897654`,
    },
  ];

  res.status(200).json(markers);
}
