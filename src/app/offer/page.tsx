import pl from '../../resources/pl';
import Link from 'next/link';

export default function OfferPage() {
  return (
    <section className="px-8 py-20 bg-[#f6f7fa] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tighter text-gray-900 mb-4">
            {pl["offer.index.header.title"]}
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            {pl["offer.index.header.description"]}
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="space-y-12">
            {pl["offer.sections"].map((section, index) => (
              <div key={index} className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
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
