import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Clock4, Check, Headphones, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolutionsSection({ plans: allPlans }) {
    const [isMonthly, setIsMonthly] = useState(false);

    const plans = allPlans || { unique: [], monthly: [] };

    const currentPlans = isMonthly ? plans.monthly : plans.unique;

    if (!currentPlans || currentPlans.length === 0) {
        // or return a placeholder
        return null;
    }

    return (
        <section className="pt-10 pb-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        De ce să alegi <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-900 to-95%">@Byte</span>
                    </h2>
                    <p className="mt-4 text-base text-black max-w-3xl mx-auto">
                        La Byte, combinăm strategie, design și tehnologie pentru a livra soluții digitale care generează rezultate reale. De la site-uri optimizate și aplicații mobile până la automatizări AI și conținut video – facem totul in-house, rapid și eficient.
                    </p>
                    {/* <a href="#" className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-lg">
                        Descoperă Metodologia Noastră
                        <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                    </a> */}
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-blue-500 sm:text-5xl">Soluții</h2>
                    <p className="text-lg text-black my-4">Serviciile potrivite, la costuri corecte</p>
                    <div className="flex flex-col md:flex-row gap-3 items-center justify-center mt-6 space-x-4">
                        <div className="flex gap-2 items-center bg-blue-200/10 px-5 py-2 shadow-sm rounded-full">
                            <Clock4 className='text-blue-600 w-5 h-5' />
                            <p className="text-base sm:text-sm font-medium text-black">Flexibilitate totală, fără obligații</p>
                        </div>
                        <div className="flex gap-2 items-center bg-blue-200/10 px-5 py-2 shadow-sm rounded-full">
                            <Check className='text-blue-600 w-5 h-5' />
                            <p className="text-base sm:text-sm font-medium text-black">Controlezi tu când și cum colaborezi</p>
                        </div>
                        <div className="flex gap-2 items-center bg-blue-200/10 px-5 py-2 shadow-sm rounded-full">
                            <Headphones className='text-blue-600 w-5 h-5' />
                            <p className="text-base sm:text-sm font-medium text-black">Asistență dedicată la fiecare pas</p>
                        </div>
                        <div className="flex gap-2 items-center bg-blue-200/10 px-5 py-2 shadow-sm rounded-full">
                            <Lock className='text-blue-600 w-5 h-5' />
                            <p className="text-base sm:text-sm font-medium text-black">Plăți sigure și transparente</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentPlans.map((plan, index) => (
                        <div key={index} className={`rounded-2xl p-8 transition-all duration-300 ease-in-out text-center bg-white border-2 border-blue-200 flex flex-col h-full ${plan.recommended ? 'border-2 border-blue-500 shadow-2xl transform scale-105' : 'bg-gray-50 shadow-lg'}`}>
                            <div className="flex-1 flex flex-col">
                                {plan.recommended && (
                                    <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full -mt-2 mb-4">Recomandat</span>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                                <p className="text-4xl font-extrabold text-gray-900 my-4">{plan.price}</p>
                                <p className="text-blue-800 text-xs font-semibold mt-6 mb-6">{plan.description}</p>
                                <Link href="#" className="flex items-center justify-center gap-2 max-w-56 px-6 py-2 text-center bg-blue-200/10 text-blue-400 rounded-full font-base text-sm  shadow hover:bg-blue-700 hover:text-white transition-colors mb-6">{plan.cta} <ArrowRight className="w-5 h-5" /></Link>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-left">
                                            <Check className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-900 text-sm font-normal">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a href="https://api.whatsapp.com/send?phone=40743368360" className="hidden md:inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-base gap-2 mt-auto">
                                Contactează-ne
                                <Image src="/img/whatsapp.png" alt="whatsapp" width={20} height={10} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 