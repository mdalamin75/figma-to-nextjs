"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqItem = ({ faq, index, toggleFAQ, open }) => {
    return (
        <div className="bg-gray-50 rounded-xl transition-all duration-300">
            <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6"
            >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {open ? <Minus className="w-6 h-6 text-blue-500" /> : <Plus className="w-6 h-6 text-gray-400" />}
            </button>
            <div className={`overflow-hidden transition-max-height duration-700 ease-in-out ${open ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="px-6 pb-6">
                    <p className="text-gray-600">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function FaqSection({ title, subtitle, faqs }) {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    if (!faqs || faqs.length === 0) {
        return null;
    }

    return (
        <section className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        {subtitle}
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
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