import BgBrain from "../../../assets/images/bg-brain.png";
import HumanAnimation from "../../HumanAnimation";

export default function Hero() {

	return (

		<section className="bg-petroleum-950">

			<div className="relative pt-32 pb-48 container min-h-[56rem] overflow-hidden">

				<div className="relative flex flex-col lg:flex-row gap-y-8">

					{/* Left side */}
					<div className="lg:w-1/2 lg:pt-12 flex flex-col gap-y-12 order-1 lg:order-0 z-10">

						<div className="flex flex-col font-cuprum">
							<h1 className="text-7xl sm:text-[6.45rem] font-black lg:text-nowrap sm:leading-[6rem] lg:leading-[4rem]">
								HUMAN DESIGN
							</h1>
							<h2 className="text-5xl sm:text-7xl text-gradient font-bold">
								pro firmy a podnikání
							</h2>
						</div>

						<p className="text-xl">
							Odkryjte potenciál vašeho podnikání pomocí <span className="font-bold">Human Designu</span> - revolučního nástroje pro zlepšení komunikace, týmové dynamiky a odhalení individuálního potenciálu vašich zaměstnanců.
						</p>

						<div className="flex flex-col sm:flex-row items-center gap-6">
							<a href="#" className="btn bg-white border-transparent hover:bg-gold-400 text-petroleum-950">Vytvořte si Mapu těla</a>
							<a href="#" className="btn border-white hover:bg-white/10">Zájem o info</a>
						</div>

					</div>

					{/* Human */}
					<div className="lg:w-1/2 relative flex justify-center order-0 lg:order-1 z-[1]">
						<HumanAnimation />
					</div>

				</div>

				{/* Background */}
				<div className="absolute top-1/3 right-1/2 translate-x-1/2 -translate-y-1/3 lg:right-1/3 lg:translate-x-2/3 pointer-events-none">
					<img src={BgBrain.src} alt="" className="max-w-[48rem] max-h-[42rem]" aria-hidden={true} />
				</div>

				{/* Chevron */}
				<a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-20 lg:-translate-y-32" href="#infographic-01">
					<svg className="w-12 h-12 rounded-full hover:bg-white/10" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="2.00037" y="1.29822" width="38.7562" height="38.7562" rx="19.3781" stroke="white" stroke-width="1.5" />
						<rect x="12.8262" y="19.062" width="1.69366" height="12.1943" transform="rotate(-45 12.8262 19.062)" fill="white" />
						<rect x="28.8926" y="17.8901" width="1.69366" height="12.1943" transform="rotate(45 28.8926 17.8901)" fill="white" />
					</svg>
				</a>

			</div>

		</section>

	)

}