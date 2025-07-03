import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CookiesPolicy() {
    return (
        <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-[#e6edff] via-white to-[#e6e6fa]">
            <Header />
            <main className="flex-1 flex justify-center items-center py-12 px-2 sm:px-4 relative">
                {/* Shadow background behind the card */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                    <div className="w-full max-w-5xl h-[90%] rounded-3xl mx-auto blur-xl" style={{
                        background: 'radial-gradient(circle, rgba(120,140,255,0.25) 0%, rgba(180,160,255,0.18) 60%, rgba(230,237,255,0) 100%)',
                        boxShadow: '0 0 120px 40px rgba(120,140,255,0.18)',
                    }} />
                </div>
                <div className="w-full max-w-4xl p-8 sm:p-12 relative z-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">Politica de Cookie-uri</h1>
                    <h2 className="text-xl font-bold mb-1 text-center text-gray-800 drop-shadow">Cum folosim cookie-urile pe acest site</h2>
                    <p className="text-sm text-gray-500 text-center mb-8">Ultima actualizare: Iunie 2025</p>
                    <div className="prose prose-sm sm:prose-base max-w-none text-gray-800">
                        <h3 className="font-bold mb-4 mt-3">🍪 Politica de cookie-uri</h3>
                        <p>Site-ul nostru utilizează cookie-uri pentru a îmbunătăți experiența de navigare, pentru analiză și pentru funcționalități esențiale. Aceste cookie-uri nu colectează informații personale identificabile fără acordul dvs.</p>
                        <p>Prin continuarea navigării pe site, vă exprimați acordul privind utilizarea cookie-urilor conform acestei politici. Puteți oricând modifica setările din browser pentru a le bloca sau a le șterge.</p>
                        <p>Unele funcționalități ale site-ului pot fi afectate în cazul dezactivării cookie-urilor.</p>

                        <p className="text-center text-xs text-gray-400 mt-8">© 2025 @Byte All rights reserved.</p>
                        <div className="text-center mt-6">
                            <Link href="/" className="text-blue-600 hover:underline">Înapoi la pagina principală</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
} 