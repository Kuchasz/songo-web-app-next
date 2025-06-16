'use client';

import Link from 'next/link';
import pl from '../resources/pl';
import NavigationButton from "./NavigationButtons";

const Header = () => {
    const navigationItems = [
        { href: '/', label: pl["menu.home"] },
        // { href: '/news', label: pl["menu.news"] },
        { href: '/person', label: pl["menu.about"] },
        { href: '/offer', label: pl["menu.offer"] },
        { href: '/history', label: pl["menu.history"] },
        { href: '/gallery', label: pl["menu.gallery"] },
        { href: '/repertoire', label: pl["menu.repertoire"] },
        { href: '/live', label: pl["menu.live"] },
        { href: '/movies', label: pl["menu.movies"] },
        { href: '/contact', label: pl["menu.contact"] },
    ];

    return (
        <header className="bg-black/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-white font-bold text-xl">
                        Songo & Zuza
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <NavigationButton
                            href="/contact"
                            size='sm'
                            text={pl["menu.getAQuote"]}
                            type="primary"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => {
                            const menu = document.getElementById('mobile-menu');
                            menu?.classList.toggle('hidden');
                        }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div id="mobile-menu" className="hidden lg:hidden pb-4">
                    <nav className="flex flex-col space-y-2">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-300 hover:text-white transition-colors duration-200 py-2 px-2 rounded text-sm"
                                onClick={() => {
                                    const menu = document.getElementById('mobile-menu');
                                    menu?.classList.add('hidden');
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <NavigationButton
                            href="/contact"
                            text={pl["menu.getAQuote"]}
                            type="primary"
                            className="mt-4 text-center"
                        />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
