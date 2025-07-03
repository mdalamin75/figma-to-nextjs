import React, { useState, useEffect } from 'react';
import { Settings, Wand2, Sparkles } from 'lucide-react';

const AnimatedFlowchart = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            id: 1,
            title: "Datele esentiale sunt extrase inteligent",
            icon: Settings,
            color: "bg-purple-700",
            position: "right"
        },
        {
            id: 2,
            title: "AI-ul analizează și generează soluții",
            icon: Wand2,
            color: "bg-purple-500",
            position: "left"
        },
        {
            id: 3,
            title: "Rezultatele sunt livrate și implementate",
            icon: Sparkles,
            color: "bg-pink-400",
            position: "right"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev < steps.length - 1) {
                    return prev + 1;
                } else {
                    // Reset to start continuous animation
                    setTimeout(() => setCurrentStep(0), 1000);
                    return prev;
                }
            });
        }, 2500);

        return () => clearInterval(timer);
    }, []);

    const DottedArrow = ({ show, delay = 0 }) => (
        <div className="flex items-center justify-center my-8">
            <div className="relative">
                {/* Vertical dotted line */}
                <div className={`w-0.5 bg-gray-400 transition-all duration-1000 ${show ? 'h-12' : 'h-0'
                    }`} style={{ transitionDelay: `${delay}ms` }}></div>

                {/* Horizontal dotted line with arrow */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${show ? 'w-32' : 'w-0'
                    }`} style={{ transitionDelay: `${delay + 500}ms` }}>
                    <div className="relative">
                        <div className="h-0.5 bg-gray-400 border-dashed border-t-2 border-gray-400 bg-transparent"></div>
                        <div className={`absolute -right-2 -top-1 w-0 h-0 transition-all duration-500 ${show ? 'border-l-4 border-l-gray-400 border-t-2 border-b-2 border-t-transparent border-b-transparent opacity-100' : 'opacity-0'
                            }`} style={{ transitionDelay: `${delay + 1000}ms` }}></div>
                    </div>
                </div>

                {/* Second vertical dotted line */}
                <div className={`absolute top-full left-1/2 transform translate-x-16 -translate-x-1/2 w-0.5 bg-gray-400 transition-all duration-1000 ${show ? 'h-12' : 'h-0'
                    }`} style={{ transitionDelay: `${delay + 1500}ms` }}></div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-start justify-center min-h-screen  p-8 overflow-hidden">
            <div className="relative w-full max-w-4xl">

                {/* Step 1 - Right */}
                <div className={`flex justify-end mb-4 transition-all duration-1000 ${currentStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className={`${steps[0].color} rounded-2xl px-5 py-4 shadow-lg w-96`}>
                        <div className="flex items-center space-x-4">
                            <div className="bg-white bg-opacity-20 p-3 rounded-xl flex-shrink-0">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="text-base font-semibold text-white">
                                {steps[0].title}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Arrow 1 */}
                <DottedArrow show={currentStep >= 1} delay={0} />

                {/* Step 2 - Left */}
                <div className={`flex justify-start mb-4 transition-all duration-1000 ${currentStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className={`${steps[1].color} rounded-2xl px-5 py-4 shadow-lg w-96`}>
                        <div className="flex items-center space-x-4">
                            <div className="bg-white bg-opacity-20 p-3 rounded-xl flex-shrink-0">
                                <Wand2 className="w-6 h-6 " />
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {steps[1].title}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Arrow 2 */}
                <DottedArrow show={currentStep >= 2} delay={0} />

                {/* Step 3 - Right */}
                <div className={`flex justify-end transition-all duration-1000 ${currentStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className={`${steps[2].color} rounded-2xl px-5 py-4 shadow-lg w-96`}>
                        <div className="flex items-center space-x-4">
                            <div className="bg-white bg-opacity-20 p-3 rounded-xl flex-shrink-0">
                                <Sparkles className="w-6 h-6 " />
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {steps[2].title}
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AnimatedFlowchart;