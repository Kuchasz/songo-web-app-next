import muzykaData from '../files/muzyka.json';

export interface Song {
  title: string;
  author: string;
  url: string;
  duration: string;
}

export interface Album {
  id: string;
  title: string;
  coverUrl?: string;
  year?: string;
  description?: string;
  songs?: Song[];
}

export async function getAllAlbums(): Promise<Album[]> {
  const albums = muzykaData?.plyty?.plyta || [];
  return albums.map((plyta: any, index: number) => ({
    id: `album-${index}`,
    title: plyta.tytul?._text || `Album ${index + 1}`,
    coverUrl: plyta.okladka?._text || undefined,
    description: plyta.opis?._text || undefined,
    year: plyta.rok?._text || undefined,
    songs: plyta.utwory?.utwor?.map((utwor: any) => ({
      title: utwor.tytul?._text || '',
      author: utwor.autor?._text || '',
      url: utwor.link?._text || '',
      duration: utwor.dlugosc?._text || ''
    })) || []
  }));
}
