/*

	Footer Component
	
	TODO: Newsletter form functionality

*/

import Logo from "@/assets/svg/logo.svg";
import Occamy from "@/assets/svg/occamy_logo_white.svg";
import Subsctibe from "@/components/Subscribe";

export default function Footer() {

	return (

		<footer className="bg-petroleum-950">

			<div className="container">

				{/* Top */}

				<div className="py-16">
					<div className="flex flex-col lg:flex-row gap-y-8">

						{/* Left Side */}
						<div className="relative grow flex flex-col justify-between">

							<div className="inline-flex">
								<a href="/" className="py-4 flex items-center transition-all duration-300 ease-in-out">
									<img src={Logo.src} width="182" alt="Human Design" />
									<span className="sr-only">Human Design</span>
								</a>
							</div>

							<p className="text-sm">
								Pavla Hanuše 252/4,<br />
								Pražské Předměstí<br />
								500 02 Hradec Králové
							</p>

							<div className="mt-8">
								<div className="flex flex-col flex-wrap gap-y-2 font-medium">
									<span>
										IČ: 051 99 328&nbsp;&nbsp;&nbsp;DIČ: CZ 05199328
									</span>
									<span>
										C 37364 vedená u Krajského soudu v Hradci Králové
									</span>
								</div>
							</div>

						</div>

						<div className="space-y-8 md:w-3/5 lg:w-2/5">

							{/* Subscribe Form */}
							<Subsctibe />

							{/* Menu */}
							<div className="lg:px-4 mt-4 h-full">
								<ul className="flex flex-wrap gap-x-8 gap-y-4 font-medium">
									<li><a href="/" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Domů</a></li>
									<li><a href="/#sluzby" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Služby</a></li>
									<li><a href="/o-nas" className="hover:text-gold-400 transition-all duration-150 ease-in-out">O Nás</a></li>
									<li><a href="/blog/1" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Blog</a></li>
									<li><a href="/kontakt" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Kontakt</a></li>
								</ul>
							</div>

						</div>

					</div>

				</div>

				{/* Bottom */}
				<div className="pt-8 flex flex-col md:flex-row gap-y-4 border-t border-white text-sm">

					<div className="grow flex gap-4 flex-wrap">
						<a href="/gdpr" className="underline hover:no-underline">Zásady ochrany osobních údajů</a>
						<a href="#" className="underline hover:no-underline">Podmínky použití služby</a>
					</div>

					<div className="md:text-right">
						<span>© 2024 Human Design pro firmy. Všechna práva vyhrazena.</span>
					</div>

				</div>

				<div className="pt-4 pb-16 flex flex-col place-items-center gap-2 text-white text-xs">
					<img src={Occamy.src} alt="Occamy s.r.o." className="w-4 h-4 mr-2" />
					<span>Vytvořilo ©&nbsp;<a href="https://www.occamy.cz/" target="_blank">Occamy s.r.o.</a>
					</span>
				</div>

			</div>
		</footer>

	)
}