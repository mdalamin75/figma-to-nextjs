"use client"
import React from 'react';
import { Header, HeroSection, FeaturesSection, SolutionsSection, FaqSection, Footer } from '../../components';
import CtaBanner from '../../components/CtaBanner';
import { ShoppingCart, Paintbrush, Bot, Check } from 'lucide-react';

export default function LandingPage() {
  const heroData = {
    title: (
      <>
        Website-uri care<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          impresionează
        </span>{" "}
        și<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          performează
        </span>
      </>
    ),
    subtitle: (
      <>
        Design modern, funcționalitate inteligentă și integrare completă – <span className="text-blue-500 font-semibold">site-ul</span> tău devine un instrument de
        <span className="text-blue-500 font-semibold">creștere reală.</span>
      </>
    ),
    cta: { text: "Contactează-ne", href: "https://api.whatsapp.com/send?phone=40743368360" },
    cta_2: { text: "Contează pe experiența noastră!", href: "#" },
    rating: "100+ website-uri",
    image: { src: "/img/webHero.png", alt: "Website preview" },
    image_bottom_text: 'Călătorește cu viteza și confortul pe care le meriți. Fără escale, fără așteptări, doar libertate și eficiență la fiecare zbor.',
  };

  const featuresData = {
    title: (
      <>
        Website-uri Strategice care <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">Vând</span>
      </>
    ),
    // subtitle: "Soluțiile noastre web sunt gândite pentru a genera rezultate concrete, transformând vizitatorii în clienți.",
    features: [
      {
        icon: <Check  className="w-8 h-8 text-purple-500" />,
        title: 'Performanță de Top',
        description: 'Optimizare SEO, viteză și UX gândit pentru conversie.',
      },
      {
        icon: <Check className="w-8 h-8 text-purple-500" />,
        title: 'Branding Care Se Simte',
        description: 'Design coerent, memorabil, adaptat publicului tău.',
      },
      {
        icon: <Check className="w-8 h-8 text-purple-500" />,
        title: 'Scalabil și Automatizat',
        description: 'Gata pentru integrare cu AI, CRM-uri sau campanii de ads.',
      },
    ],
    bottom_text: (
      <>
        Creăm platforme digitale axate pe <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">conversie, viteză</span> și <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">impact vizual.</span> Gândește-ți site-ul ca un <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">activ de marketing,</span>  nu doar o vitrină. 
      </>
    ),
    cta: { text: "Contactează-ne", href: "https://api.whatsapp.com/send?phone=40743368360" },
  };

  const solutionsData = {
    unique: [
      {
        name: 'Start',
        price: '1.000€',
        description: 'Dezvoltat 100% pe nevoile tale reale',
        cta: 'Lansare rapidă',
        features: [
          'Design modern și adaptabil',
          'Structură clară, axată pe esențial',
          'Conținut vizual și textual de impact',
          'Navigare intuitivă și accesibilă',
          'Formular de contact și integrare socială',
          'Optimizare pentru mobil și desktop',
          'Fundamente SEO incluse',
          'Lansare rapidă, fără bătăi de cap'
        ],
        recommended: false,
      },
      {
        name: 'Business',
        price: '3.000€',
        description: 'Dezvoltat 100% pe nevoile tale reale',
        cta: 'Creștere stabilă',
        features: [
          'Design personalizat pentru brandul tău',
          'Conținut orientat spre atragerea clienților',
          'Elemente dinamice & interactive',
          'Structură scalabilă pentru creștere',
          'Integrare formulare, testimoniale, blog',
          'Optimizare SEO extinsă',
          'Experiență fluidă pentru utilizatori',
          'Adaptat obiectivelor de business'
        ],
        recommended: false,
      },
      {
        name: 'E-commerce',
        price: '5.000€+',
        description: 'Dezvoltat 100% pe nevoile tale reale',
        cta: 'Vânzări eficiente',
        features: [
          'Design optimizat pentru vânzări online',
          'Structură gândită pentru conversie',
          'Funcționalități avansate de magazin',
          'Proces de comandă intuitiv și eficient',
          'Integrări de plăți și livrare',
          'Automatizări pentru campanii și reduceri',
          'Management ușor al conținutului',
          'Pregătit pentru scalare și promovare',
        ],
        recommended: false,
      },
      {
        name: 'Custom',
        price: '10.000€+',
        description: 'Dezvoltat 100% pe nevoile tale reale',
        cta: 'Fără limite',
        features: [
          'Arhitectură unică, creată de la zero',
          'Soluții digitale personalizate complet',
          'Funcționalități complexe adaptate nevoilor',
          'Integrare cu sisteme externe/API-uri',
          'Experiență interactivă și scalabilă',
          'Automatizări, dashboard-uri, AI dacă e cazul',
          'Suport strategic și consultanță tehnică',
          'Creat pentru performanță',
        ],
        recommended: false,
      },
    ],
    monthly: [
      // Monthly plans would go here
    ],
  };

  const faqData = {
    title: "Întrebări frecvente",
    subtitle: "Răspunsuri la cele mai comune întrebări despre serviciile noastre web.",
    faqs: [
      {
        question: "Cât durează realizarea unui website?",
        answer:
          "Timpul de livrare variază în funcție de cerințe și complexitate, dar ne asigurăm că totul este gata într-un interval rezonabil.",
      },
      {
        question: "Website-ul va fi optimizat pentru mobil?",
        answer:
          "Da. Toate website-urile dezvoltate sunt responsive și arată impecabil pe orice dispozitiv – telefon, tabletă sau desktop.",
      },
      {
        question: "Pot cere modificări după livrare?",
        answer:
          "Desigur. Oferim o perioadă de revizii incluse pentru a ne asigura că rezultatul final reflectă exact ceea ce ai nevoie.",
      },
      {
        question: "Pot integra un blog, formular de contact sau sistem de rezervări?",
        answer:
          "Da, includem funcționalități personalizate în funcție de obiectivele site-ului și specificul afacerii tale.",
      },
      {
        question: "Site-ul va fi optimizat SEO?",
        answer:
          "Da. Structura este construită corect din punct de vedere SEO, cu atenție la viteză, titluri, descrieri și accesibilitate.",
      },
      {
        question: "Primesc acces pentru a gestiona conținutul?",
        answer:
          "Absolut. Vei avea panou de administrare ușor de folosit pentru a actualiza texte, imagini și secțiuni oricând dorești.",
      },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        cta={heroData.cta}
        rating={heroData.rating}
        image={heroData.image}
        image_bottom_text={heroData.image_bottom_text }
      />
      <FeaturesSection
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        features={featuresData.features}
        bottom_text={featuresData.bottom_text}
        cta={featuresData.cta}
      />
      <SolutionsSection plans={solutionsData} />
      <FaqSection
        title={faqData.title}
        subtitle={faqData.subtitle}
        faqs={faqData.faqs}
      />
      <CtaBanner />
      <Footer />
    </div>
  );
}