import React from 'react';
import { Smartphone, Globe, Video } from 'lucide-react';

export default function SolutionsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Soluția ta completă pentru conținut digital
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Construiește, promovează, optimizează și monetizează conținutul cu soluțiile noastre integrate.
                    </p>
                </div>

                {/* Mobile Apps */}
                <div className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <Smartphone className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Aplicații Mobile Personalizate</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Dezvoltăm aplicații mobile native și cross-platform pentru iOS și Android,
                                optimizate pentru performanță și experiența utilizatorului.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    Design modern și intuitiv
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    Funcționalități avansate
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    Integrare cu servicii cloud
                                </li>
                            </ul>
                            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Vizibilizezi aplicația →
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-4"></div>
                                <h4 className="font-semibold text-gray-900 mb-2">Food App</h4>
                                <p className="text-sm text-gray-600">Restaurant ordering system</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg mb-4"></div>
                                <h4 className="font-semibold text-gray-900 mb-2">Travel App</h4>
                                <p className="text-sm text-gray-600">Booking and navigation</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Website Building */}
                <div className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:order-2">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                    <Globe className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Construim website-ul tău</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Creăm site-uri web moderne, responsive și optimizate pentru motoarele de căutare,
                                care reflectă perfect identitatea brandului tău.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    Design responsive
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    Optimizare SEO avansată
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    Performanță maximă
                                </li>
                            </ul>
                            <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                                Vizibilizezi website →
                            </button>
                        </div>
                        <div className="lg:order-1">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                                    <div className="text-center">
                                        <Globe className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                        <p className="text-gray-600">Website Preview</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Content */}
                <div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    <Video className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Video pentru de impact</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Producem conținut video de înaltă calitate care captivează audiența și
                                transmite mesajul brandului tău în mod eficient.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                    Producție video profesională
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                    Motion graphics și animații
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                    Optimizare pentru platforme sociale
                                </li>
                            </ul>
                            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                                Vezi în acțiune →
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                                    <div className="w-full h-32 bg-gradient-to-br from-yellow-100 to-orange-100"></div>
                                </div>
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                                    <div className="w-full h-24 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                                </div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                                    <div className="w-full h-24 bg-gradient-to-br from-blue-100 to-cyan-100"></div>
                                </div>
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                                    <div className="w-full h-32 bg-gradient-to-br from-green-100 to-teal-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 