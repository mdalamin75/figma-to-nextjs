"use client"
import React from 'react';
import { Header, HeroSection, FeaturesSection, SolutionsSection, FaqSection, Footer } from '../../components';
import CtaBanner from '../../components/CtaBanner';
import { ShieldCheck, Zap, Server } from 'lucide-react';

export default function MaintenancePage() {
    const heroData = {
        title: (
            <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">Stabilitate, securitate</span><br />
                și actualizări permanente
            </>
        ),
        subtitle: "Asigurăm funcționarea optimă a proiectului tău digital prin servicii de mentenanță proactivă, suport tehnic rapid și actualizări de securitate.",
        cta: { text: "Alege un pachet de mentenanță", href: "#" },
        rating: "Peste 99.9% uptime pentru clienții noștri",
        image: { src: "/img/website.png", alt: "Website Maintenance" }
    };

    const featuresData = {
        title: (
            <>
                Stabilitate digitală <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">fără întreruperi</span>
            </>
        ),
        subtitle: "Serviciile noastre de mentenanță îți oferă liniștea de care ai nevoie pentru a te concentra pe afacerea ta.",
        features: [
            {
                icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
                title: 'Securitate Avansată',
                description: 'Monitorizăm constant și aplicăm patch-uri de securitate pentru a proteja website-ul sau aplicația de amenințări.',
            },
            {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: 'Optimizare Performanță',
                description: 'Asigurăm timpi de încărcare rapizi și o experiență fluidă pentru utilizatori prin optimizări periodice.',
            },
            {
                icon: <Server className="w-8 h-8 text-blue-500" />,
                title: 'Backup și Restaurare',
                description: 'Realizăm backup-uri regulate ale datelor și fișierelor pentru a putea restaura rapid serviciul în caz de nevoie.',
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
        unique: [],
        monthly: [
            {
                name: 'Basic',
                price: '100€/lună',
                features: ['Monitorizare 24/7', 'Backup săptămânal', 'Actualizări de securitate', 'Suport prin email'],
                recommended: false,
            },
            {
                name: 'Business',
                price: '200€/lună',
                features: ['Totul de la Basic', 'Backup zilnic', 'Optimizare viteză lunară', 'Suport prioritar'],
                recommended: true,
            },
            {
                name: 'Premium',
                price: '350€/lună',
                features: ['Totul de la Business', 'Suport telefonic', 'Raport de performanță lunar', 'Ore de dezvoltare incluse'],
                recommended: false,
            },
        ],
    };

    const faqData = {
        title: "Întrebări frecvente",
        subtitle: "Răspunsuri la cele mai comune întrebări despre serviciile de mentenanță.",
        faqs: [
            { question: "De ce am nevoie de mentenanță?", answer: "Mentenanța asigură că platforma ta digitală rămâne securizată, rapidă și funcțională. Previne problemele înainte ca acestea să apară și afecteze utilizatorii sau afacerea." },
            { question: "Ce se întâmplă dacă am o problemă urgentă?", answer: "Pachetele noastre Business și Premium includ suport prioritar pentru a rezolva orice problemă urgentă în cel mai scurt timp posibil." },
            { question: "Pot solicita modificări la website?", answer: "Da, pachetul Premium include un număr de ore de dezvoltare pe care le poți folosi pentru modificări minore sau adăugiri de conținut." },
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