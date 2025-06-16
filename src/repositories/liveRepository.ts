import liveData from '../files/live.json';

export interface Live {
  id: string;
  title?: string;
  audioUrl?: string;
  description?: string;
}

export function getAllLives(): Live[] {
  return liveData.map((videoId: string, index: number) => ({
    id: `live-${index}`,
    audioUrl: `https://www.youtube.com/watch?v=${videoId}`,
  }));
}
