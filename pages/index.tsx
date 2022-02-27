import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import GoogleMapReact from 'google-map-react';

import { getSiteLayout } from 'components/SiteLayout';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Home = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <Head>
        <title>Braindump | Andrei Zgirvaci</title>
      </Head>

      <section className="flex-1">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: '',
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </section>
    </>
  );
};

Home.getLayout = getSiteLayout;

export default Home;
