import { collection, getDocs, getFirestore } from 'firebase/firestore';

export interface MarkerObject {
  id: string;
  lat: number;
  lng: number;
  type: 'shelter' | 'evacuate' | 'isMissing';
  description: string;
}

const db = getFirestore();

export default async function getMarkers() {
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

  return markers;
}
