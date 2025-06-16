import { getAllPersons } from '../../repositories/personRepository';
import pl from '../../resources/pl';
import Link from 'next/link';
import NavigationButton from '../../components/NavigationButtons';

export default async function PersonPage() {
  const persons = await getAllPersons();

  return (
    <section className="px-8 py-20 bg-[#f6f7fa] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tighter text-gray-900 mb-4">
            {pl["person.index.header.title"]}
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            {pl["person.index.header.description"]}
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <p className="text-gray-700 mb-8 text-center">{pl["person.index.text"]}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {persons.map((person: any, idx: number) => (
              <Link
                href={`/person/${person.name.toLowerCase()}`}
                key={person.id || idx}
                className="group"
              >
                <div className="rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white border border-gray-100 overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={person.photoUrl}
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h2>
                    <p className="text-gray-600 text-sm">{person.instruments}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <NavigationButton 
          href="/"
          text="Powrót do strony głównej"
          type="home"
          className="mt-12"
        />
      </div>
    </section>
  );
}
