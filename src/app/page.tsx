import { getAllPersons } from "../repositories/personRepository";
import pl from "../resources/pl";
import NavigationButton from "../components/NavigationButtons";

export default async function Home() {
  const persons = await getAllPersons();
  return (
    <>
      {/* Hero Section */}
      <section className="px-8 py-20 bg-[#0d0e11] relative items-center overflow-hidden max-h-[900px]" style={{ backgroundImage: 'url(/images/banner-0.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="flex flex-col gap-6 items-center text-white mx-auto w-full max-w-5xl relative z-10">
          <h1 className="text-5xl font-semibold tracking-tighter text-center drop-shadow-lg">
            Songo & Zuza
          </h1>
          <p className="text-xl text-center font-medium drop-shadow">
            Profesjonalna obsługa imprez
          </p>
          <p className="text-lg text-center mb-2 drop-shadow">
            Jeśli szukasz dobrej zabawy i muzyki na najwyższym poziomie to dobrze trafiłeś :)
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <NavigationButton
              href="/movies"
              text="Posłuchaj nas!"
              type="primary"
            />
            <NavigationButton
              href="/contact"
              text="Zapytaj o termin i cenę!"
              type="outline-dark"
            />
            <NavigationButton
              href="https://facebook.com/songoandzuza"
              text="Nasz fanpage!"
              type="primary"
            />
          </div>
          <small className="text-xs px-2 text-center">
            Skontaktuj się z nami, aby dowiedzieć się więcej o naszej ofercie i dostępności terminów.
          </small>
          <div className="mt-20">
            <img src="/images/gallery/14.jpg" className="mx-auto w-full max-w-[1000px] rounded-md shadow-2xl" alt="Zespół Songo & Zuza" />
          </div>
        </div>
      </section>

      {/* O nas + członkowie zespołu */}
      <section className="py-20 bg-[#f6f7fa]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Poznaj zespół</h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            Jesteśmy zespołem wokalno-instrumentalnym złożonym z profesjonalnych muzyków grających 100% muzyki na żywo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {persons.map((person) => (
              <div key={person.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <div className="h-40 rounded-xl overflow-hidden mb-4 border-4 border-[#cff245] shadow">
                  <img src={person.photoUrlFull} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{person.instruments}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego warto nas wybrać */}
      <section className="px-8 py-20 bg-[#f6f7fa] rounded-3xl">
        <div className="flex flex-col gap-16 items-center mx-auto w-full max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-10">Dlaczego warto wybrać nas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <div className="flex flex-col items-center bg-white rounded-3xl px-10 py-12 shadow-xl border-t-4 border-[#cff245] transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 bg-[#cff245] rounded-full p-4 shadow">
                <i className="bi bi-speaker text-4xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Własny sprzęt</h3>
              <p className="text-base text-gray-600 text-center">
                Dysponujemy profesjonalnym nagłośnieniem i oświetleniem na małe oraz duże sale, jak i imprezy plenerowe.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-3xl px-10 py-12 shadow-xl border-t-4 border-blue-300 transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 bg-blue-100 rounded-full p-4 shadow">
                <i className="bi bi-music-note-list text-4xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Szeroki repertuar</h3>
              <p className="text-base text-gray-600 text-center">
                Wykonujemy utwory polskie i zagraniczne w bardzo szerokim zakresie: biesiada, disco, rock, blues, pop, dance, jazz.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-3xl px-10 py-12 shadow-xl border-t-4 border-pink-300 transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 bg-pink-100 rounded-full p-4 shadow">
                <i className="bi bi-mortarboard text-4xl text-pink-500"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Wykształcenie muzyczne</h3>
              <p className="text-base text-gray-600 text-center">
                Wszyscy jesteśmy wykształceni muzycznie, bez problemu przygotujemy utwory na daną uroczystość, nawet jeśli jeszcze nie ma ich w naszym repertuarze.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-3xl px-10 py-12 shadow-xl border-t-4 border-green-300 transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 bg-green-100 rounded-full p-4 shadow">
                <i className="bi bi-truck text-4xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Własny transport</h3>
              <p className="text-base text-gray-600 text-center">
                Dysponujemy własnym transportem, zawsze dotrzemy na czas. Odległość nie jest dla nas problemem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usługi */}
      <section className="px-8 py-20">
        <div className="flex flex-col gap-16 items-center mx-auto w-full max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Nasze Usługi
          </h2>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <div className="flex w-full max-w-[160px] flex-col gap-2 p-8 rounded-xl border border-gray-200 items-center bg-white box-content shadow">
              <i className="bi bi-music-note-beamed text-4xl"></i>
              <span className="text-center font-bold">
                Wesela<br />
                Bankiety
              </span>
            </div>
            <div className="flex w-full max-w-[160px] flex-col gap-2 p-8 rounded-xl border border-gray-200 items-center bg-white box-content shadow">
              <i className="bi bi-calendar-event text-4xl"></i>
              <span className="text-center font-bold">
                Imprezy<br />
                Firmowe
              </span>
            </div>
            <div className="flex w-full max-w-[160px] flex-col gap-2 p-8 rounded-xl border border-gray-700 items-center bg-[#cff245] box-content shadow">
              <i className="bi bi-heart-fill text-4xl"></i>
              <span className="text-center font-bold">
                Ślub<br />
                Kościół
              </span>
            </div>
            <div className="flex w-full max-w-[160px] flex-col gap-2 p-8 rounded-xl border border-gray-200 items-center bg-white box-content shadow">
              <i className="bi bi-vinyl text-4xl"></i>
              <span className="text-center font-bold">
                Koncerty<br />
                Live
              </span>
            </div>
            <div className="flex w-full max-w-[160px] flex-col gap-2 p-8 rounded-xl border border-gray-200 items-center bg-white box-content shadow">
              <i className="bi bi-truck text-4xl"></i>
              <span className="text-center font-bold">
                Dojedziemy<br />
                Wszędzie
              </span>
            </div>
            <div className="flex w-full max-w-[160px] flex-col gap-2 p-8 rounded-xl border border-gray-200 items-center bg-white box-content shadow">
              <i className="bi bi-stars text-4xl"></i>
              <span className="text-center font-bold">
                Robimy<br />
                Show
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt i social media */}
      <section className="py-20 bg-[#f6f7fa]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Kontakt i social media</h2>
          <p className="text-lg text-gray-700 mb-8">Serdecznie zapraszamy do śledzenia nas na naszym fanpage! Wiele pozytywnych opinii, zapraszamy do zapoznania się!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <NavigationButton href="https://facebook.com/songoandzuza" text="Facebook" type="primary" />
            <NavigationButton href="/contact" text="Kontakt" type="primary" />
          </div>
        </div>
      </section>
    </>
  );
}
