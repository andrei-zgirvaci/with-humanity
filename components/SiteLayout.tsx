import { ReactElement } from 'react';

import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />

      <main className="flex flex-1">{children}</main>

      <footer className="py-1 text-center text-base text-slate-700">
        Made with humanity by{' '}
        <a
          className="italic underline"
          href="https://www.instagram.com/andrei.zgirvaci"
          target="_blank"
          rel="noreferrer"
        >
          Andrei
        </a>{' '}
        🇲🇩 &{' '}
        <a
          className="italic underline"
          href="https://www.instagram.com/nomadchology"
          target="_blank"
          rel="noreferrer"
        >
          Yinmi
        </a>{' '}
        🇮🇩
      </footer>
    </div>
  );
};

export const getSiteLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Layout;
