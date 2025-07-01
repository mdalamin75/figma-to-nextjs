import Image from 'next/image';
import React from 'react';

export default function CtaBanner({
    headline = (<>
        De la idee la <span className="text-blue-600">succes</span>, împreună cu <span className="text-blue-600">Byte.</span>
    </>),
    subheadline = (
        <>
            Oferim soluții digitale complete: website-uri, aplicații mobile, video promo și AI personalizat.<br />
            Creștem afaceri cu tehnologie și creativitate.
        </>
    ),
    button = { label: 'Hai să vorbim!', href: '#' },
    small = 'Fără plăți ascunse • Livrare rapidă • Suport dedicat',
}) {
    return (
        <section className="relative py-16 px-4 flex flex-col items-center text-center overflow-hidden">
            {/* Blur effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[60%] bg-blue-100 blur-3xl opacity-70 rounded-full" />
                <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-blue-50 blur-2xl opacity-60 rounded-full" />
            </div>
            <div className="relative z-10 mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                    {headline}
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    {subheadline}
                </p>
                <a href={button.href} className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-xl font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition-all text-base">
                    <Image src="/img/boostIcon.png" alt="boostIcon" width={20} height={10} />
                    {button.label}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" /></svg>

                </a>
                <div className="mt-4 text-xs text-gray-500">{small}</div>
            </div>
        </section>
    );
} 