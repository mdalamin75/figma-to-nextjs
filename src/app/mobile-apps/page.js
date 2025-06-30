"use client"
import React from 'react';
import { Header, HeroSection, FeaturesSection, SolutionsSection, FaqSection, Footer } from '../../components';
import CtaBanner from '../../components/CtaBanner';
import { Smartphone, ShieldCheck, CloudCog } from 'lucide-react';

export default function MobileAppsPage() {
    const heroData = {
        title: (
            <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Aplicații intuitive,</span><br />
                impact garantat
            </>
        ),
        subtitle: "Dezvoltăm aplicații mobile pentru iOS și Android care oferă experiențe memorabile și funcționalități de top, conectând brandul tău cu utilizatorii.",
        cta: { text: "Cere o ofertă pentru aplicația ta", href: "#" },
        rating: "Peste 50 de aplicații lansate cu succes",
        image: { src: "/img/restaurentApp.png", alt: "Mobile App preview" }
    };

    const featuresData = {
        title: (
            <>
                Aplicații Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Personalizate</span>
            </>
        ),
        subtitle: "Soluții complete, de la idee la lansare în App Store și Google Play.",
        features: [
            {
                icon: <Smartphone className="w-8 h-8 text-blue-500" />,
                title: 'Dezvoltare Multi-Platformă',
                description: 'Creăm aplicații pentru iOS și Android, folosind tehnologii moderne pentru performanță maximă.',
            },
            {
                icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
                title: 'Performanță și Securitate',
                description: 'Optimizăm aplicațiile pentru viteză și implementăm cele mai bune practici de securitate a datelor.',
            },
            {
                icon: <CloudCog className="w-8 h-8 text-purple-500" />,
                title: 'Integrare și Scalabilitate',
                description: 'Asigurăm integrarea cu servicii externe și o arhitectură care permite dezvoltarea ulterioară a aplicației.',
            },
        ]
    };

    const solutionsData = {
        unique: [
            {
                name: 'Start',
                price: '7.500€',
                features: ['Aplicație iOS sau Android', 'Design UI/UX', '3-5 ecrane', 'Publicare în App Store'],
                recommended: false,
            },
            {
                name: 'Business',
                price: '15.000€',
                features: ['Aplicație iOS și Android', 'Backend și API', 'Sistem de notificări', 'Integrare plăți'],
                recommended: true,
            },
            {
                name: 'Custom',
                price: '25.000€+',
                features: ['Funcționalități complexe', 'Integrare hardware (Bluetooth, etc.)', 'Panou de administrare web', 'Suport prioritar'],
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
        subtitle: "Răspunsuri la cele mai comune întrebări despre dezvoltarea de aplicații mobile.",
        faqs: [
            { question: "Ce tehnologii folosiți?", answer: "Folosim tehnologii moderne precum React Native, Swift (iOS) și Kotlin (Android) pentru a oferi aplicații performante și scalabile." },
            { question: "Publicați aplicația în App Store/Google Play?", answer: "Da, ne ocupăm de întregul proces, de la pregătirea materialelor necesare până la publicarea efectivă în magazinele de aplicații." },
            { question: "Oferiți suport post-lansare?", answer: "Da, oferim pachete de mentenanță care includ suport tehnic, actualizări de securitate și update-uri pentru noile versiuni de iOS și Android." },
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