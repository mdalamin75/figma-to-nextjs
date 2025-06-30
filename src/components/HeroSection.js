import React from 'react';
import { Star } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="bg-white pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col items-start">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                            Transformăm<br />
                            idei în conținut<br />
                            care <span className="text-blue-600">captivează</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-7 max-w-xl">
                            Site-uri, aplicații, branding, automatizări și conținut creativ – toate într-un <span className="text-blue-600 font-semibold">singur loc</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-7">
                            <a href="#" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors text-base gap-2">
                                Contactează-ne
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <a href="#" className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-base gap-2">
                                Contează pe experiența noastră!
                            </a>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <span className="text-gray-800 font-semibold text-base">100+ afaceri</span>
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <span className="text-gray-500 text-sm">Perfect pentru</span>
                            <div className="flex items-center gap-1">
                                <svg className="w-6 h-6" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#4285F4" /></svg>
                                <svg className="w-6 h-6" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#3b5998" /></svg>
                                <svg className="w-6 h-6" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#000" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center min-h-[340px]">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/60 to-blue-300/20 blur-2xl" />
                        <div className="relative grid grid-cols-2 gap-4 z-10">
                            <div className="w-32 h-24 bg-white rounded-xl shadow flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
                            </div>
                            <div className="w-20 h-16 bg-white rounded-xl shadow flex items-center justify-center mt-8">
                                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
                            </div>
                            <div className="w-20 h-16 bg-white rounded-xl shadow flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
                            </div>
                            <div className="w-32 h-24 bg-white rounded-xl shadow flex items-center justify-center mt-8">
                                <svg className="w-8 h-8 text-blue-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 