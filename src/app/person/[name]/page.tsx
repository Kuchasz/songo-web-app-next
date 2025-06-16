import { getAllPersons } from '../../../repositories/personRepository';
import Link from 'next/link';
import NavigationButton from '../../../components/NavigationButtons';

export default async function PersonDetailPage({ params }: { params: { name: string } }) {
    const persons = await getAllPersons();
    const person = persons.find(p => p.name.toLowerCase() === params.name);

    if (!person) {
        return (
            <section className="px-8 py-20 bg-[#f6f7fa] min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Nie znaleziono osoby</h1>
                        <NavigationButton 
                            href="/person"
                            text="Powrót do listy osób"
                            type="primary"
                        />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="px-8 py-20 bg-[#f6f7fa] min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold tracking-tighter text-gray-900 mb-4">
                        {person.name}
                    </h1>
                    <p className="text-xl text-gray-800 font-medium">
                        {person.instruments}
                    </p>
                </div>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                    <div className="aspect-[16/9] relative mb-8 rounded-xl overflow-hidden">
                        <img
                            src={person.photoUrlFull}
                            alt={person.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed">{person.description}</p>
                    </div>
                </div>
                <div className="mt-12 flex justify-center gap-4">
                    <NavigationButton 
                        href="/person"
                        text="Powrót do listy osób"
                        type="primary"
                    />
                    <NavigationButton 
                        href="/"
                        text="Powrót do strony głównej"
                        type="secondary"
                    />
                </div>
            </div>
        </section>
    );
} 