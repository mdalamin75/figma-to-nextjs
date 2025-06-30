import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Shield, CreditCard, CheckSquare } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-50 via-white to-white border-t border-gray-100 pt-10 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-12 gap-8 pb-6">
                    <div className="md:col-span-4 flex flex-col gap-2">
                        <span className="font-bold text-xl text-blue-600">@Byte</span>
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
                        <span>© 2025 gByte. Toate drepturile rezervate.</span>
                        <a href="#" className="hover:text-blue-600"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-blue-600"><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.94 6.73c-.14-.07-.28-.13-.43-.18-.15-.05-.3-.09-.46-.12-.16-.03-.32-.05-.49-.05-.17 0-.33.02-.49.05-.16.03-.31.07-.46.12-.15.05-.29.11-.43.18-.14.07-.27.15-.39.24-.12.09-.23.19-.33.3-.1.11-.19.23-.27.36-.08.13-.15.27-.2.41-.05.14-.09.29-.12.44-.03.15-.05.31-.05.47 0 .16.02.32.05.47.03.15.07.3.12.44.05.14.12.28.2.41.08.13.17.25.27.36.1.11.21.21.33.3.12.09.25.17.39.24.14.07.28.13.43.18.15.05.3.09.46.12.16.03.32.05.49.05.17 0 .33-.02.49-.05.16-.03.31-.07.46-.12.15-.05.29-.11.43-.18.14-.07.27-.15.39-.24.12-.09.23-.19.33-.3.1-.11.19-.23.27-.36.08-.13.15-.27.2-.41.05-.14.09-.29.12-.44.03-.15.05-.31.05-.47 0-.16-.02-.32-.05-.47-.03-.15-.07-.3-.12-.44-.05-.14-.12-.28-.2-.41-.08-.13-.17-.25-.27-.36-.1-.11-.21-.21-.33-.3-.12-.09-.25-.17-.39-.24z" /></svg></a>
                    </div>
                    <div className="flex items-center gap-6 text-xs text-gray-500 mt-2 sm:mt-0">
                        <div className="flex items-center gap-1"><CheckSquare className="w-4 h-4 text-blue-500" /><span>De încredere</span></div>
                        <div className="flex items-center gap-1"><Shield className="w-4 h-4 text-blue-500" /><span>Securizat</span></div>
                        <div className="flex items-center gap-1"><CreditCard className="w-4 h-4 text-blue-500" /><span>Plăți sigure</span></div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 