import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="px-8 py-20 flex flex-col gap-12 bg-black text-white shadow-inner shadow-black/30 border-t border-gray-800">
      <div className="mx-auto max-w-5xl">
        <div>
          <div className="text-white">
            <div className="inline-flex items-center gap-3">
              <i className="bi bi-music-note-beamed text-2xl text-[#cff245]"></i>
              <p className="text-2xl font-bold">SONGO & ZUZA</p>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Profesjonalny zespół muzyczny. Oprawa muzyczna wesel, bankietów i imprez okolicznościowych. 
              100% muzyka na żywo. Własny sprzęt nagłośnieniowy i oświetlenie. Transport w całej Polsce.
            </p>
          </div>
        </div>
        <div className="flex flex-col pt-12 md:flex-row md:items-center md:justify-between border-t border-gray-800 mt-8">
          <p className="text-left">
            <span className="mx-auto mt-2 text-xs text-gray-500 lg:mx-0">
              © Songo & Zuza. All rights reserved
            </span>
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://pl-pl.facebook.com/SongoZuza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#cff245] text-black hover:bg-white transition shadow-lg shadow-[#cff245]/30"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
