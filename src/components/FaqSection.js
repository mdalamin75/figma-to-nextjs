"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "Ce servicii oferă agenția voastră?",
        answer: "Creăm site-uri web, aplicații mobile, video promo și oferim soluții AI și mentenanță."
    },
    {
        question: "Pot beneficia de soluții AI integrate?",
        answer: "Da, toate proiectele includ opțiuni AI pentru eficientizare și automatizare."
    },
    {
        question: "Cum începe procesul de colaborare?",
        answer: "Ne contactezi, discutăm nevoile tale și începem proiectul personalizat."
    },
    {
        question: "Cât durează realizarea unui site sau aplicație?",
        answer: "Durata variază în funcție de complexitate, dar livrăm rapid și eficient."
    },
    {
        question: "Oferiți suport și mentenanță după lansare?",
        answer: "Da, avem pachete de mentenanță pentru performanță și actualizări constante."
    },
    {
        question: "Pot personaliza designul și funcționalitățile?",
        answer: "Desigur, totul este adaptat la nevoile și brandul tău."
    },
    {
        question: "Care sunt costurile pentru aceste servicii?",
        answer: "Prețurile sunt flexibile, în funcție de proiect și cerințe."
    },
    {
        question: "Cum mă ajută AI în proiectele mele?",
        answer: "AI optimizează procesele, automatizează sarcinile și îmbunătățește experiența utilizatorilor."
    },
    {
        question: "Sunt proiectele voastre compatibile cu dispozitive mobile?",
        answer: "Da, toate website-urile și aplicațiile sunt responsive și mobile-friendly."
    },
    {
        question: "Ce garanții oferiți privind securitatea?",
        answer: "Respectăm standarde înalte de securitate pentru toate proiectele noastre."
    },
    {
        question: "Cum pot solicita un proiect sau o ofertă?",
        answer: "Completează formularul de contact sau scrie-ne direct, iar noi revenim rapid."
    }
];

const FaqItem = ({ faq, index, toggleFAQ, open }) => {
    return (
        <div className="border-b border-gray-200 py-4" onClick={() => toggleFAQ(index)}>
            <button className="w-full flex justify-between items-center text-left text-gray-800">
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}>
                <p className="pt-2 text-gray-600">
                    {faq.answer}
                </p>
            </div>
        </div>
    );
};

export default function FaqSection() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="bg-white py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Întrebări frecvente
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Tot ce trebuie să știi despre platforma noastră de creare conținut AI
                    </p>
                </div>
                <div className="space-y-2">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            index={index}
                            toggleFAQ={toggleFAQ}
                            open={openFAQ === index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 