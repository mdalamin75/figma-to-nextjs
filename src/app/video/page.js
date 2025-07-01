"use client"
import React from 'react';
import { Header, HeroSection, FeaturesSection, SolutionsSection, FaqSection, Footer } from '../../components';
import CtaBanner from '../../components/CtaBanner';
import { Video, Film, Share2, Check } from 'lucide-react';

export default function VideoPage() {
    const heroData = {
        title: (
            <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">Conținut video</span><br />
                care vinde și convinge
            </>
        ),
        subtitle: "De la clipuri de prezentare la animații complexe, producem conținut video care captivează audiența și transmite mesajul brandului tău cu impact.",
        cta: { text: "Contactează-ne", href: "#" },
        cta_2: { text: "Contează pe experiența noastră!", href: "#" },
        rating: "100+ afaceri",
        image: { src: "/img/video.png", alt: "Video Production" }
    };

    const featuresData = {
        title: (
            <>
                Video-uri Captivante care <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">Vând</span>
            </>
        ),
        subtitle: "Producem conținut video de înaltă calitate, optimizat pentru a genera rezultate pe platformele relevante pentru tine.",
        features: [
            {
                icon: <Check className="w-8 h-8 text-red-500" />,
                title: 'Video-uri de Prezentare',
                description: 'Creăm clipuri de prezentare pentru produse, servicii sau companii, care scot în evidență punctele forte.',
            },
            {
                icon: <Check className="w-8 h-8 text-blue-500" />,
                title: 'Animații și Motion Graphics',
                description: 'Realizăm animații 2D și 3D, explainer videos și elemente de motion graphics pentru un plus de dinamism.',
            },
            {
                icon: <Check className="w-8 h-8 text-green-500" />,
                title: 'Conținut pentru Social Media',
                description: 'Producem conținut video optimizat pentru platforme precum Instagram, TikTok, Facebook și YouTube.',
            },
        ],
        bottom_text: (
            <>
              Creăm platforme digitale axate pe <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">conversie, viteză</span> și <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">impact vizual.</span> Gândește-ți site-ul ca un <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">activ de marketing,</span>  nu doar o vitrină. 
            </>
          ),
          cta: { text: "Contactează-ne", href: "#" },
    };

    const solutionsData = {
        unique: [
            {
                name: 'Basic',
                price: '500€',
                features: ['Video de 15-30 secunde', 'Scenariu și concept', 'Editare video', 'Muzică de stoc'],
                recommended: false,
            },
            {
                name: 'Pro',
                price: '1.500€',
                features: ['Video de 1-2 minute', 'Filmare profesională (1 zi)', 'Animații 2D simple', 'Voce off profesionistă'],
                recommended: true,
            },
            {
                name: 'Premium',
                price: '5.000€+',
                features: ['Producție video complexă', 'Animații 3D', 'Echipă de producție completă', 'Distribuție pe canale media'],
                recommended: false,
            },
            {
                name: 'E-commerce',
                price: '10.000€+',
                description: 'Soluții personalizate pentru nevoi complexe.',
                features: [
                    'Platformă web custom',
                    'Integrări API externe',
                    'Funcționalități avansate',
                    'Consultanță strategică',
                    'Suport tehnic dedicat',
                ],
                recommended: false,
            },
        ],
        monthly: [],
    };

    const faqData = {
        title: "Întrebări frecvente",
        subtitle: "Răspunsuri la cele mai comune întrebări despre producția video.",
        faqs: [
            { question: "Cât durează producția unui video?", answer: "Durata variază în funcție de complexitate. Un video scurt pentru social media poate fi gata în câteva zile, în timp ce o producție complexă poate dura câteva săptămâni." },
            { question: "Pot folosi video-ul pe orice platformă?", answer: "Da, livrăm video-urile în formate optimizate pentru diverse platforme, de la website-ul tău, la social media sau campanii de publicitate." },
            { question: "Ce include procesul de producție?", answer: "Procesul nostru acoperă totul: de la strategie și scenariu, la filmare, editare, post-producție și livrarea finală." },
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection {...heroData} />
            <FeaturesSection {...featuresData} />
            <SolutionsSection plans={solutionsData} />
            <FaqSection {...faqData} />
            <CtaBanner />
            <Footer />
        </div>
    );
} 