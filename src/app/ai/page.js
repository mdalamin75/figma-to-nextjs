"use client"
import React from 'react';
import { Header, HeroSection, FeaturesSection, SolutionsSection, FaqSection, Footer } from '../../components';
import CtaBanner from '../../components/CtaBanner';
import { BrainCircuit, Bot, Zap } from 'lucide-react';

export default function AiPage() {
    const heroData = {
        title: (
            <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Inteligență Artificială</span><br />
                care accelerează afaceri
            </>
        ),
        subtitle: "Implementăm soluții AI personalizate pentru a automatiza procese, a optimiza operațiuni și a oferi insight-uri valoroase din datele companiei tale.",
        cta: { text: "Descoperă potențialul AI", href: "#" },
        rating: "Soluții implementate pentru zeci de companii",
        image: { src: "/img/website.png", alt: "AI Solutions" }
    };

    const featuresData = {
        title: (
            <>
                Inteligență Artificială pentru <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Afaceri Performante</span>
            </>
        ),
        subtitle: "Transformăm datele în decizii inteligente și procesele manuale în operațiuni automate.",
        features: [
            {
                icon: <Bot className="w-8 h-8 text-purple-500" />,
                title: 'Chatboți Inteligenți',
                description: 'Dezvoltăm chatboți pentru suport clienți, lead generation sau automatizări interne, disponibili 24/7.',
            },
            {
                icon: <BrainCircuit className="w-8 h-8 text-pink-500" />,
                title: 'Analiză Predictivă',
                description: 'Folosim modele de machine learning pentru a analiza datele istorice și a prezice trenduri viitoare.',
            },
            {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: 'Automatizarea Proceselor',
                description: 'Identificăm și automatizăm sarcini repetitive (RPA) pentru a crește eficiența și a reduce erorile umane.',
            },
        ],
        bottom_text: (
            <>
                Creăm aplicații mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">optimizate</span>  pentru <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">viteză, UX și rezultate concrete.</span> Aplicația ta devine un instrument puternic de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">marketing și fidelizare.</span>
            </>
        ),
        cta: { text: "Contactează-ne", href: "#" },
    };

    const solutionsData = {
        unique: [
            {
                name: 'Chatbot',
                price: '5.000€+',
                features: ['Integrare website/Facebook', 'Flux de conversație custom', 'Colectare date', 'Panou de administrare'],
                recommended: true,
            },
            {
                name: 'Analiză Date',
                price: '15.000€+',
                features: ['Colectare și curățare date', 'Dezvoltare model predictiv', 'Dashboard de vizualizare', 'Raport de analiză'],
                recommended: false,
            },
            {
                name: 'Automatizare',
                price: '10.000€+',
                features: ['Analiză procese', 'Dezvoltare robot RPA', 'Implementare și testare', 'Mentenanță și suport'],
                recommended: false,
            },
        ],
        monthly: [],
    };

    const faqData = {
        title: "Întrebări frecvente",
        subtitle: "Răspunsuri la cele mai comune întrebări despre soluțiile AI.",
        faqs: [
            { question: "Ce date sunt necesare pentru un proiect AI?", answer: "Tipul de date necesar depinde de proiect. Poate include date de vânzări, interacțiuni cu clienții, date de producție etc. Vom analiza împreună ce este relevant pentru obiectivul tău." },
            { question: "Cât de sigur este procesul?", answer: "Securitatea și confidențialitatea datelor sunt prioritatea noastră. Respectăm normele GDPR și folosim cele mai bune practici pentru a proteja informațiile companiei tale." },
            { question: "Ce rezultate pot aștepta?", answer: "Rezultatele pot include reducerea costurilor operaționale, creșterea vânzărilor, îmbunătățirea satisfacției clienților sau luarea unor decizii de business mai informate." },
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