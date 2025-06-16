import { FC } from "react";


const Banner: FC = () => {
  return (
    <section
      id="banner"
      className="relative bg-cover bg-center min-h-[420px] flex items-center justify-center"
      style={{ backgroundImage: `url('/images/banner-0.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 text-center max-w-2xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Profesjonalna obsługa muzyczna imprez okolicznościowych i wesel
        </h1>
        <p className="mb-8 text-lg md:text-xl text-white/90 font-medium drop-shadow">
          Zespół muzyczny obsługujący wesela, studniówki, bankiety, bale, i nie tylko. Gramy na terenie całej Polski.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="/repertoire" className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary-dark transition text-base">
            Posłuchaj
          </a>
          <a href="/contact" className="px-6 py-3 rounded-full bg-white text-primary font-semibold shadow hover:bg-gray-100 transition text-base">
            Kontakt
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://www.facebook.com/SongoZuza" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-base">
            Fanpage
          </a>
          <a href="https://www.facebook.com/songoandzuza" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white text-blue-600 font-semibold shadow hover:bg-gray-100 transition text-base">
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
