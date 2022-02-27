import type { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MarkerObject } from 'lib/markers';

const db = getFirestore();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MarkerObject[]>
) {
  const querySnapshot = await getDocs(collection(db, 'markers'));

  const markers: MarkerObject[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    markers.push({
      id: doc.id,
      lat: data.location._lat,
      lng: data.location._long,
      type: data.type,
      description: data.description,
    });
  });

  res.status(200).json(markers);
}
