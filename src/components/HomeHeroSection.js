import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import {PanelTop, Smartphone, Clapperboard, Lightbulb} from "lucide-react";

export default function HomeHeroSection() {
    return (
        <section className="pt-16 pb-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-start">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-none mb-4">
                        Transformăm
                        <br />
                        idei în conținut
                        <br />
                        care <span className="text-blue-600">captivează</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-7 max-w-lg">
                        Site-uri, aplicații, branding, automatizări și conținut creativ –
                        toate într-un{" "}
                        <span className="text-blue-600 font-semibold">singur loc</span>.
                    </p>
                    <div className="flex flex-col gap-4 mb-7">
                        <a
                            href="https://api.whatsapp.com/send?phone=40743368360"
                            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors text-base gap-2 max-w-48">
                            Contactează-ne
                            <Image
                                src="/img/whatsapp.png"
                                alt="whatsapp"
                                width={20}
                                height={10}
                            />
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center border bg-blue-400/10 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors text-base gap-2">
                            Contează pe experiența noastră!
                        </a>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <Image
                            src="/img/people.png"
                            alt="people"
                            width={15}
                            height={10}
                        />
                        <span className="text-gray-400 font-normal text-base">
                            100+ afaceri
                        </span>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <div className="d-flex">
                            <span className="text-gray-400 text-sm">Perfect pentru</span>
                            <div className="flex items-center gap-1">
                                <Image src="/img/google.png" alt="google" width={23} height={23} />
                                <Image src="/img/facebook.png" alt="facebook" width={23} height={23} />
                                <Image src="/img/tiktok.png" alt="tiktok" width={23} height={23} />
                                <Image src="/img/instagram.png" alt="instagram" width={23} height={23} />
                                <Image src="/img/x.png" alt="x" width={23} height={23} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center items-center min-h-[340px]">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/60 to-blue-300/20 blur-2xl" />
                    <div>
                        <div className="bg-white/30 w-90 h-40 rounded-2xl shadow-lg pt-1 mb-7">
                            <div className="mt-5 ml-3 bg-blue-100 w-10 h-10 flex justify-center items-center rounded-full ">
                                <PanelTop className="text-blue-500" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-white w-40 h-55 rounded-2xl shadow-lg pt-1 mr-7">
                                <div className="mt-5 ml-3 bg-blue-100 w-10 h-10 flex justify-center items-center rounded-full shadow-2xl ">
                                    <Smartphone className="text-blue-500" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="bg-white/30 w-40 h-25 rounded-2xl shadow-lg pt-1 mb-4">
                                    <div className="mt-5 ml-3 bg-blue-100  w-10 h-10 flex justify-center items-center rounded-full ">
                                        <Clapperboard className="text-blue-500" />
                                    </div>
                                </div>
                                <div className="bg-white/30 w-40 h-25 rounded-2xl shadow-lg pt-1">
                                    <div className="mt-5 ml-3 bg-blue-100  w-10 h-10 flex justify-center items-center rounded-full ">
                                        <Lightbulb className="text-blue-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
