"use client"
import React from 'react';
import { Header, HeroSection, FeaturesSection, SolutionsSection, FaqSection, Footer } from '../../components';
import CtaBanner from '../../components/CtaBanner';
import { Smartphone, ShieldCheck, CloudCog, Check } from 'lucide-react';
import MobileMockupSlider from '@/components/MobileMockupSlider';

export default function MobileAppsPage() {
    const heroData = {
        title: (
            <>
                Aplicații <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> intuitive,</span><br />
                impact 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> garantat</span>
            </>
        ),
        subtitle: "Dezvoltăm aplicații mobile pentru iOS și Android care oferă experiențe memorabile și funcționalități de top, conectând brandul tău cu utilizatorii.",
        cta: { text: "Contactează-ne", href: "https://api.whatsapp.com/send?phone=40743368360" },
        cta_2: { text: "Contează pe experiența noastră!", href: "#" },
        rating: "100+ afaceri",
        image: { src: "/img/mobileHero.png", alt: "Mobile App preview" },
        image_bottom_text: 'Călătorește cu viteza și confortul pe care le meriți. Fără escale, fără așteptări, doar libertate și eficiență la fiecare zbor.',
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
                icon: <Check className="w-8 h-8 text-blue-500" />,
                title: 'Performanță Ridicată',
                description: 'Viteză optimă, UX fluid și încărcare rapidă pe orice device.',
            },
            {
                icon: <Check className="w-8 h-8 text-blue-500" />,
                title: 'Securitate Avansată',
                description: 'Protecție completă a datelor și actualizări constante.',
            },
            {
                icon: <Check className="w-8 h-8 text-blue-500" />,
                title: 'Funcții Personalizate',
                description: 'Dezvoltate exact pe nevoile business-ului tău.',
            },
        ],
        bottom_text: (
            <>
                Creăm aplicații mobile <span className="text-sky-400">optimizate</span>  pentru <span className="text-sky-400">viteză, UX și rezultate concrete.</span> Aplicația ta devine un instrument puternic de <span className="text-sky-400">marketing și fidelizare.</span>
            </>
        ),
        cta: { text: "Contactează-ne", href: "https://api.whatsapp.com/send?phone=40743368360" },
    };

    const solutionsData = {
        unique: [
            {
                name: 'Start',
                price: '7.500€',
                description: 'Dezvoltat 100% pe nevoile tale reale',
                cta: 'Lansare rapidă',
                features : [
                    'Funcționalități esențiale și UI simplu',
                    'Compatibilitate iOS și Android',
                    'Design responsive și UX intuitiv',
                    'Testare pe dispozitive principale',
                    'Optimizare pentru viteză și performanță',
                    'Integrare de bază cu API-uri externe',
                    'Suport pentru notificări push',
                    'Documentație pentru utilizare'
                ],
                recommended: false,
            },
            {
                name: 'Business',
                price: '15.000€',
                description: 'Dezvoltat 100% pe nevoile tale reale',
                cta: 'Creștere stabilă',
                features: [
                    'Funcționalități avansate personalizate',
                    'Integrare API-uri multiple',
                    'Design personalizat și branding',
                    'Push notifications avansate',
                    'Management conținut prin backend',
                    'Optimizare UX pentru conversie',
                    'Testare extinsă pe multiple device-uri',
                    'Suport tehnic dedicat'
                ],
                recommended: false,
            },
            {
                name: 'Custom',
                price: '25.000€+',
                description: 'Dezvoltat 100% pe nevoile tale reale',
                cta: 'Vânzări eficiente',
                description: 'Dezvoltat 100% pe nevoile tale reale',
                cta: 'Vânzări eficiente',
                features : [
                    'Magazin online complet integrat',
                    'Plăți securizate & gestionare stocuri',
                    'Funcții avansate fidelizare clienți',
                    'Analize și rapoarte performanță',
                    'Sistem review & rating',
                    'Integrare cu platforme logistică',
                    'Notificări și promoții customizate',
                    'Backend complet pentru administrare produse'
                ],
                recommended: false,
            },
            {
                name: 'E-commerce',
                price: '10.000€+',
                description: 'Dezvoltat 100% pe nevoile tale reale',
                cta: 'Fără limite',
                description: 'Soluții personalizate pentru nevoi complexe.',
                features : [
                    'Soluții personalizate la nivel enterprise',
                    'Integrare AI și automatizări inteligente',
                    'Funcții complexe la cerere',
                    'Scalabilitate și mentenanță dedicată',
                    'Suport premium și actualizări continue',
                    'Integrare sisteme externe diverse',
                    'Analitice avansate și dashboard custom',
                    'Testare automată și optimizare continuă'
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
            {
              question: "Cât durează dezvoltarea unei aplicații mobile?",
              answer: "Durata variază în funcție de complexitate, de la 4 săptămâni pentru proiecte simple, până la câteva luni pentru soluții personalizate."
            },
            {
              question: "Aplicațiile vor funcționa atât pe iOS, cât și pe Android?",
              answer: "Da, dezvoltăm aplicații native sau cross-platform, compatibile cu ambele sisteme de operare."
            },
            {
              question: "Oferiți suport și mentenanță după lansare?",
              answer: "Da, oferim pachete de mentenanță și actualizări pentru a asigura funcționarea optimă pe termen lung."
            },
            {
              question: "Pot integra aplicația cu alte platforme sau servicii?",
              answer: "Desigur, realizăm integrarea cu API-uri externe, platforme de plată, CRM-uri și alte servicii necesare."
            },
            {
              question: "Ce informații aveți nevoie pentru a începe proiectul?",
              answer: "Ne trebuie o scurtă descriere a obiectivelor, funcționalitățile dorite și orice material vizual relevant."
            },
            {
              question: "Aplicațiile pot fi actualizate și extinse ulterior?",
              answer: "Da, aplicațiile sunt proiectate modular, pentru a permite adăugarea de noi funcții pe viitor."
            }
          ]
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection {...heroData} 
            rightContent={<MobileMockupSlider />}
            />
            <FeaturesSection {...featuresData} />
            <SolutionsSection plans={solutionsData} />
            <FaqSection faq={faqData.faqs} />
            <CtaBanner />
            <Footer />
        </div>
    );
} 