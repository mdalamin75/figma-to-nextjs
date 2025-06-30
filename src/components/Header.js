"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo and tagline */}
                    <div className="flex items-center space-x-3">
                        <Image src="/img/logo.png" alt="Logo" width={200} height={100} className="rounded-full" />
                        <div className="flex flex-col leading-tight">
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 text-base font-medium">
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Website</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Aplicații Mobile</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                            <span>Promo Video</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" /><polygon points="10,9 15,12 10,15" fill="currentColor" /></svg>
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Soluții AI</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Mentenanță</a>
                    </nav>

                    {/* Right side: CTA */}
                    <div className="flex items-center space-x-3">
                        <a href="#" className="hidden md:inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors text-base gap-2">
                            Contactează-ne
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                <div className="md:hidden bg-white border-t border-gray-100 shadow">
                    <div className="px-4 py-4 space-y-2 flex flex-col">
                        <a href="#" className="block px-3 py-2 text-gray-700 font-medium">Website</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 font-medium">Aplicații Mobile</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 font-medium flex items-center gap-1">
                            <span>Promo Video</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" /><polygon points="10,9 15,12 10,15" fill="currentColor" /></svg>
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 font-medium">Soluții AI</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 font-medium">Mentenanță</a>
                        <a href="#" className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2">
                            Contactează-ne
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
} 