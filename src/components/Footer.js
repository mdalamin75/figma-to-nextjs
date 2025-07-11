import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Twitter,
	Shield,
	CreditCard,
	CheckSquare,
	ShieldCheck,
	Lock,
	X,
	Instagram,
	Facebook,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-gradient-to-br from-blue-50 via-white to-white border-t border-gray-100 pt-10 pb-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-12 gap-8 pb-6">
					<div className="md:col-span-4 flex flex-col gap-2">
						<Image src="/img/mainLogo.png" alt="Logo" width={80} height={50} />
						<p className="text-sm text-gray-600">
							Byte este agenția ta digitală dedicată să transforme ideile în
							soluții tehnologice inovatoare. Oferim servicii complete de creare
							website-uri, aplicații mobile, video promo și integrare AI pentru
							afaceri de toate dimensiunile.
						</p>
					</div>
					<div className="md:col-span-4">
						<h4 className="font-semibold text-gray-800 mb-2">Companie</h4>
						<ul className="space-y-1 text-sm text-gray-600">
							<li>
								<a
									href="https://api.whatsapp.com/send?phone=40743368360"
									target="_blank "
									className="hover:text-blue-600 transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div className="md:col-span-4">
						<h4 className="font-semibold text-gray-800 mb-2">Legal</h4>
						<ul className="space-y-1 text-sm text-gray-600">
							<li>
								<a
									href="/terms-and-conditions"
									className="hover:text-blue-600 transition-colors">
									Termeni și Condiții
								</a>
							</li>
							<li>
								<a
									href="/privacy-policy"
									className="hover:text-blue-600 transition-colors">
									Politica de Confidențialitate
								</a>
							</li>
							<li>
								<a
									href="/cookies-policy"
									className="hover:text-blue-600 transition-colors">
									Politica de Cookie-uri
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 pt-4 gap-2">
					<div className="flex items-center gap-2 text-gray-400 text-sm">
						<span>© 2025 @Byte. Toate drepturile rezervate.</span>
						<a
							href="https://x.com/tagbyte_dev

"
							className="hover:text-blue-600">
							<X className="w-5 h-5 fill-gray-500" />
						</a>
						<a
							href="https://www.tiktok.com/@tagbyte_dev
"
							className="hover:text-blue-600">
							<Image
								src="/img/tiktokGray.png"
								alt="tiktok"
								width={15}
								height={8}
							/>
						</a>
						<a
							href="https://www.instagram.com/tagbyte_dev/
"
							className="hover:text-blue-600">
							<Instagram className="w-4 h-4" />
						</a>
						<a
							href="https://www.facebook.com/tagbyte_dev
"
							className="hover:text-blue-600">
							<Facebook className="w-4 h-4" />
						</a>
					</div>
					<div className="flex items-center gap-6 text-xs text-gray-500 mt-2 sm:mt-0">
						<div className="flex items-center gap-1">
							<ShieldCheck className="w-4 h-4 text-purple-700" />
							<span>De încredere</span>
						</div>
						<div className="flex items-center gap-1">
							<Lock className="w-4 h-4 text-purple-700" />
							<span>Securizat</span>
						</div>
						<div className="flex items-center gap-1">
							<CreditCard className="w-4 h-4 text-purple-700" />
							<span>Plăți sigure</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
