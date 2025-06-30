"use client"
import React from 'react';
import { Header, HeroSection, FeaturesSection, SolutionsSection, FaqSection, Footer } from '../../components';
import CtaBanner from '../../components/CtaBanner';
import { ShoppingCart, Paintbrush, Bot } from 'lucide-react';

export default function LandingPage() {
  const heroData = {
    title: (
      <>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Website-uri care</span><br />
        impresionează și<br />
        performează
      </>
    ),
    subtitle: "De la site-uri de prezentare la magazine online complexe, creăm experiențe digitale care nu doar arată bine, ci și convertesc vizitatorii în clienți fideli.",
    cta: { text: "Vreau o ofertă de preț", href: "#" },
    rating: "Peste 100 de afaceri mulțumite",
    image: { src: "/img/website.png", alt: "Website preview" }
  };

  const featuresData = {
    title: (
      <>
        Website-uri Strategice care <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Vând</span>
      </>
    ),
    subtitle: "Soluțiile noastre web sunt gândite pentru a genera rezultate concrete, transformând vizitatorii în clienți.",
    features: [
      {
        icon: <ShoppingCart className="w-8 h-8 text-blue-500" />,
        title: 'Platforme E-commerce',
        description: 'Magazine online performante, optimizate pentru conversii, care oferă o experiență de cumpărături excepțională.',
      },
      {
        icon: <Paintbrush className="w-8 h-8 text-green-500" />,
        title: 'Branding și identitate vizuală',
        description: 'Creăm o imagine de brand memorabilă, de la logo și paletă de culori, la manual de brand complet.',
      },
      {
        icon: <Bot className="w-8 h-8 text-purple-500" />,
        title: 'Strategie de Automatizări',
        description: 'Implementăm soluții de automatizare personalizate pentru a eficientiza procesele și a reduce costurile operaționale.',
      },
    ]
  };

  const solutionsData = {
    unique: [
      {
        name: 'Start',
        price: '1.000€',
        description: 'Ideal pentru startup-uri și proiecte mici.',
        features: [
          'Website de prezentare (până la 5 pagini)',
          'Design personalizat',
          'Formular de contact',
          'Optimizare SEO de bază',
          'Suport tehnic 1 lună',
        ],
        recommended: false,
      },
      {
        name: 'Business',
        price: '3.000€',
        description: 'Pentru afaceri în creștere care vor mai mult.',
        features: [
          'Website complex (până la 10 pagini)',
          'Sistem de administrare conținut (CMS)',
          'Integrare blog',
          'Optimizare SEO avansată',
          'Suport tehnic 3 luni',
        ],
        recommended: true,
      },
      {
        name: 'Custom',
        price: '5.000€+',
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
    monthly: [
      // Monthly plans would go here
    ],
  };

  const faqData = {
    title: "Întrebări frecvente",
    subtitle: "Răspunsuri la cele mai comune întrebări despre serviciile noastre web.",
    faqs: [
      {
        question: "Cum funcționează procesul de design?",
        answer: "Procesul nostru de design începe cu o sesiune de discovery pentru a înțelege viziunea și obiectivele tale. Continuăm cu wireframes, mockups și prototipuri interactive, asigurându-ne că designul final este atât estetic, cât și funcțional."
      },
      {
        question: "Cât timp durează crearea unui website?",
        answer: "Timpul de dezvoltare variază în funcție de complexitatea proiectului. Un website de prezentare poate dura 2-4 săptămâni, în timp ce o platformă e-commerce sau o aplicație custom poate dura câteva luni. Vom stabili un calendar clar de la început."
      },
      {
        question: "Oferiți servicii de mentenanță?",
        answer: "Da, oferim pachete de mentenanță flexibile pentru a ne asigura că website-ul tău rămâne securizat, actualizat și performant pe termen lung. Acestea includ update-uri, backup-uri și suport tehnic."
      },
      {
        question: "Website-ul va fi optimizat pentru mobil?",
        answer: "Absolut. Toate website-urile pe care le creăm sunt complet responsive, ceea ce înseamnă că se vor afișa și vor funcționa perfect pe orice dispozitiv, de la desktop-uri la telefoane mobile."
      },
      {
        question: "Voi putea actualiza conținutul website-ului?",
        answer: "Da. Majoritatea website-urilor pe care le dezvoltăm includ un sistem de management al conținutului (CMS) precum WordPress sau o soluție custom, care îți va permite să actualizezi textele, imaginile și alte elemente cu ușurință."
      },
      {
        question: "Ce fel de suport tehnic oferiți?",
        answer: "Oferim suport tehnic continuu prin pachetele noastre de mentenanță. Pentru orice problemă sau întrebare, echipa noastră este disponibilă să te ajute rapid și eficient."
      }
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
      />
      <FeaturesSection
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        features={featuresData.features}
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