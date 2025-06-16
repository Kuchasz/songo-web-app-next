import newsyData from '../files/newsy.json';

export interface News {
  id: string;
  title: string;
  date?: string;
  content: string;
  imageUrl?: string;
  link?: string;
}

export async function getAllNews(): Promise<News[]> {
  const news = newsyData?.newsy?.news || [];
  return news.map((item: any, index: number) => ({
    id: `news-${index}`,
    title: item.tytul?._text || `News ${index + 1}`,
    date: item.data?._text || undefined,
    content: item.tresc?._text || '',
    imageUrl: item.zdjecie?._text || undefined,
    link: item.linki?.link?._text || undefined
  }));
}
