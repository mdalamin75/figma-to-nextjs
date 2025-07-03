"use client"
import React, { useState } from 'react';

export default function FaqSection({ faq, openFaq: controlledOpenFaq, toggleFaq: controlledToggleFaq }) {
    const [internalOpenFaq, setInternalOpenFaq] = useState(null);
    const isControlled = controlledOpenFaq !== undefined && controlledToggleFaq !== undefined;
    const openFaq = isControlled ? controlledOpenFaq : internalOpenFaq;
    const toggleFaq = isControlled ? controlledToggleFaq : (i) => setInternalOpenFaq(openFaq === i ? null : i);
    if (!faq || !Array.isArray(faq)) return null;
    return (
        <section className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                        Întrebări frecvente
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Tot ce trebuie să știi despre platforma noastră de creare conținut AI
                    </p>
                </div>
                <div className="space-y-4">
                    {faq.map((item, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 rounded-xl transition-all duration-300">
                            <button
                                className="w-full flex justify-between items-center text-left p-6 cursor-pointer group"
                                type="button"
                                onClick={() => toggleFaq(i)}>
                                <span className="text-lg font-semibold text-gray-800">
                                    {item.question}
                                </span>
                                <span
                                    className={`ml-4 text-blue-500 group-hover:text-blue-700 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 overflow-hidden ${openFaq === i
                                    ? "px-6 pb-6 max-h-96 opacity-100"
                                    : "p-0 max-h-0 opacity-0"
                                    }`}>
                                <p className="text-gray-600">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 