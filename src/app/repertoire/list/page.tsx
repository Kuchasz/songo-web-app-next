import { getAllSongTitles } from '../../../repositories/songTitleRepository';
import pl from '../../../resources/pl';
import Link from 'next/link';

export default async function RepertoireListPage() {
    const songs = await getAllSongTitles();

    return (
        <section className="px-8 py-20 bg-[#f6f7fa] min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold tracking-tighter text-gray-900 mb-4">
                        {pl["repertoire.list.header.title"]}
                    </h1>
                    <p className="text-xl text-gray-800 font-medium">
                        {pl["repertoire.list.header.description"]}
                    </p>
                </div>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {songs.map((song: any, idx: number) => (
                            <div key={song.id || idx} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <p className="text-gray-900 font-medium">{song.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <Link href="/repertoire" className="bg-[#cff245] text-black px-6 py-3 rounded-xl hover:bg-[#b8d93d] transition-colors font-semibold">
                        Powrót do albumów
                    </Link>
                </div>
            </div>
        </section>
    );
} 