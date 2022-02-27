import { ReactElement } from 'react';

import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />

      <main className="flex flex-1">{children}</main>
    </div>
  );
};

export const getSiteLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Layout;
