import React from "react";

export default function HomeFeaturesSection({ features }) {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="text-center p-6 rounded-xl">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            {f.icon}
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                            {f.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}