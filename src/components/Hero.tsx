/*

	Hero component for the home page.

*/

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import HeroText from "@/assets/svg/hero-text.svg";
import useParallax from "@/lib/useParallax";
import HumanAnimation from "@/components/HumanAnimation";

export default function Hero() {

	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"]
	});
	const y = useParallax(scrollYProgress, 300);

	return (

		<section className="relative bg-petroleum-950 overflow-hidden">
			<motion.div className="relative pt-24 pb-48 container min-h-[44rem]" style={{ y }}>

				<div className="relative flex flex-col lg:flex-row gap-y-8">

					{/* Left side */}
					<div className="lg:w-1/2 lg:pt-12 flex flex-col gap-y-12 z-10">

						{/* Main text in the form of SVG */}
						<div className="flex">
							<img src={HeroText.src} alt="Human Design pro firmy a podnikání" />
						</div>

						{/* Description - Desktop */}
						<p className="hidden lg:block text-xl">
							Odkryjte potenciál vašeho podnikání pomocí <span className="font-bold">Human Designu</span> - revolučního nástroje pro zlepšení komunikace, týmové dynamiky a odhalení individuálního potenciálu vašich zaměstnanců.
						</p>

						{/* CTA Buttons - Desktop */}
						<div className="hidden lg:flex items-center gap-6">
							<a href="/kontakt" className="btn bg-white border-transparent hover:bg-gold-400 text-petroleum-950">Objednejte si konzultaci</a>
							{/* Disable second button */}
							{/* <a href="#" className="btn border-white hover:bg-white/10">Zájem o info</a> */}
						</div>

					</div>

					{/* Human */}
					<div className="lg:w-1/2 relative flex justify-center z-[1]">
						<HumanAnimation />
					</div>

					{/* Description - Mobile */}
					<p className="sm:pt-32 lg:hidden text-xl">
						Odkryjte potenciál vašeho podnikání pomocí <span className="font-bold">Human Designu</span> - revolučního nástroje pro zlepšení komunikace, týmové dynamiky a odhalení individuálního potenciálu vašich zaměstnanců.
					</p>

					{/* CTA Buttons - Mobile */}
					<div className="lg:hidden flex flex-col sm:flex-row sm:items-center gap-4">
						<a href="/kontakt" className="btn bg-white border-transparent hover:bg-gold-400 text-petroleum-950">Objednejte si konzultaci</a>
						{/* Disable second button */}
						{/* <a href="#" className="btn border-white hover:bg-white/10">Zájem o info</a> */}
					</div>

				</div>

				{/* Chevron */}
				<a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-20 lg:-translate-y-10" href="#jak-pomuze">
					<svg className="w-12 h-12 rounded-full hover:bg-white/10" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="2.00037" y="1.29822" width="38.7562" height="38.7562" rx="19.3781" stroke="white" strokeWidth="1.5" />
						<rect x="12.8262" y="19.062" width="1.69366" height="12.1943" transform="rotate(-45 12.8262 19.062)" fill="white" />
						<rect x="28.8926" y="17.8901" width="1.69366" height="12.1943" transform="rotate(45 28.8926 17.8901)" fill="white" />
					</svg>
				</a>

			</motion.div>

			{/*  */}
			<svg viewBox="0 0 900 124" xmlns="http://www.w3.org/2000/svg" version="1.1" className="translate-y-8" ref={ref}>
				<path fill="white" d="m0.9 38.1l45.6-9.1c45.6-9.1 136.8-27.1 228-28.9 91.1-1.7 182.3 13 273.5 26.5 91.2 13.5 182.4 25.9 273.5 28.7 91.2 2.9 182.4-3.8 228-7.2l45.6-3.3v79.2h-45.6c-45.6 0-136.8 0-228 0q-136.7 0-273.5 0-136.8 0-273.5 0c-91.2 0-182.4 0-228 0h-45.6z" />
			</svg>

		</section>

	)
}