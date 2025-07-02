import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function HeroSection({ title, subtitle, cta, cta_2, rating, image, image_bottom_text, rightContent }) {
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
                            <a
                                href={cta.href}
                                target="_blank"
                                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-lg gap-3 max-w-48">
                                {cta.text}
                                <Image
                                    src="/img/whatsapp.png"
                                    alt="whatsapp"
                                    width={20}
                                    height={10}
                                />
                            </a>
                            <a
                                href={cta_2.href}
                                className="inline-flex items-center border bg-blue-400/10 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors text-base gap-2">
                                {cta_2.text}
                            </a>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <Image
                                src="/img/people.png"
                                alt="people"
                                width={15}
                                height={10}
                            />
                            <span className="text-gray-400 font-normal text-base">{rating}</span>

                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="relative flex justify-center items-center min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-cyan-100/50 to-white rounded-full blur-3xl" />
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 ease-out">
                            {rightContent ? (
                                rightContent
                            ) : (
                                image && (
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={600}
                                        height={400}
                                        className="rounded-2xl mx-auto max-w-[50%] max-h-[400px]"
                                    />
                                )
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