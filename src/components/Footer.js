import React from 'react';
import { Twitter, CheckSquare, Shield, CreditCard } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <div className="flex items-center space-x-3 mb-4">
                            <Image src="/img/logo.png" alt="Logo" width={200} height={100} className="rounded-full" />
                        </div>
                            <p className="space-y-2 text-sm text-gray-600">Byte este agenția ta digitală completă, specializată în dezvoltarea de website-uri, aplicații mobile, soluții AI și producție video, pentru a transforma ideile tale în proiecte de succes.</p>
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-semibold text-gray-800 mb-4">Companie</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Termeni și Condiții</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Politica de Confidențialitate</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Politica de Cookie-uri</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-8 flex justify-between items-center">
                    <div className="text-sm text-gray-500 flex items-center">
                        <span>© 2025 @Byte. Toate drepturile rezervate.</span>
                        <a href="#" className="ml-4 text-gray-400 hover:text-gray-600 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                            <CheckSquare className="w-4 h-4 text-green-500" />
                            <span>De încredere</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Shield className="w-4 h-4 text-blue-500" />
                            <span>Securizat</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CreditCard className="w-4 h-4 text-gray-400" />
                            <span>Plăți sigure</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 