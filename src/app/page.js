"use client"
import React from 'react';
import Link from 'next/link';
import { Header, Footer } from '../components';
import { Smartphone, Globe, Video, Zap, Settings, Star, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-7 h-7 text-blue-500" />, title: 'Lansează rapid', desc: 'Proiecte livrate în timp record',
  },
  {
    icon: <Settings className="w-7 h-7 text-blue-500" />, title: 'Automatizăm procesele tale', desc: 'AI și automatizări pentru eficiență',
  },
  {
    icon: <Globe className="w-7 h-7 text-blue-500" />, title: 'Conținut video care atrage', desc: 'Clipuri promo moderne pentru brandul tău',
  },
  {
    icon: <Video className="w-7 h-7 text-blue-500" />, title: 'Mai puțină muncă repetitivă', desc: 'Automatizăm taskurile ca tu să te focusezi pe business',
  },
];

const services = [
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />, title: 'Aplicații Mobile Personalizate',
    desc: 'Aplicații iOS, Android, cross-platform. Design modern, funcționalități avansate.',
    image: '/img/restaurentApp.png',
    href: '/mobile-apps',
    tags: ['iOS', 'Android', 'Cross-platform'],
    cta: 'Solicită o ofertă',
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />, title: 'Construim website-ul tău',
    desc: 'Site-uri de prezentare, magazine online, platforme custom. Responsive, SEO, performanță.',
    image: '/img/website.png',
    href: '/websites',
    tags: ['Prezentare', 'E-commerce', 'Custom'],
    cta: 'Solicită un site',
  },
  {
    icon: <Video className="w-8 h-8 text-blue-500" />, title: 'Video promo de impact',
    desc: 'Clipuri promo, animații, conținut social media. Producție video profesională.',
    image: '/img/clinickApp.png',
    href: '/video',
    tags: ['Promo', 'Animații', 'Social'],
    cta: 'Solicită video',
  },
];

const faq = [
  {
    q: '1. Ce servicii oferă agenția voastră?',
    a: 'Creăm site-uri web, aplicații mobile, video promo și oferim soluții AI și mentenanță.',
  },
  {
    q: '2. Pot beneficia de soluții AI integrate?',
    a: 'Da, toate proiectele includ opțiuni AI pentru eficientizare și automatizare.',
  },
  {
    q: '3. Cum începe procesul de colaborare?',
    a: 'Ne contactați, discutăm nevoile tale și începem proiectul personalizat.',
  },
  {
    q: '4. Cât durează realizarea unui site sau aplicație?',
    a: 'Durata variază în funcție de complexitate, dar livrăm rapid și eficient.',
  },
  {
    q: '5. Oferiți suport și mentenanță după lansare?',
    a: 'Da, avem pachete de mentenanță pentru performanță și actualizări constante.',
  },
  {
    q: '6. Pot personaliza designul și funcționalitățile?',
    a: 'Desigur, totul este adaptat la nevoile și brandul tău.',
  },
  {
    q: '7. Care sunt costurile pentru aceste servicii?',
    a: 'Prețurile sunt flexibile, în funcție de proiect și cerințe.',
  },
  {
    q: '8. Cum mă ajută AI în proiectele mele?',
    a: 'AI optimizează procesele, automatizează sarcinile și îmbunătățește experiența utilizatorilor.',
  },
  {
    q: '9. Sunt proiectele voastre compatibile cu dispozitive mobile?',
    a: 'Da, toate website-urile și aplicațiile sunt responsive și mobile-friendly.',
  },
  {
    q: '10. Ce garanții oferiți privind securitatea?',
    a: 'Respectăm standarde înalte de securitate pentru toate proiectele noastre.',
  },
  {
    q: '11. Cum pot solicita un proiect sau o ofertă?',
    a: 'Completează formularul de contact sau scrie-ne direct, iar noi revenim rapid.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="pt-16 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Transformăm<br />idei în conținut<br />care <span className="text-blue-600">captivează</span>
            </h1>
            <p className="text-lg text-gray-600 mb-7 max-w-xl">
              Site-uri, aplicații, branding, automatizări și conținut creativ – toate într-un <span className="text-blue-600 font-semibold">singur loc</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-7">
              <a href="#" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors text-base gap-2">
                Contactează-ne
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#" className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-base gap-2">
                Contează pe experiența noastră!
              </a>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-gray-800 font-semibold text-base">100+ afaceri</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">Perfect pentru</span>
              <div className="flex items-center gap-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#4285F4" /></svg>
                <svg className="w-6 h-6" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#3b5998" /></svg>
                <svg className="w-6 h-6" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#000" /></svg>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <img src="/img/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="text-xs text-gray-500">5.0 - 150+ review-uri</span>
              <img src="/vercel.svg" alt="Vercel" className="w-12 h-6" />
              <img src="/next.svg" alt="Next.js" className="w-12 h-6" />
            </div>
          </div>
          <div className="relative flex justify-center items-center min-h-[340px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/60 to-blue-300/20 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4 z-10">
              <div className="w-32 h-24 bg-white rounded-xl shadow flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
              </div>
              <div className="w-20 h-16 bg-white rounded-xl shadow flex items-center justify-center mt-8">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
              </div>
              <div className="w-20 h-16 bg-white rounded-xl shadow flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
              </div>
              <div className="w-32 h-24 bg-white rounded-xl shadow flex items-center justify-center mt-8">
                <svg className="w-8 h-8 text-blue-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">{f.icon}</div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4 gap-3">
                  {s.icon}
                  <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <div className="flex gap-2 mb-4">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">{tag}</span>
                  ))}
                </div>
                <Link href={s.href} className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-colors">{s.cta}</Link>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img src={s.image} alt={s.title} className="w-80 h-56 object-contain rounded-2xl shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Întrebări frecvente</h2>
            <p className="mt-4 text-xl text-gray-600">Tot ce trebuie să știi despre platforma noastră de creare conținut AI</p>
          </div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl transition-all duration-300">
                <button className="w-full flex justify-between items-center text-left p-6 cursor-pointer group" type="button">
                  <span className="text-lg font-semibold text-gray-800">{item.q}</span>
                  <span className="ml-4 text-blue-500 group-hover:text-blue-700"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg></span>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}