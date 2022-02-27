import Link from 'next/link';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header>
      <nav className="p-3 grid grid-cols-[1fr_auto_1fr] items-center">
        <Link href="/">Andrei Zgirvaci</Link>

        <div className="flex flex-row items-center">
          <Icon className="text-3xl" icon="openmoji:brain" />
          <h2>braindump</h2>
        </div>
      </nav>
      {/* <input placeholder="search" type="text" /> */}
    </header>
  );
};

export default Header;
