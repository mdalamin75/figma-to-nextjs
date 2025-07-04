import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TermsAndConditions() {
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
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">Termeni și Condiții</h1>
                    <h2 className="text-xl font-bold mb-1 text-center text-gray-800 drop-shadow">Termeni și condiții de utilizare</h2>
                    <p className="text-sm text-gray-500 text-center mb-8">Ultima actualizare: Iunie 2025</p>
                    <div className="prose prose-sm sm:prose-base max-w-none text-gray-800">
                        <h3 className="font-bold mb-4 mt-3">📄 Termeni și condiții de utilizare</h3>
                        <p>Prin accesarea acestui site și utilizarea serviciilor oferite de AD BOOST S.R.L., sunteți de acord cu termenii și condițiile descrise în prezentul document.</p>
                        <p>AD BOOST S.R.L. oferă servicii personalizate precum dezvoltare web, aplicații mobile, soluții AI și conținut video promoțional. Colaborarea se realizează pe baza unui acord comercial clar, în funcție de cerințele specifice ale clientului.</p>
                        <p>Plata serviciilor se efectuează pe baza unei facturi emise, în euro, și se face prin metode sigure de plată. Termenele de livrare sunt orientative și pot varia în funcție de complexitatea proiectului. Orice modificare majoră poate influența timpul de livrare.</p>
                        <p>Ne rezervăm dreptul de a actualiza acești termeni, fără notificare prealabilă. Este responsabilitatea utilizatorului să verifice periodic conținutul acestei pagini.</p>
                        <p>Pentru întrebări sau sesizări legate de colaborare, ne puteți contacta prin formularul de pe site sau direct la adresa de email furnizată.</p>

                        <h3 className="font-bold mb-2 mt-4">🛡️ Informații legale și ANPC</h3>
                        <p>AD BOOST S.R.L. este o firmă înregistrată în România și respectă legislația în vigoare privind protecția consumatorilor.</p>
                        <p>Pentru sesizări sau reclamații oficiale, puteți contacta Autoritatea Națională pentru Protecția Consumatorilor (ANPC): <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://anpc.ro</a></p>
                        <p>Date firmă: <br />AD BOOST S.R.L.<br />CUI: 48091747<br />Nr. Reg. Comerțului: J04/713/2023<br />Sediu: Letea 32 Sc. A Ap. 116</p>

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