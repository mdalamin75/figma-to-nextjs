import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { AtSign } from "lucide-react";
import "swiper/css";
import Image from "next/image";

const slides = [
    {
        img: "/img/web1.png",
        title: "Website",
        label: "Zboruri Private",
        subtitle: "Călătorește cu viteza și confortul pe care le meriți. Fără escale, fără așteptări, doar libertate și eficiență la fiecare zbor.",
    },
    {
        img: "/img/web2.png",
        title: "Gestionare proiecte",
        subtitle: "Organizează, urmărește și livrează proiecte la timp. Vezi flux & stocaje date pentru echipe productive.",
    },
    {
        img: "/img/web3.png",
        title: "Asistent AI",
        subtitle: "Un coechipier digital care învață, propune și anticipează nevoi. Lasă AI-ul să-ți optimizeze ziua de lucru.",
    },
    {
        img: "/img/web4.png",
        title: "Website SaaS",
        subtitle: "Landing page-uri curate, rapide și eficiente pentru SaaS-ul tău. Totul ușor pentru conversii și clienți noi.",
    },
    {
        img: "/img/web5.png",
        title: "Documente electronice",
        subtitle: "Elimină haosul digital. Creează, semnează și împărtășește documente cu ușurință.",
    },
    {
        img: "/img/web6.png",
        title: "Case de vacanță",
        subtitle: "Găsește case de vacanță perfecte, oriunde și oricând. Oferim oaspeți mulțumire cu stil și sig.",
    },
    {
        img: "/img/web7.png",
        title: "Mentor",
        subtitle: "Formează lideri de viitor prin network real și ghidaje strategice. Extindeți conexiunile și abilitățile voastre.",
    },
];

export default function WebMockupSlider() {
    return (
        <div className="p-6 flex items-center justify-center">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000, // 2 seconds
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={2000}
                style={{ width: '100%', maxWidth: 600 }}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start max-w-xl mx-auto">
                            <div className="font-bold text-xl text-gray-900 mb-2">{slide.title}</div>
                            <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 rounded-full text-sky-700 font-semibold text-sm mb-4">
                                <AtSign className="w-4 h-4 text-blue-400" />
                                {slide.label}
                            </div>
                            <div className="w-full flex justify-center mb-6">
                                <div className="overflow-hidden" style={{ width: 400, height: 220 }}>
                                    <Image
                                        src={slide.img}
                                        alt={slide.title}
                                        width={400}
                                        height={220}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="text-gray-400 text-lg font-medium leading-snug text-left">
                                {slide.subtitle}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
} 