import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Shield, CreditCard, CheckSquare, ShieldCheck, Lock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-50 via-white to-white border-t border-gray-100 pt-10 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-12 gap-8 pb-6">
                    <div className="md:col-span-4 flex flex-col gap-2">
                        <Image src="/img/mainLogo.png" alt="Logo" width={80} height={50} />
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Companie</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Legal</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Termeni și Condiții</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Politica de Confidențialitate</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Politica de Cookie-uri</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 pt-4 gap-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>© 2025 @Byte. Toate drepturile rezervate.</span>
                        <a href="#" className="hover:text-blue-600"><Twitter className="w-4 h-4 fill-gray-500" /></a>
                        <a href="#" className="hover:text-blue-600">
                        <Image src="/img/tiktokGray.png" alt="tiktok" width={15} height={8} />
                        </a>
                    </div>
                    <div className="flex items-center gap-6 text-xs text-gray-500 mt-2 sm:mt-0">
                        <div className="flex items-center gap-1"><ShieldCheck  className="w-4 h-4 text-purple-700" /><span>De încredere</span></div>
                        <div className="flex items-center gap-1"><Lock  className="w-4 h-4 text-purple-700" /><span>Securizat</span></div>
                        <div className="flex items-center gap-1"><CreditCard className="w-4 h-4 text-purple-700" /><span>Plăți sigure</span></div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 