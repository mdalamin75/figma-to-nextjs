"use client";
import React from "react";
import {
	Header,
	HeroSection,
	FeaturesSection,
	SolutionsSection,
	FaqSection,
	Footer,
} from "../../components";
import CtaBanner from "../../components/CtaBanner";
import { ShieldCheck, Zap, Server, Check } from "lucide-react";
import WebsiteScanningAnimation from "@/components/WebsiteScanningAnimation";

export default function MaintenancePage() {
	const heroData = {
		title: (
			<>
				Stabilitate, securitate
				<br /> și actualizări <br /> <span className="text-green-700">permanente</span>
			</>
		),
		subtitle: (
			<>
				<span className="text-green-700">Site-uri</span> și <span className="text-green-700">aplicații</span> mereu <span className="text-green-700">actualizate, rapide</span> și <span className="text-green-700">sigure</span> – <br /> fără griji, fără întreruperi.
			</>
		),
		cta: {
			text: "Contactează-ne",
			href: "https://api.whatsapp.com/send?phone=40743368360",
		},
		cta_2: { text: "Contează pe experiența noastră!", href: "#" },
		rating: "100+ afaceri",
		image: { src: "/img/maintenance.png", alt: "Website Maintenance" },
	};

	const featuresData = {
		title: (
			<>
				<span className="text-green-700 text-3xl">
					Stabilitate digitală
				</span>
				<span className="text-3xl"> fără întreruperi</span>

			</>
		),
		subtitle:
			"Serviciile noastre de mentenanță îți oferă liniștea de care ai nevoie pentru a te concentra pe afacerea ta.",
		features: [
			{
				icon: <Check className="w-8 h-8 text-blue-700" />,
				title: "Suport Tehnic Complet",
				description:
					"Monitorizare, depanare și actualizări rapide.",
			},
			{
				icon: <Check className="w-8 h-8 text-blue-700" />,
				title: "Securitate Permanentă",
				description:
					"Protecție împotriva amenințărilor digitale."
			},
			{
				icon: <Check className="w-8 h-8 text-blue-700" />,
				title: "Optimizare Continuă",
				description:
					"Viteză, UX și performanță îmbunătățite.",
			},
		],
		bottom_text: (
			<>
				Ne ocupăm de
				<span className="text-green-600">
					actualizări, securitate
				</span>
				și
				<span className="text-green-600">
					optimizare
				</span>  continuă, astfel încât tu să te concentrezi pe
				<span className="text-green-600"> business,</span>
				nu pe
				<span className="text-green-600"> probleme tehnice</span>
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
				name: "Basic",
				price: "100€",
				description: 'Dezvoltat 100% pe nevoile tale reale',
				cta: "Lansare rapidă",
				features: [
					"Actualizări lunare platformă",
					"Backup lunar automat",
					"Monitorizare uptime de bază",
					"Suport email standard",
					"Protecție bazică împotriva atacurilor",
					"Optimizare viteză minimă",
					"Corecturi bug-uri simple",
					"Raport lunar de status",
				],
				recommended: false,
			},
			{
				name: "Avansat",
				price: "200€",
				description: 'Dezvoltat 100% pe nevoile tale reale',
				cta: "Creștere stabilă",
				features: [
					"Actualizări săptămânale platformă",
					"Backup săptămânal automat",
					"Monitorizare uptime 24/7",
					"Suport telefonic și email prioritar",
					"Optimizare SEO de bază",
					"Audit securitate trimestrial",
					"Corecturi rapide și intervenții urgente",
					"Raport detaliat performanță",
				],
				recommended: false,
			},
			{
				name: "Aplicații Mobile",
				price: "200€",
				description: 'Dezvoltat 100% pe nevoile tale reale',
				cta: "Vânzări eficiente",
				features: [
					"Actualizări regulate aplicație",
					"Backup automat zilnic",
					"Monitorizare performanță și erori",
					"Suport tehnic dedicat",
					"Optimizare UX/UI continuă",
					"Audit securitate aplicație",
					"Corecturi rapide și patch-uri",
					"Raport lunar cu statistici",
				],
				recommended: false,
			},
			{
				name: (
					<>
						<span className="text-blue-500">Multi-Site</span>
					</>
				),
				price: "350€",
				description: 'Dezvoltat 100% pe nevoile tale reale',
				cta: "Fără limite",
				features: [
					"Backup zilnic pentru toate platformele",
					"Monitorizare 24/7 și alertare instant",
					"Optimizare avansată performantă",
					"Audit și raportare securitate lunară",
					"Suport premium 24/7 dedicat",
					"Implementare actualizări majore",
					"Corecții și îmbunătățiri personalizate",
					"Consultanță tehnică strategică",
				],
				recommended: false,
			},
		],
	};

	const faqData = {
		title: "Întrebări frecvente",
		subtitle:
			"Răspunsuri la cele mai comune întrebări despre serviciile de mentenanță.",
		faqs: [
			{
				question: "Ce include serviciul de mentenanță?",
				answer: "Monitorizare, actualizări, backup-uri regulate, optimizare viteză, suport tehnic și intervenții de securitate."
			},
			{
				question: "Cât costă mentenanța lunară?",
				answer: "Oferim pachete flexibile începând de la 49€/lună, în funcție de tipul site-ului/aplicației și nivelul de suport necesar."
			},
			{
				question: "Dacă am deja un site, pot apela la voi pentru mentenanță?",
				answer: "Absolut. Preluăm mentenanța și optimizarea chiar dacă site-ul nu a fost creat de noi."
			},
			{
				question: "Interveniți și în cazuri de urgență (site căzut, atacuri)?",
				answer: "Da. Oferim suport tehnic rapid pentru urgențe 24/7, în funcție de pachetul ales."
			},
			{
				question: "Ce tipuri de site-uri întrețineți?",
				answer: "Ne ocupăm de WordPress, Shopify, Laravel, React, site-uri custom, cât și aplicații web & mobile."
			},
			{
				question: "De ce am nevoie de mentenanță dacă site-ul funcționează?",
				answer: "Pentru a preveni probleme majore, a păstra site-ul rapid, sigur și actualizat constant – esențial pentru performanța digitală."
			},
		],
	};

	return (
		<div className="min-h-screen bg-white">
			<Header />
			<HeroSection
				{...heroData}
				// imageClassName="rounded-2xl mx-auto max-w-[80%] max-h-[500px] md:max-w-[90%] md:max-h-[600px]"
				rightContent={<WebsiteScanningAnimation />}
			/>
			<FeaturesSection {...featuresData} />
			<SolutionsSection plans={solutionsData} />
			<FaqSection faq={faqData.faqs} />
			<CtaBanner />
			<Footer />
		</div>
	);
}
