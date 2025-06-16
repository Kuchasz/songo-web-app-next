import moviesData from '../files/movies.json';

export interface Movie {
  id: string;
  title?: string;
  videoUrl?: string;
  description?: string;
}

export function getAllMovies(): Movie[] {
  return moviesData.map((videoId: string, index: number) => ({
    id: `movie-${index}`,
    videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
  }));
}
