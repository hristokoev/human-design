/*

	Header Component
	
	The 'Kurzy' button is currently disabled. Uncomment it to enable it.
	
	TODO: Mobile Menu

*/

import Logo from "@/assets/svg/hd-logo.svg";

export default function Header() {

	return (

		<header className="bg-petroleum-950">
			<div className="container flex flex-col md:flex-row items-center">

				{/* Logo */}
				<div className="py-4 flex items-center">
					<a href="/" className="py-4 flex items-center">
						<img src={Logo.src} width="182" alt="Human Design" />
						<span className="sr-only">Human Design</span>
					</a>
				</div>

				{/* Menu */}
				<div className="md:ml-auto">
					<ul className="flex flex-col md:flex-row gap-8 font-medium text-center">
						<li><a href="/" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Domů</a></li>
						<li><a href="/#sluzby" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Služby</a></li>
						<li><a href="/o-nas" className="hover:text-gold-400 transition-all duration-150 ease-in-out">O Nás</a></li>
						<li><a href="/blog/1" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Blog</a></li>
						<li><a href="/kontakt" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Kontakt</a></li>
						{/* <li><a href="#" className="bg-gold-400 text-black hover:bg-gold-500 rounded-3xl px-5 py-2 transition-all duration-150 ease-in-out">Kurzy</a></li> */}
					</ul>
				</div>

			</div>
		</header>

	)
}