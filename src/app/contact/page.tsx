import pl from '../../resources/pl';

export default function ContactPage() {
  return (
    <section className="px-8 py-20 bg-[#f6f7fa] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tighter text-gray-900 mb-4">
            {pl["contact.index.header.title"]}
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            {pl["contact.index.header.description"]}
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#cff245] rounded-xl mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{pl["contact.index.phones"]}</h3>
              <p className="text-gray-600">
                <a href="tel:+48600632798" className="hover:text-[#cff245] transition-colors">600 632 798 - Piotrek</a>
              </p>
              <p className="text-gray-600">
                <a href="tel:+48604671973" className="hover:text-[#cff245] transition-colors">604 671 973 - Wojtek</a>
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#cff245] rounded-xl mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{pl["contact.index.emails"]}</h3>
              <p className="text-gray-600">
                <a href="mailto:kontakt@songoandzuza.pl" className="hover:text-[#cff245] transition-colors">kontakt@songoandzuza.pl</a>
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#cff245] rounded-xl mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{pl["contact.index.address"]}</h3>
              <p className="text-gray-600">Sułkowice, ul. Beskidzka 169</p>
              <p className="text-gray-600">34-120 Andrychów</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
