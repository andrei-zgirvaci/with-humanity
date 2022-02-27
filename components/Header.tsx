import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <nav className="p-3 grid grid-cols-[1fr_auto_1fr] items-center">
        <div className="flex flex-row items-center">
          <Image src="/images/logo.png" alt="logo" width={24} height={24} />

          <p className="font-bold tracking-wider">
            <span className="text-[#0066cc] ml-2">WITH</span>{' '}
            <span className="text-[#ffcc00]">HUMANITY</span>
          </p>
        </div>

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
    </header>
  );
};

export default Header;
