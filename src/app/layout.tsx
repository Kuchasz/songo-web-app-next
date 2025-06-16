
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FC } from "react";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Songo & Zuza - Zespół Muzyczny | Wesela i Imprezy",
  description: "Profesjonalny zespół muzyczny Songo & Zuza. Oprawa muzyczna wesel, bankietów i imprez. 100% muzyka na żywo. Własny sprzęt i transport.",
};


interface RootLayoutProps {
  children: React.ReactNode;
}


const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" type="image/x-icon" href="/favico.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body
        className={`inter antialiased bg-[#0d0e11] ${inter.variable}`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
