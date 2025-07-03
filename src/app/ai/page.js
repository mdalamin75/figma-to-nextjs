"use client"
import React from 'react';
import { Header, HeroSection, FeaturesSection, SolutionsSection, FaqSection, Footer } from '../../components';
import CtaBanner from '../../components/CtaBanner';
import { BrainCircuit, Bot, Zap, Check } from 'lucide-react';

export default function AiPage() {
    const heroData = {
        title: (
            <>
                <span className="text-fuchsia-600">Inteligență <br /> Artificială </span>
                care <br /> accelerează afaceri
            </>
        ),
        subtitle: (
            <>
                <span className="text-fuchsia-600">Soluții AI </span> inteligente pentru <span className="text-fuchsia-600">automatizare, analiză <br /> avansată </span> și <span className="text-fuchsia-600">creștere rapidă</span> a afacerii tale.
            </>
        ),
        cta: { text: "Contactează-ne", href: "https://api.whatsapp.com/send?phone=40743368360" },
        cta_2: { text: "Contează pe experiența noastră!", href: "#" },
        rating: "100+ afaceri",
        image: { src: "/img/aiBanner.png", alt: "AI Solutions" }
    };

    const featuresData = {
        title: (
            <>
                <span className="text-fuchsia-600 text-3xl">Inteligență Artificială</span> <span className="text-3xl">pentru Afaceri Performante</span>
            </>
        ),
        subtitle: "Transformăm datele în decizii inteligente și procesele manuale în operațiuni automate.",
        features: [
            {
                icon: <Check className="w-8 h-8 text-blue-700" />,
                title: 'Automatizare Inteligentă',
                description: 'Reducem timpul și costurile cu procese AI eficiente și precise.',
            },
            {
                icon: <Check className="w-8 h-8 text-blue-700" />,
                title: 'Decizii Bazate pe Date',
                description: 'Analizăm informații în timp real pentru strategii mai bune. ',
            },
            {
                icon: <Check className="w-8 h-8 text-blue-700" />,
                title: 'Personalizare Avansată',
                description: 'Experiențe unice pentru fiecare utilizator, adaptate prin AI.  ',
            },
        ],
        bottom_text: (
            <>
                <span className="text-fuchsia-600">Automatizăm, optimizăm</span> și <span className="text-fuchsia-600">inovăm</span> procesele tale digitale cu <span className="text-fuchsia-600">soluții AI</span> integrate — de la website-uri și aplicații, până la conținut video și campanii de marketing.
            </>
        ),
        cta: { text: "Contactează-ne", href: "https://api.whatsapp.com/send?phone=40743368360" },
    };

    const solutionsData = {
        unique: [
            {
                name: 'AI Starter',
                price: '5.000€+',
                cta: 'Lansare rapidă',
                features: [
                    'Analiză și evaluare inițială',
                    'Soluții AI personalizate de bază',
                    'Optimizare automată simplificată',
                    'Interfață intuitivă pentru utilizator',
                    'Monitorizare și raportare continuă',
                    'Raportare standard de performanță',
                    'Suport tehnic de bază',
                    'Scalabilitate flexibilă',
                ],
                recommended: false,
            },
            {
                name: 'AI Business',
                price: '15.000€+',
                cta: 'Creștere stabilă',
                features: [
                    'Soluții AI avansate și personalizate',
                    'Optimizare automată în timp real',
                    'Integrare flexibilă cu sisteme existente',
                    'Dashboard personalizat pentru date și performanță',
                    'Automatizări inteligente',
                    'Monitorizare avansată a performanței',
                    'Suport prioritar dedicat',
                    'Optiuni extinse de personalizare',
                ],
                recommended: false,
            },
            {
                name: 'AI Enterprise',
                price: '50.000€+',
                cta: 'Vânzări eficiente',
                features: [
                    'Soluții AI dedicate companiilor mari',
                    'Automatizări și optimizări predictive',
                    'Integrare completă cu infrastructura IT',
                    'Analytics complexe cu raportare detaliată',
                    'Mentenanță și actualizări proactive',
                    'Suport dedicat 24/7',
                    'Securitate și conformitate avansată',
                    'Consultanță strategică continuă',
                ],
                recommended: false,
            },
            {
                name: (
                    <>
                        <span className="text-blue-500">AI Custom</span>
                    </>
                ),
                price: '100.000€+',
                cta: 'Fără limite',
                features: [
                    'Soluții AI tailor-made, fără limitări',
                    'Dezvoltare și implementare la scară largă',
                    'Integrare multiplatformă și multi-sistem',
                    'Management complet al datelor și automatizărilor',
                    'Suport tehnic și strategic personalizat non-stop',
                    'Scalare și optimizări personalizate continuu',
                    'Training și transfer de know-how',
                    'Raportare și analiză customizată',
                ],
                recommended: false,
            },
        ],
        monthly: [],
    };

    const faqData = {
        title: "Întrebări frecvente",
        subtitle: "Răspunsuri la cele mai comune întrebări despre soluțiile AI.",
        faqs: [
            {
                question: "Ce tipuri de soluții AI oferiți?",
                answer: "Furnizăm sisteme personalizate pentru generare de conținut, chatbot-uri, automatizare procese, analiză de date și recomandări inteligente."
            },
            {
                question: "Pot integra AI în site-ul sau aplicația mea?",
                answer: "Da, putem integra modele AI direct în website-uri, aplicații mobile sau platforme interne, în funcție de obiectivele tale."
            },
            {
                question: "Este nevoie de cunoștințe tehnice pentru a folosi soluțiile AI?",
                answer: "Nu. Toate soluțiile noastre sunt gândite să fie ușor de utilizat, chiar și de persoane fără background tehnic."
            },
            {
                question: "Cât costă o soluție AI personalizată?",
                answer: "Prețul variază în funcție de complexitate, integrare și domeniu de aplicare. Oferim pachete flexibile și consultanță gratuită."
            },
            {
                question: "Cât durează implementarea unei soluții AI?",
                answer: "În funcție de proiect, durata variază între 1 și 4 săptămâni. Pentru unele funcții standard, livrarea poate fi în doar câteva zile."
            },
            {
                question: "Ce beneficii aduce AI pentru afacerea mea?",
                answer: "Reduci timpul de lucru, automatizezi sarcini repetitive, personalizezi experiențele clienților și optimizezi procesele de business."
            },
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection
                {...heroData}
                imageClassName="rounded-2xl mx-auto max-w-[80%] max-h-[500px] md:max-w-[90%] md:max-h-[600px]"
            />
            <FeaturesSection {...featuresData} />
            <SolutionsSection plans={solutionsData} />
            <FaqSection faq={faqData.faqs} />
            <CtaBanner />
            <Footer />
        </div>
    );
} 