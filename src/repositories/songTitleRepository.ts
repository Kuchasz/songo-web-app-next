import songsData from '../files/songs.json';

export interface SongTitle {
  id: string;
  title: string;
}

export function getAllSongTitles(): SongTitle[] {
  return songsData.map((title: string, index: number) => ({
    id: `song-${index}`,
    title: title
  }));
}
