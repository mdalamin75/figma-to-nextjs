import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const slides = [
    {
        img: "/img/web1.png",
        icon: "/img/webIcon.png",
        title: "Website",
        label: "Zboruri Private",
        subtitle: "Călătorește cu viteza și confortul pe care le meriți. Fără escale, fără așteptări, doar libertate și eficiență la fiecare zbor.",
    },
    {
        img: "/img/web2.png",
        icon: "/img/webIcon2.png",
        title: "Gestionare proiecte",
        subtitle: "Organizează, urmărește și livrează proiecte la timp. Vezi flux & stocaje date pentru echipe productive.",
    },
    {
        img: "/img/web3.png",
        icon: "/img/webIcon3.png",
        title: "Asistent AI",
        subtitle: "Un coechipier digital care învață, propune și anticipează nevoi. Lasă AI-ul să-ți optimizeze ziua de lucru.",
    },
    {
        img: "/img/web4.png",
        icon: "/img/webIcon4.png",
        title: "Website SaaS",
        subtitle: "Landing page-uri curate, rapide și eficiente pentru SaaS-ul tău. Totul ușor pentru conversii și clienți noi.",
    },
    {
        img: "/img/web5.png",
        icon: "/img/webIcon5.png",
        title: "Documente electronice",
        subtitle: "Elimină haosul digital. Creează, semnează și împărtășește documente cu ușurință.",
    },
    {
        img: "/img/web6.png",
        icon: "/img/webIcon6.png",
        title: "Case de vacanță",
        subtitle: "Găsește case de vacanță perfecte, oriunde și oricând. Oferim oaspeți mulțumire cu stil și sig.",
    },
    {
        img: "/img/web7.png",
        icon: "/img/webIcon7.png",
        title: "Mentor",
        subtitle: "Formează lideri de viitor prin network real și ghidaje strategice. Extindeți conexiunile și abilitățile voastre.",
    },
];

export default function WebMockupSlider() {
    return (
        <div className="p-3 sm:p-6 flex items-center justify-center">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={2000}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col items-start mx-auto">
                            {/* Title */}
                            <div className="font-bold text-lg sm:text-xl text-gray-900 mb-2">
                                {slide.title}
                            </div>

                            {/* Label (only show if exists) */}
                            {slide.label && (
                                <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 bg-blue-100 rounded-full text-sky-700 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                                    <Image src={slide.icon} alt="icon" width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" />
                                    {slide.label}
                                </div>
                            )}

                            {/* Responsive image container */}
                            <div className="w-full flex justify-center mb-4 sm:mb-6">
                                <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] overflow-hidden rounded-lg">
                                    <div className="aspect-[400/220]"> {/* Maintains 400:220 ratio */}
                                        <Image
                                            src={slide.img}
                                            alt={slide.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 400px"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subtitle */}
                            <div className="text-gray-400 text-sm sm:text-base md:text-lg font-medium leading-snug text-left">
                                {slide.subtitle}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}