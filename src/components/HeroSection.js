import React from "react";
import Image from "next/image";

export default function HeroSection({ title, subtitle, cta, rating, image, image_bottom_text }) {
    return (
        <section className="bg-white pt-20 pb-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-start">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-none mb-4">
                            {title}
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl">{subtitle}</p>
                        <div className="flex flex-col gap-4 mb-8">
                            {cta && (
                                <a
                                    href={cta.href}
                                    className="inline-flex items-center bg-gradient-to-r from-blue-700 to-purple-600 text-white px-4 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-lg gap-3 max-w-48">
                                    {cta.text}
                                </a>
                            )}
                        </div>
                        {rating && (
                            <span className="text-gray-400 font-normal text-base mb-2">{rating}</span>
                        )}
                    </div>
                    <div className="relative flex justify-center items-center min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-cyan-100/50 to-white rounded-full blur-3xl" />
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 ease-out">
                            {image && (
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={600}
                                    height={400}
                                    className="rounded-2xl mx-auto max-w-[50%] max-h-[400px]"
                                />
                            )}
                            {image_bottom_text && (
                                <p className="text-sm text-gray-400 mt-4">{image_bottom_text}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}