import axios from 'axios';

export interface MarkerObject {
  id: string;
  lat: number;
  lng: number;
  type: 'shelter' | 'evacuate' | 'isMissing';
  description: string;
}

export default async function getMarkers() {
  const response = await axios.get<MarkerObject[]>('/markers');

  return response.data;
}
