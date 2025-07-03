import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { LayoutGrid } from "lucide-react";

const slides = [
    {
        img: "/img/mobile1.png",
        icon: "/img/mobileIcon.png",
        label: "Restaurant",
        subtitle: "Comandă rapidă, experiență digitală.",
    },
    {
        img: "/img/mobile2.png",
        icon: "/img/mobileIcon2.png",
        label: "Clinică",
        subtitle: "Programări ușoare, contact direct.",
    },
    {
        img: "/img/mobile3.png",
        icon: "/img/mobileIcon3.png",
        label: "Magazin Online",
        subtitle: "Vânzări online, non-stop.",
    },
    {
        img: "/img/mobile4.png",
        icon: "/img/mobileIcon4.png",
        label: "Socializare",
        subtitle: "Comunicare fără limite.",
    },
    {
        img: "/img/mobile5.png",
        icon: "/img/mobileIcon5.png",
        label: "Dating",
        subtitle: "Conectează, descoperă, iubește.",
    },
    {
        img: "/img/mobile6.png",
        icon: "/img/mobileIcon6.png",
        label: "Oferte Zilnice",
        subtitle: "Oferte noi, zilnic.",
    },
    {
        img: "/img/mobile7.png",
        icon: "/img/mobileIcon7.png",
        label: "Rezervări Restaurante",
        subtitle: "Mese rezervate instant.",
    },
    {
        img: "/img/mobile8.png",
        icon: "/img/mobileIcon8.png",
        label: "Fitness & Wellness",
        subtitle: "Progres la îndemână.",
    },
];

export default function MobileMockupSlider() {
    return (
        <div className="bg-[#f6f8fc] rounded-2xl p-3 sm:p-6 flex items-center justify-center shadow-md">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={1000}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 12
                    },
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 16
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    },
                }}
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="flex flex-col items-center">
                            {/* Responsive mobile mockup container */}
                            <div className="relative rounded-2xl overflow-hidden shadow bg-white w-full max-w-[140px] sm:max-w-[160px] md:max-w-[170px]">
                                <div className="aspect-[17/32]"> {/* Maintains 170:320 ratio */}
                                    <Image
                                        src={slide.img}
                                        alt={slide.label}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 170px"
                                    />
                                </div>
                            </div>

                            {/* Responsive text content */}
                            <div className="flex flex-col items-center mt-2 sm:mt-3 px-1">
                                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 bg-white border border-blue-100 rounded-full text-blue-700 font-bold text-xs mb-1 shadow-sm">
                                    <Image src={slide.icon} alt="icon" width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="text-xs sm:text-sm">{slide.label}</span>
                                </span>
                                <span className="text-gray-500 text-xs sm:text-sm text-center font-normal leading-tight min-h-[2.2em] max-w-[140px] sm:max-w-[160px] md:max-w-[170px]">
                                    {slide.subtitle}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}