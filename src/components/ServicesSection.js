import React from "react";
import Link from "next/link";
import MobileAppServiceDetails from "@/components/MobileAppServiceDetails";
import MobileMockupSlider from "@/components/MobileMockupSlider";
import WebMockupSlider from "@/components/WebMockupSlider";
import {
    Smartphone,
    PanelTop,
    Video,
    SquarePen,
    Lightbulb,
    CircleCheckBig,
    ArrowRight,
} from "lucide-react";
import VideoGrid from "./VideoGrid";
import WebsiteScanningAnimation from "./WebsiteScanningAnimation";
import AnimatedFlowchart from "./AnimatedFlowchart";

const services = [
    {
        icon: <Smartphone className="w-6 h-6 text-blue-500" />,
        title: "Aplicații Mobile Personalizate",
        desc: "Aplicații mobile. Precise. Eficiente.",
        icon2: <CircleCheckBig className="w-4 h-4 text-blue-500" />,
        text: "Personalizat pentru afacerea ta",
        text2: "Publicare garantată în:",
        text3: "Proces optimizat, cap-coadă",
        image: "/img/apps.png",
        href: "/mobile-apps",
        tags: ["iOS", "Android", "Cross-platform"],
        icon3: <ArrowRight className="w-4 h-4 text-blue-500" />,
        cta: "Solicită o aplicație",
        colorScheme: {
            bg: "bg-blue-600/10",
            text: "text-blue-700",
            hoverBg: "hover:bg-blue-700",
            hoverText: "hover:text-white",
        },
    },
    {
        icon: <PanelTop className="w-6 h-6 text-sky-400" />,
        title: "Construim website-ul tău",
        desc: "Site-ul tău, optimizat pentru succes.",
        icon2: <CircleCheckBig className="w-4 h-4 text-sky-400" />,
        text: "Design modern și responsive",
        text2: "Performanță optimizată",
        text3: "Administrare ușoară",
        image: "/img/websites.png",
        href: "/websites",
        tags: ["Prezentare", "E-commerce", "Custom"],
        icon3: <ArrowRight className="w-4 h-4 text-sky-400" />,
        cta: "Solicită un website",
        colorScheme: {
            bg: "bg-sky-600/10",
            text: "text-sky-500",
            hoverBg: "hover:bg-sky-700",
            hoverText: "hover:text-white",
        },
    },
    {
        icon: <Video className="w-6 h-6 text-purple-500" />,
        title: "Video promo de impact",
        desc: "Captează atenția. Rămâi memorabil.",
        icon2: <CircleCheckBig className="w-4 h-4 text-purple-500" />,
        text: "Captivant de la primele secunde",
        text2: "Perfect pentru social media",
        text3: "Script, voice-over, editare",
        image: "/img/video.png",
        href: "/video",
        tags: ["Promo", "Animații", "Social"],
        icon3: <ArrowRight className="w-4 h-4 text-purple-500" />,
        cta: "Solicită video",
        colorScheme: {
            bg: "bg-purple-600/10",
            text: "text-purple-700",
            hoverBg: "hover:bg-purple-700",
            hoverText: "hover:text-white",
        },
    },
    {
        icon: <SquarePen className="w-6 h-6 text-green-500" />,
        title: "Grijă constantă pentru performanță",
        desc: "Stabilitate, securitate, viteză.",
        icon2: <CircleCheckBig className="w-4 h-4 text-green-700" />,
        text: "Monitorizare Constantă",
        text2: "Actualizări de Securitate",
        text3: "Optimizare Performanță ",
        image: "/img/service4.png",
        href: "/maintenance",
        tags: ["Promo", "Animații", "Social"],
        icon3: <ArrowRight className="w-4 h-4 text-green-700" />,
        cta: "Solicită mentenanță",
        colorScheme: {
            bg: "bg-green-600/10",
            text: "text-green-700",
            hoverBg: "hover:bg-green-700",
            hoverText: "hover:text-white",
        },
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-[#C300FF]" />,
        title: "Câștigă timp cu AI",
        desc: "Lasă AI-ul să lucreze pentru tine.",
        icon2: <CircleCheckBig className="w-4 h-4 text-[#C300FF]" />,
        text: "Automatizare Inteligentă",
        text2: "Decizii Bazate pe Date",
        text3: "Integrare Simplă",
        image: "/img/aiBanner.png",
        href: "/ai",
        tags: ["Promo", "Animații", "Social"],
        icon3: <ArrowRight className="w-4 h-4 text-[#C300FF]" />,
        cta: "Solicită mentenanță",
        colorScheme: {
            bg: "bg-[#C300FF]/10",
            text: "text-[#C300FF]",
            hoverBg: "hover:bg-[#C300FF]",
            hoverText: "hover:text-white",
        },
    },
];

export default function ServicesSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Soluția ta completă pentru conținut digital
                    </h2>
                    <p className="text-base text-gray-500 mt-3">
                        Creează conținut <span className="text-blue-600">captivant</span> și <span className="text-blue-600">profesional</span> în mai multe
                        formate cu ajutorul uneltelor noastre <span className="text-blue-600">AI</span>.
                    </p>
                </div>
                {services.map((s, i) => (
                    <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <div className="flex items-center mb-4 gap-3">
                                <div className={`p-2 rounded-full ${s.colorScheme.bg}`}>{s.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                            </div>
                            <p className="text-gray-500 text-base mb-4">{s.desc}</p>
                            {i === 0 ? (
                                <MobileAppServiceDetails />
                            ) : (
                                <>
                                    <div className="flex items-center gap-2 mb-3">{s.icon2}<p className="text-gray-500 text-base">{s.text}</p></div>
                                    <div className="flex items-center gap-2 mb-3">{s.icon2}<p className="text-gray-500 text-base">{s.text2}</p></div>
                                    <div className="flex items-center gap-2 mb-3">{s.icon2}<p className="text-gray-500 text-base">{s.text3}</p></div>
                                </>
                            )}
                            <Link
                                href={s.href}
                                className={`flex items-center gap-2 max-w-56 px-6 py-2 text-center mt-10 rounded-full font-medium shadow transition-colors ${s.colorScheme.bg} ${s.colorScheme.text} ${s.colorScheme.hoverBg} ${s.colorScheme.hoverText}`}>
                                {s.cta} {s.icon3}
                            </Link>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            {i === 0 ? (
                                <MobileMockupSlider />
                            ) : i === 1 ? (
                                <WebMockupSlider />
                            ) : i === 2 ? (
                                <VideoGrid />
                            ) : i === 3 ? (
                                <WebsiteScanningAnimation />
                            ) : i === 4 ? (
                                <AnimatedFlowchart />
                            ) : (
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="w-100 h-80 object-contain rounded-2xl"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 