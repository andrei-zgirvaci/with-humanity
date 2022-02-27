import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import GoogleMapReact from 'google-map-react';

import Marker from 'components/Marker';
import { getSiteLayout } from 'components/SiteLayout';

import getMarkers, { MarkerObject } from 'lib/markers';

export async function getServerSideProps() {
  const markers = await getMarkers();

  return {
    props: { markers },
  };
}

const Home = ({
  markers,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const defaultProps = {
    center: {
      lat: 50.46372175476692,
      lng: 30.529234424870925,
    },
    zoom: 6,
  };

  return (
    <>
      <Head>
        <title>Live Map | With humanity</title>
      </Head>

      <section className="flex-1">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {markers.map((marker: MarkerObject) => (
            <Marker key={marker.id} {...marker} />
          ))}
        </GoogleMapReact>
      </section>
    </>
  );
};

Home.getLayout = getSiteLayout;

export default Home;
