import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SolutionsSection({ plans: allPlans }) {
    const [isMonthly, setIsMonthly] = useState(false);

    const plans = allPlans || { unique: [], monthly: [] };

    const currentPlans = isMonthly ? plans.monthly : plans.unique;

    if (!currentPlans || currentPlans.length === 0) {
        // or return a placeholder
        return null;
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        De ce să alegi <span className="text-blue-600">@Byte</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Echipa noastră de experți este dedicată să transforme viziunea ta în realitate, oferind soluții personalizate și suport de excepție.
                    </p>
                    <a href="#" className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-lg">
                        Descoperă Metodologia Noastră
                        <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                    </a>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Soluții</h2>
                    <div className="flex items-center justify-center mt-6 space-x-4">
                        <span className={`font-medium ${!isMonthly ? 'text-blue-600' : 'text-gray-500'}`}>Plată unică</span>
                        <label htmlFor="billing-toggle" className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" id="billing-toggle" className="sr-only peer" checked={isMonthly} onChange={() => setIsMonthly(!isMonthly)} />
                            <div className="w-14 h-8 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300 ease-in-out peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
                        </label>
                        <span className={`font-medium ${isMonthly ? 'text-blue-600' : 'text-gray-500'}`}>Abonament lunar</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentPlans.map((plan, index) => (
                        <div key={index} className={`rounded-2xl p-8 transition-all duration-300 ease-in-out ${plan.recommended ? 'border-2 border-blue-500 shadow-2xl transform scale-105' : 'bg-gray-50 shadow-lg'}`}>
                            {plan.recommended && (
                                <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full -mt-2 mb-4">Recomandat</span>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="text-4xl font-extrabold text-gray-900 my-4">{plan.price}</p>
                            <p className="text-gray-600 mb-6">{plan.description}</p>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm ${plan.recommended ? 'text-white bg-blue-600 hover:bg-blue-700' : 'text-blue-600 bg-white hover:bg-blue-50'}`}>
                                Alege pachetul
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 