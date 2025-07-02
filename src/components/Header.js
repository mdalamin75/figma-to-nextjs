"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Monitor, Smartphone, Clapperboard, Lightbulb, SquarePen  } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home', icon: Home },
        { href: '/websites', label: 'Website', icon: Monitor },
        { href: '/mobile-apps', label: 'Aplicații mobile', icon: Smartphone },
        { href: '/video', label: 'Promo video', icon: Clapperboard },
        { href: '/ai', label: 'Soluții AI', icon: Lightbulb },
        { href: '/maintenance', label: 'Mentenanță', icon: SquarePen  },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo and tagline */}
                    <div className="flex items-center space-x-3">
                        <Link href="/">
                            <Image src="/img/logo.png" alt="Logo" width={200} height={100} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center justify-center space-x-8 text-base font-medium">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center text-gray-900 text-sm font-semibold hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-600 gap-2">
                                <link.icon size={15} />
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side: CTA */}
                    <div className="flex items-center space-x-3">
                        <a href="https://api.whatsapp.com/send?phone=40743368360" className="hidden md:inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-base gap-2">
                            Contactează-ne
                            <Image src="/img/whatsapp.png" alt="whatsapp" width={20} height={10} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden ml-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Open mobile menu"
                    >
                        <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-4 py-4 space-y-3 flex flex-col">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md">
                                <link.icon size={22} />
                                {link.label}
                            </Link>
                        ))}
                        <a href="https://api.whatsapp.com/send?phone=40743368360" className="hidden md:inline-flex items-center bg-gradient-to-r from-blue-700 to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-base gap-2">
                            Contactează-ne
                            <Image src="/img/whatsapp.png" alt="whatsapp" width={20} height={10} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
} 