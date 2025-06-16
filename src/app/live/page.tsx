import { getAllLives } from '../../repositories/liveRepository';
import pl from '../../resources/pl';
import Link from 'next/link';

export default function LivePage() {
  const liveTracks = getAllLives();

  return (
    <section className="px-8 py-20 bg-[#f6f7fa] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tighter text-gray-900 mb-4">
            {pl["live.index.header.title"]}
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            {pl["live.index.header.description"]}
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 gap-8">
            {liveTracks.map((track: any, idx: number) => (
              <div key={track.id || idx} className="rounded-xl shadow p-6 bg-white border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">{track.title}</h2>
                {track.audioUrl && (
                  <div className="relative pb-[56.25%] h-0 mb-4">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${track.audioUrl.split('v=')[1]}`}
                      title={track.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                {track.description && <p className="text-gray-700">{track.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/" className="bg-[#cff245] text-black px-6 py-3 rounded-xl hover:bg-[#b8d93d] transition-colors font-semibold">
            Powrót do strony głównej
          </Link>
        </div>
      </div>
    </section>
  );
}
