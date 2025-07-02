import React from "react";

export default function FeaturesSection({ title, subtitle, features, bottom_text, cta }) {
    return (
        <section className="py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-5">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-blue-200/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
                {bottom_text && (
                    <div className="text-center py-10">
                        <p className="text-base text-gray-500 mb-10">{bottom_text}</p>
                        {cta && (
                            <a
                                href={cta.href}
                                className="inline-flex items-center bg-gradient-to-r from-blue-700 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-lg gap-3 max-w-52">
                                {cta.text}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}