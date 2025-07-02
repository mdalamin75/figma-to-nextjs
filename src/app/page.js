"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Header, Footer } from "../components";
import {
  Smartphone,
  Globe,
  Video,
  Zap,
  Star,
  CheckCircle,
  Bot,
  Eye,
  Clock4,
  CircleCheckBig,
  ArrowRight,
  PanelTop,
  Clapperboard,
  Lightbulb,
  SquarePen,
} from "lucide-react";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
import MobileAppServiceDetails from "@/components/MobileAppServiceDetails";
import MobileMockupSlider from "@/components/MobileMockupSlider";
import WebMockupSlider from "@/components/WebMockupSlider";
import ServicesSection from "@/components/ServicesSection";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DigitalSolutionsSection from "@/components/DigitalSolutionsSection";
import HomeFaqSection from "@/components/HomeFaqSection";
import HomeFeaturesSection from "@/components/HomeFeaturesSection";
import HomeHeroSection from "@/components/HomeHeroSection";

const features = [
  {
    icon: <Zap className="w-7 h-7 text-blue-500" />,
    title: "Lansează rapid",
    desc: "Website-uri și aplicații dezvoltate în timp record",
  },
  {
    icon: <Bot className="w-7 h-7 text-blue-500" />,
    title: "Automatizăm procesele tale",
    desc: "De la conținut la funcționalitate – AI-ul lucrează pentru tine",
  },
  {
    icon: <Eye className="w-7 h-7 text-purple-500" />,
    title: "Conținut video care atrage",
    desc: "Clipuri promo moderne, create special pentru brandul tău",
  },
  {
    icon: <Clock4 className="w-7 h-7 text-pink-500" />,
    title: "Mai puțină muncă repetitivă",
    desc: "Automatizăm taskurile ca tu să te focusezi pe business",
  },
];

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
    href: "/video",
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
    title: "Grijă constantă pentru performanță",
    desc: "Stabilitate, securitate, viteză.",
    icon2: <CircleCheckBig className="w-4 h-4 text-[#C300FF]" />,
    text: "Monitorizare Constantă",
    text2: "Actualizări de Securitate",
    text3: "Optimizare Performanță ",
    image: "/img/video.png",
    href: "/video",
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

const faq = [
  {
    q: "1. Ce servicii oferă agenția voastră?",
    a: "Creăm site-uri web, aplicații mobile, video promo și oferim soluții AI și mentenanță.",
  },
  {
    q: "2. Pot beneficia de soluții AI integrate?",
    a: "Da, toate proiectele includ opțiuni AI pentru eficientizare și automatizare.",
  },
  {
    q: "3. Cum începe procesul de colaborare?",
    a: "Ne contactați, discutăm nevoile tale și începem proiectul personalizat.",
  },
  {
    q: "4. Cât durează realizarea unui site sau aplicație?",
    a: "Durata variază în funcție de complexitate, dar livrăm rapid și eficient.",
  },
  {
    q: "5. Oferiți suport și mentenanță după lansare?",
    a: "Da, avem pachete de mentenanță pentru performanță și actualizări constante.",
  },
  {
    q: "6. Pot personaliza designul și funcționalitățile?",
    a: "Desigur, totul este adaptat la nevoile și brandul tău.",
  },
  {
    q: "7. Care sunt costurile pentru aceste servicii?",
    a: "Prețurile sunt flexibile, în funcție de proiect și cerințe.",
  },
  {
    q: "8. Cum mă ajută AI în proiectele mele?",
    a: "AI optimizează procesele, automatizează sarcinile și îmbunătățește experiența utilizatorilor.",
  },
  {
    q: "9. Sunt proiectele voastre compatibile cu dispozitive mobile?",
    a: "Da, toate website-urile și aplicațiile sunt responsive și mobile-friendly.",
  },
  {
    q: "10. Ce garanții oferiți privind securitatea?",
    a: "Respectăm standarde înalte de securitate pentru toate proiectele noastre.",
  },
  {
    q: "11. Cum pot solicita un proiect sau o ofertă?",
    a: "Completează formularul de contact sau scrie-ne direct, iar noi revenim rapid.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <HomeHeroSection />
      <HomeFeaturesSection features={features} />
      <ServicesSection />
      <DigitalSolutionsSection />
      <HomeFaqSection faq={faq} openFaq={openFaq} toggleFaq={toggleFaq} />
      <CtaBanner />
      <Footer />
    </div>
  );
}
