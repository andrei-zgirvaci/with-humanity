import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="p-3 grid grid-cols-[1fr_auto_1fr] items-center">
        <Link href="/">
          <p>
            <span className="text-[#0066cc]">With</span>{' '}
            <span className="text-[#ffcc00]">Humanity</span> ☮️
          </p>
        </Link>

        <div className="flex flex-row items-center"></div>

        <div className="text-right">
          <button className="py-1 px-3 rounded-md drop-shadow-md bg-[#0066cc]">
            <a
              className="tracking-wider text-white"
              href="https://andreizgirvaci.typeform.com/to/PtEERbvm"
              rel="noreferrer"
              target="_blank"
            >
              Send request
            </a>
          </button>
        </div>
      </nav>
      {/* <input placeholder="search" type="text" /> */}
    </header>
  );
};

export default Header;
