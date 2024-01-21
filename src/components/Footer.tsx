/*

TODO: 

*/

import Logo from "../assets/svg/logo.svg";

export default function Footer() {

	return (

		<footer className="bg-petroleum-950">

			<div className="container">

				{/* Top */}

				<div className="py-16">

					<div className="flex flex-col lg:flex-row gap-y-8" >

						<div className="relative grow flex flex-col justify-between">

							<div className="inline-flex">
								<a href="/" className="py-4 flex items-center transition-all duration-300 ease-in-out">
									<img src={Logo.src} width="182" alt="Human Design" />
									<span className="sr-only">Human Design</span>
								</a>
							</div>

							<p className="text-sm">
								Pavle Hanuše 252/4,<br />
								Pražské Předměstí<br />
								500 02 Hradec Králové
							</p>

							<ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4 font-medium">

								<li><a href="/" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Domů</a></li>
								<li><a href="/#sluzby" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Služby</a></li>
								<li><a href="/o-nas" className="hover:text-gold-400 transition-all duration-150 ease-in-out">O Nás</a></li>
								<li><a href="/blog/1" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Blog</a></li>
								<li><a href="/kontakt" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Kontakt</a></li>

							</ul>

						</div>

						<div className="flex flex-col gap-y-4">
							<div>
								<p className="font-bold">Přihlašte se k našemu newsletteru ať vám nic neunikne!</p>
								<p>Nezahltíme vaši schránku, posíláme jen občasně</p>
							</div>
							<form className="flex flex-col sm:flex-row gap-4">
								<input type="email" placeholder="Zadejte váš email!" className="grow px-4 py-2 md:min-w-96 bg-transparent border border-white" />
								<button className="border border-white hover:bg-white hover:text-petroleum-900 px-4 py-2 transition-all duration-150 ease-in-out">Odebírat</button>
							</form>
							<small>Kliknutím na “Odebírat” souhlasíte s našimi <a href="#" className="underline hover:no-underline">Zásady ochrany osobních údajů</a></small>
						</div>

					</div>

				</div>

				{/* Bottom */}
				<div className="pt-8 pb-16 flex flex-col md:flex-row gap-y-4 border-t border-white text-sm">

					<div className="grow flex gap-4 flex-wrap">

						<a href="#" className="underline hover:no-underline">Zásady ochrany osobních údajů</a>
						<a href="#" className="underline hover:no-underline">Podmínky použití služby</a>
						{/* <a href="#" className="underline hover:no-underline">Nastavení Cookies</a> */}

					</div>

					<div className="md:text-right">
						<span>© 2024 Human Design pro firmy. Všechna práva vyhrazena.</span>
					</div>

				</div>

			</div>

		</footer>

	)

}