"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '../components';
import { Smartphone, Globe, Video, Zap, Settings, Star, CheckCircle, Bot, Eye, Clock4, CircleCheckBig, ArrowRight, PanelTop } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Zap className="w-7 h-7 text-blue-500" />, title: 'Lansează rapid', desc: 'Website-uri și aplicații dezvoltate în timp record',
  },
  {
    icon: <Bot className="w-7 h-7 text-blue-500" />, title: 'Automatizăm procesele tale', desc: 'De la conținut la funcționalitate – AI-ul lucrează pentru tine',
  },
  {
    icon: <Eye className="w-7 h-7 text-purple-500" />, title: 'Conținut video care atrage', desc: 'Clipuri promo moderne, create special pentru brandul tău',
  },
  {
    icon: <Clock4 className="w-7 h-7 text-pink-500" />, title: 'Mai puțină muncă repetitivă', desc: 'Automatizăm taskurile ca tu să te focusezi pe business',
  },
];

const services = [
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
    title: 'Aplicații Mobile Personalizate',
    desc: 'Aplicații mobile. Precise. Eficiente.',
    icon2: <CircleCheckBig className="w-4 h-4 text-blue-500" />,
    text: "Personalizat pentru afacerea ta",
    text2: "Publicare garantată în:",
    text3: "Proces optimizat, cap-coadă",
    image: '/img/apps.png',
    href: '/mobile-apps',
    tags: ['iOS', 'Android', 'Cross-platform'],
    icon3: <ArrowRight className="w-4 h-4 text-blue-500" />,
    cta: 'Solicită o aplicație',
  },
  {
    icon: <PanelTop className="w-8 h-8 text-sky-400" />,
    title: 'Construim website-ul tău',
    desc: 'Site-ul tău, optimizat pentru succes.',
    icon2: <CircleCheckBig className="w-4 h-4 text-sky-400" />,
    text: "Design modern și responsive",
    text2: "Performanță optimizată",
    text3: "Administrare ușoară",
    image: '/img/websites.png',
    href: '/websites',
    tags: ['Prezentare', 'E-commerce', 'Custom'],
    icon3: <ArrowRight className="w-4 h-4 text-sky-400" />,
    cta: 'Solicită un website',
  },
  {
    icon: <Video className="w-8 h-8 text-purple-500" />,
    title: 'Video promo de impact',
    desc: 'Captează atenția. Rămâi memorabil.',
    icon2: <CircleCheckBig className="w-4 h-4 text-purple-500" />,
    text: "Captivant de la primele secunde",
    text2: "Perfect pentru social media",
    text3: "Script, voice-over, editare",
    image: '/img/video.png',
    href: '/video',
    tags: ['Promo', 'Animații', 'Social'],
    icon3: <ArrowRight className="w-4 h-4 text-purple-500" />,
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
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="pt-16 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-none mb-4">
              Transformăm<br />idei în conținut<br />care <span className="text-blue-600">captivează</span>
            </h1>
            <p className="text-lg text-gray-600 mb-7 max-w-lg">
              Site-uri, aplicații, branding, automatizări și conținut creativ – toate într-un <span className="text-blue-600 font-semibold">singur loc</span>.
            </p>
            <div className="flex flex-col gap-4 mb-7">
              <a href="#" className="inline-flex items-center bg-gradient-to-r from-blue-700 to-purple-600 text-white px-4 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors text-base gap-2 max-w-48">
                Contactează-ne
                <Image src="/img/boostIcon.png" alt="boostIcon" width={20} height={10} />
              </a>
              <a href="#" className="inline-flex items-center border bg-blue-400/10 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors text-base gap-2">
                Contează pe experiența noastră!
              </a>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <Image src="/img/people.png" alt="people" width={15} height={10} />
              <span className="text-gray-400 font-normal text-base">100+ afaceri</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="d-flex">
                <span className="text-gray-400 text-sm">Perfect pentru</span>
                <div className="flex items-center gap-1">
                  <Image src="/img/google.png" alt="google" width={23} height={23} />
                  <Image src="/img/facebook.png" alt="facebook" width={23} height={23} />
                  <Image src="/img/tiktok.png" alt="tiktok" width={23} height={23} />
                  <Image src="/img/instagram.png" alt="instagram" width={23} height={23} />
                  <Image src="/img/x.png" alt="x" width={23} height={23} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center min-h-[340px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/60 to-blue-300/20 blur-2xl" />
            <Image src="/img/hero.png" alt="hero" width={400} height={100} />
            {/* <div className="relative grid grid-cols-2 gap-4 z-10">
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
            </div> */}
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
          <div className="text-center">
            <h2 className="text-4xl font-bold">Soluția ta completă pentru conținut digital</h2>
            <p className="text-base text-gray-500 mt-3">Creează conținut <span className="text-blue-600">captivant</span> și <span className="text-blue-600">profesional</span> în mai multe formate cu ajutorul uneltelor noastre <span className="text-blue-600">AI</span>.</p>
          </div>
          {services.map((s, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4 gap-3">
                  {s.icon}
                  <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-gray-500 text-base mb-4">{s.desc}</p>
                <div className="flex items-center gap-2 mb-3">
                  {s.icon2}
                  <p className="text-gray-500 text-base">{s.text}</p>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  {s.icon2}
                  <p className="text-gray-500 text-base">{s.text2}</p>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  {s.icon2}
                  <p className="text-gray-500 text-base">{s.text3}</p>
                </div>
                {/* <div className="flex gap-2 mb-4">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">{tag}</span>
                  ))}
                </div> */}
                <Link href={s.href} className="flex items-center gap-2 max-w-56 px-6 py-2 text-center mt-10 bg-blue-600/10 text-blue-700 rounded-full font-semibold shadow hover:bg-blue-700 hover:text-white transition-colors">{s.cta} {s.icon3}</Link>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img src={s.image} alt={s.title} className="w-100 h-80 object-contain rounded-2xl" />
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
            <p className="mt-4 text-lg text-gray-400">Tot ce trebuie să știi despre platforma noastră de creare conținut AI</p>
          </div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl transition-all duration-300">
                <button
                  className="w-full flex justify-between items-center text-left p-6 cursor-pointer group"
                  type="button"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="text-lg font-semibold text-gray-800">{item.q}</span>
                  <span className={`ml-4 text-blue-500 group-hover:text-blue-700 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'px-6 pb-6 max-h-96 opacity-100' : 'p-0 max-h-0 opacity-0'}`}>
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