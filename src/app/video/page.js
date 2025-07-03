"use client";
import React, { useState } from "react";
import {
	Header,
	HeroSection,
	FeaturesSection,
	SolutionsSection,
	FaqSection,
	Footer,
} from "../../components";
import CtaBanner from "../../components/CtaBanner";
import { Video, Film, Share2, Check } from "lucide-react";

export default function VideoPage() {
	const [openFaq, setOpenFaq] = useState(null);
	const toggleFaq = (i) => {
		setOpenFaq(openFaq === i ? null : i);
	};

	const heroData = {
		title: (
			<>
				Conținut video <br />
				<span className="text-purple-500">vinde </span>
				care și <br /> <span className="text-purple-500">convinge</span>
			</>
		),
		subtitle: (
			<>
				Clipuri video <span className="text-purple-500">captivante</span>,
				create să spună povestea <br />
				<span className="text-purple-500">brandului</span> tău și să atragă
				<span className="text-purple-500"> atenția</span> imediat.
			</>
		),
		cta: {
			text: "Contactează-ne",
			href: "https://api.whatsapp.com/send?phone=40743368360",
		},
		cta_2: { text: "Contează pe experiența noastră!", href: "#" },
		rating: "100+ afaceri",
		image: { src: "/img/video.png", alt: "Video Production" },
	};

	const featuresData = {
		title: (
			<>
				Video-uri Captivante care <span className="text-purple-500">Vând</span>
			</>
		),
		subtitle:
			"Producem conținut video de înaltă calitate, optimizat pentru a genera rezultate pe platformele relevante pentru tine.",
		features: [
			{
				icon: <Check className="w-8 h-8 text-blue-700" />,
				title: "Impact Vizual",
				description:
					"Video-uri atractive, care rețin privirea și comunică clar mesajul.",
			},
			{
				icon: <Check className="w-8 h-8 text-blue-700" />,
				title: "Conținut Personalizat",
				description:
					"Adaptăm fiecare clip la brandul și obiectivele tale specifice. ",
			},
			{
				icon: <Check className="w-8 h-8 text-blue-700" />,
				title: "Livrare Rapidă",
				description: "Producție eficientă, pentru campanii care nu așteaptă.",
			},
		],
		bottom_text: (
			<>
				Video-uri <span className="text-purple-500"></span> care
				<span className="text-purple-500"></span>, captează
				<span className="text-purple-500"> atenția</span> și
				<span className="text-purple-500"> cresc vânzările.</span> Producem
				conținut <span className="text-purple-500">dinamic</span>, adaptat
				nevoilor tale de <span className="text-purple-500">marketing</span>.
			</>
		),
		cta: {
			text: "Contactează-ne",
			href: "https://api.whatsapp.com/send?phone=40743368360",
		},
	};

	const solutionsData = {
		unique: [
			{
				name: "Start",
				price: "500€",
				description: "Dezvoltat 100% pe nevoile tale reale",
				cta: "Lansare rapidă",
				features: [
					"1 video de 30-45 secunde",
					"Concept vizual inclus",
					"Text & logo integrate",
					"Animare simplă",
					"Stil modern și clar",
					"Muzică royalty-free",
					"Export HD",
					"1 rundă de feedback",
				],
				recommended: false,
			},
			{
				name: "Business",
				price: "1.500€",
				description: "Dezvoltat 100% pe nevoile tale reale",
				cta: "Creștere stabilă",
				features: [
					"1 video de 60+ secunde",
					"Script & storyboard personalizat",
					"Animații dinamice",
					"Elemente grafice avansate",
					"Muzică profesională inclusă",
					"Subtitrări & sincronizare",
					"Export Full HD",
					"2 runde de revizuiri",
				],
				recommended: false,
			},
			{
				name: "Advance",
				price: "3.000€+",
				description: "Dezvoltat 100% pe nevoile tale reale",
				cta: "Vânzări eficiente",
				features: [
					"15 videoclipuri promo (15-60 secunde)",
					"Conținut adaptat pe campanii",
					"Design și animație personalizate",
					"Mesaje pentru diferite canale",
					"Strategie video inclusă",
					"Efecte vizuale de impact",
					"Export Full HD & 4K",
					"Revizuiri nelimitate",
				],
				recommended: false,
			},
			{
				name: (
					<>
						<span className="text-blue-500">Custom</span>
					</>
				),
				price: "5.000€+",
				description: "Dezvoltat 100% pe nevoile tale reale",
				cta: "Fără limite",
				features: [
					"30 videoclipuri promo pe lună",
					"Conținut recurent & personalizat",
					"Planificare editorială lunară",
					"Script & creație vizuală completă",
					"Design & animație premium",
					"Integrare brand & voce",
					"Revizuiri nelimitate",
					"Export HD / 4K inclus",
				],
				recommended: false,
			},
		],
		monthly: [],
	};

	const faqData = {
		title: "Întrebări frecvente",
		subtitle: "Răspunsuri la cele mai comune întrebări despre producția video.",
		faqs: [
			{
				question: "Cât durează producția unui video?",
				answer:
					"Durata variază în funcție de complexitate. Un video scurt pentru social media poate fi gata în câteva zile, în timp ce o producție complexă poate dura câteva săptămâni.",
			},
			{
				question: "Pot folosi video-ul pe orice platformă?",
				answer:
					"Da, livrăm video-urile în formate optimizate pentru diverse platforme, de la website-ul tău, la social media sau campanii de publicitate.",
			},
			{
				question: "Ce include procesul de producție?",
				answer:
					"Procesul nostru acoperă totul: de la strategie și scenariu, la filmare, editare, post-producție și livrarea finală.",
			},
		],
	};

	return (
		<div className="min-h-screen bg-white">
			<Header />
			<HeroSection
				{...heroData}
				imageClassName="rounded-2xl mx-auto max-w-[80%] max-h-[500px] md:max-w-[90%] md:max-h-[600px]"
			/>
			<FeaturesSection {...featuresData} />
			<SolutionsSection plans={solutionsData} />
			<FaqSection faq={faqData.faqs} openFaq={openFaq} toggleFaq={toggleFaq} />
			<CtaBanner />
			<Footer />
		</div>
	);
}
