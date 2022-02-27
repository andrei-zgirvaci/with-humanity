import 'styles/globals.css';

import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { initializeApp } from 'firebase/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'nowar-livemap.firebaseapp.com',
  projectId: 'nowar-livemap',
  storageBucket: 'nowar-livemap.appspot.com',
  messagingSenderId: '80290698930',
  appId: '1:80290698930:web:60de91103d9e5e44061bab',
  measurementId: 'G-E1R6X235XR',
};

initializeApp(firebaseConfig);

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
