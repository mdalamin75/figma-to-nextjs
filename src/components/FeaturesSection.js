import React from 'react';
import { Zap, Settings, Video, Repeat } from 'lucide-react';

export default function FeaturesSection() {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-6 rounded-xl">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-7 h-7 text-blue-500" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Lansează rapid</h3>
                        <p className="text-gray-500 text-sm">Website-uri și aplicații dezvoltate în timp record</p>
                    </div>

                    <div className="text-center p-6 rounded-xl">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Settings className="w-7 h-7 text-blue-500" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Automatizăm procesele tale</h3>
                        <p className="text-gray-500 text-sm">De la conținut la funcționalitate – AI-ul lucrează pentru tine</p>
                    </div>

                    <div className="text-center p-6 rounded-xl">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Video className="w-7 h-7 text-blue-500" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Conținut video care atrage</h3>
                        <p className="text-gray-500 text-sm">Clipuri promo moderne, create special pentru brandul tău</p>
                    </div>

                    <div className="text-center p-6 rounded-xl">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Repeat className="w-7 h-7 text-blue-500" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Mai puțină muncă repetitivă</h3>
                        <p className="text-gray-500 text-sm">Automatizăm taskurile ca tu să te focusezi pe business</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 