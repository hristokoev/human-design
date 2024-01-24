/*

	Mobile Menu Component

*/

import { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react'

export default function MobileMenu() {

	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

	const trigger = useRef<HTMLButtonElement>(null)
	const mobileNav = useRef<HTMLDivElement>(null)

	// Close the mobile menu on click outside
	useEffect(() => {
		const clickHandler = ({ target }: { target: EventTarget | null }): void => {
			if (!mobileNav.current || !trigger.current) return;
			if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
			setMobileNavOpen(false)
		};
		document.addEventListener('click', clickHandler)
		return () => document.removeEventListener('click', clickHandler)
	})

	return (

		<nav className="w-full md:hidden">

			{/* Hamburger */}
			<div className="absolute top-12 right-12 flex md:hidden">
				<button
					ref={trigger}
					className={`${mobileNavOpen && 'active'}`}
					aria-controls="mobile-nav"
					aria-expanded={mobileNavOpen}
					onClick={() => setMobileNavOpen(!mobileNavOpen)}
				>
					<span className="sr-only">Menu</span>
					<svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<rect y="4" width="24" height="2" />
						<rect y="11" width="24" height="2" />
						<rect y="18" width="24" height="2" />
					</svg>
				</button>
			</div>

			{/* Menu */}
			<div ref={mobileNav} className="border-y border-y-petroleum-900/50">
				<Transition
					show={mobileNavOpen}
					as="nav"
					id="mobile-nav"
					enter="transition-all duration-300"
					enterFrom="opacity-0 -translate-y-6"
					enterTo="opacity-100 translate-y-0"
					className="py-8 text-white md:hidden"
				>
					<ul className="flex flex-col gap-y-4 text-xl text-center">
						<li><a href="/" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Domů</a></li>
						<li><a href="/#sluzby" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Služby</a></li>
						<li><a href="/o-nas" className="hover:text-gold-400 transition-all duration-150 ease-in-out">O Nás</a></li>
						<li><a href="/blog/1" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Blog</a></li>
						<li><a href="/kontakt" className="hover:text-gold-400 transition-all duration-150 ease-in-out">Kontakt</a></li>
					</ul>
				</Transition>
			</div>

		</nav>
	)
}