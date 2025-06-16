
import { getAllNews } from '../../repositories/newsRepository';
import pl from '../../resources/pl';

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">{pl["news.index.header.title"]}</h1>
      <p className="mb-6 text-gray-700">{pl["news.index.header.description"]}</p>
      <ul className="space-y-6">
        {news.map((item: any, idx: number) => (
          <li key={item.id || idx} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            {item.date && <p className="text-gray-600 text-sm mb-2">{item.date}</p>}
            <div className="prose" dangerouslySetInnerHTML={{ __html: item.content }} />
          </li>
        ))}
      </ul>
    </main>
  );
}
