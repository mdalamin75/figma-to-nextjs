import React from "react";
import { Zap, Smartphone, Video, SquarePen, Bot, Globe, CheckCircle } from "lucide-react";

export default function DigitalSolutionsSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-2">
                    Totul pentru afacerea <span className="text-blue-600">ta digitală</span>
                </h2>
                <p className="text-center text-gray-500 text-lg mb-10">
                    Dezvoltăm, automatizăm și promovăm brandul tău cu soluții inteligente.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow p-7">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 mb-5">
                            <Zap className="w-7 h-7 text-blue-500" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Website-uri Moderne</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Design premium, adaptat brandului tău</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Performanță SEO și optimizare tehnică completă</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Scalabil, gata pentru extindere și integrare AI</li>
                        </ul>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow p-7">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100 mb-5">
                            <Smartphone className="w-7 h-7 text-green-500" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Aplicații Mobile</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Dezvoltare nativă pentru iOS & Android</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Funcționalități personalizate pentru orice industrie</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Publicare și suport în toate platformele majore</li>
                        </ul>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow p-7">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-100 mb-5">
                            <Video className="w-7 h-7 text-purple-500" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Video Promo de Impact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Conținut captivant creat de echipa noastră</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Scenarii, voice-over și editare incluse</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Ideal pentru reclame, social media și prezentări</li>
                        </ul>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl shadow p-7">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-100 mb-5">
                            <SquarePen className="w-7 h-7 text-orange-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Mentenanță Constantă</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Monitorizare continuă a performanței site-ului</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Update-uri regulate și management securitate</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Intervenții rapide și suport tehnic dedicat</li>
                        </ul>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-white rounded-2xl shadow p-7">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-100 mb-5">
                            <Bot className="w-7 h-7 text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">AI Personalizat</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Automatizează complet procesele de business</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Oferă suport inteligent prin chatbot și analize</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Folosește datele pentru decizii predictibile</li>
                        </ul>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-white rounded-2xl shadow p-7">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-pink-100 mb-5">
                            <Globe className="w-7 h-7 text-pink-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Integrare & Scalare</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Conectează-ți site-ul cu CRM, ERP sau AI</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Automatizează fluxurile interne și externe</li>
                            <li className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />Soluții gata să crească odată cu afacerea ta</li>
                        </ul>
                    </div>
                </div>
                {/* CTA Box */}
                <div className="bg-blue-50 rounded-2xl p-10 flex flex-col items-center mt-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Pregătit să începem?</h4>
                    <p className="text-gray-500 mb-6">Hai să construim ceva memorabil, împreună.</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors text-base gap-2">
                        Contactează-ne
                    </a>
                </div>
            </div>
        </section>
    );
} 