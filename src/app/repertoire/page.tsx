import { getAllAlbums, Album, Song } from '../../repositories/albumRepository';
import pl from '../../resources/pl';
import Link from 'next/link';

function formatDuration(seconds: string): string {
  const totalSeconds = parseInt(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export default async function RepertoirePage() {
  const albums = await getAllAlbums();

  return (
    <section className="px-8 py-20 bg-[#f6f7fa] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tighter text-gray-900 mb-4">
            {pl["repertoire.index.header.title"]}
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            {pl["repertoire.index.header.description"]}
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{pl["repertoire.index.list"]}</h2>
            <Link href="/repertoire/list" className="bg-[#cff245] text-black px-6 py-3 rounded-xl hover:bg-[#b8d93d] transition-colors font-semibold">
              {pl["repertoire.index.download"]}
            </Link>
          </div>
          <div className="space-y-12">
            {albums.map((album: Album, idx: number) => (
              <div key={album.id || idx} className="rounded-xl shadow p-6 bg-white border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  {album.coverUrl && (
                    <div className="w-full md:w-1/3">
                      <img
                        src={`/images/covers/${album.coverUrl}`}
                        alt={album.title}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{album.title}</h3>
                    {album.description && (
                      <p className="text-gray-700 mb-6">{album.description}</p>
                    )}
                    {album.year && (
                      <p className="text-sm text-gray-500 mb-6">Rok wydania: {album.year}</p>
                    )}
                  </div>
                </div>
                {album.songs && album.songs.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Lista utworów</h4>
                    <div className="space-y-4">
                      {album.songs.map((song: Song, songIdx: number) => (
                        <div key={songIdx} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg bg-gray-50">
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{song.title}</h5>
                            <p className="text-sm text-gray-600">{song.author}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">{formatDuration(song.duration)}</span>
                            <audio controls className="w-64">
                              <source src={`/songs/${song.url}`} type="audio/mpeg" />
                              Twoja przeglądarka nie wspiera odtwarzacza audio.
                            </audio>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
