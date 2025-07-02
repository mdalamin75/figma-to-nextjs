import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { LayoutGrid } from "lucide-react";

const slides = [
    {
        img: "/img/mobile1.png",
        label: "Restaurant",
        subtitle: "Comandă rapidă, experiență digitală.",
    },
    {
        img: "/img/mobile2.png",
        label: "Clinică",
        subtitle: "Programări ușoare, contact direct.",
    },
    {
        img: "/img/mobile3.png",
        label: "Magazin Online",
        subtitle: "Vânzări online, non-stop.",
    },
    {
        img: "/img/mobile4.png",
        label: "Socializare",
        subtitle: "Comunicare fără limite.",
    },
    {
        img: "/img/mobile5.png",
        label: "Dating",
        subtitle: "Conectează, descoperă, iubește.",
    },
    {
        img: "/img/mobile6.png",
        label: "Oferte Zilnice",
        subtitle: "Oferte noi, zilnic.",
    },
    {
        img: "/img/mobile7.png",
        label: "Rezervări Restaurante",
        subtitle: "Mese rezervate instant.",
    },
    {
        img: "/img/mobile8.png",
        label: "Fitness & Wellness",
        subtitle: "Progres la îndemână.",
    },
];

export default function MobileMockupSlider() {
    return (
        <div className="bg-[#f6f8fc] rounded-2xl p-6 flex items-center justify-center shadow-md">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2000, // 2 seconds
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={1000}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                }}
                style={{ width: '100%', maxWidth: 520 }}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="flex flex-col items-center">
                            <div className="rounded-2xl overflow-hidden shadow bg-white" style={{ width: 170, height: 320 }}>
                                <Image
                                    src={slide.img}
                                    alt={slide.label}
                                    width={170}
                                    height={320}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col items-center mt-3">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-blue-100 rounded-full text-blue-700 font-bold text-xs mb-1 shadow-sm">
                                    <LayoutGrid className="w-4 h-4 text-blue-600" />
                                    {slide.label}
                                </span>
                                <span className="text-gray-500 text-sm text-center font-normal" style={{ lineHeight: '1.3', minHeight: '2.2em' }}>{slide.subtitle}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}