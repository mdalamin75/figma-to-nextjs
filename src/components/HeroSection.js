import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection({ title, subtitle, cta, rating, image }) {
    return (
        <section className="bg-white pt-20 pb-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-start">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                            {title}
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl">
                            {subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a href={cta.href} className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-lg gap-3">
                                {cta.text}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-current" />
                                ))}
                            </div>
                            <span className="text-gray-600 font-medium text-base">{rating}</span>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-cyan-100/50 to-white rounded-full blur-3xl" />
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 ease-out">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 