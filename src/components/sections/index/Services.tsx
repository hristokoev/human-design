/*

TODO: 

*/

import { motion } from "framer-motion";

import Card02 from "../../Card02";
import ImagePerson from "../../../assets/images/card-person.png";
import ImagePersons from "../../../assets/images/card-persons.png";
import ImageTeams from "../../../assets/images/card-teams.png";
import ImageAlone from "../../../assets/images/card-alone.png";
import ImageLeader from "../../../assets/images/card-leader.png";
import ImageCompany from "../../../assets/images/card-company.png";

export default function Services() {

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.3,
			}
		}
	}

	const item = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				type: "spring",
				duration: 0.8,
				ease: "easeInOut",
				bounce: 0.4,
			}
		},
	}

	const cardsConsultation = [
		{
			image: ImagePerson.src,
			title: "Konzultace pro jednotlivce",
			text: "<p>Objevte svůj <b>unikátní potenciál</b> a optimalizujte svou pracovní sféru s námi! Vhodné pro OSVČ, manažery nebo vlastníky firem.</p>",
			button: "Objednat",
			index: 1
		},
		{
			image: ImagePersons.src,
			title: "Konzultace pro dvojice",
			text: "<p>Zvýšte úspěch a harmonii ve vaší dvojici s našimi odbornými konzultacemi pro majitele a spolupracovníky, které posílí váš vztah a podpoří efektivní spolupráci.</p>",
			button: "Objednat",
			index: 2
		},
		{
			image: ImageTeams.src,
			title: "Konzultace a workshopy pro týmy",
			text: "<p>Poskytujeme dynamické konzultace a interaktivní workshopy, které posilují týmovou spolupráci a vedou k efektivnějším výsledkům.</p>",
			button: "Objednat",
			index: 3
		}
	];

	const cardsPrograms = [
		{
			image: ImageAlone.src,
			title: "Podnikám v souladu se sebou",
			text: "<p>Objevte svůj skrytý potenciál a veďte svůj podnik v souladu se svým jedinečným posláním díky našemu programu, který vám pomáhá využít vaše dary a talenty.</p>",
			button: "Objednat",
			index: 1
		},
		{
			image: ImageLeader.src,
			title: "Inspirativní vedení",
			text: "<p>Posuněte své vůdčí schopnosti na novou úroveň s naším inovativním programem, který vám pomůže vést ostatní v souladu se svým vlastním autentickým já.</p>",
			button: "Objednat",
			index: 2
		},
	];

	const cardsLectures = [
		{
			image: ImageCompany.src,
			title: "Přednášky ve firmách",
			text: "Zvýšte produktivitu a motivaci svého týmu s našimi interaktivními a inspirativními přednáškami přímo ve vaší firmě!",
			cta: "Kontaktujte nás!",
			button: "Objednat",
			index: 1
		}
	];

	return (

		<section className="text-petroleum-900 overflow-hidden" id="sluzby">

			<div className="container">

				<div className="py-32 mx-auto max-w-7xl">

					<div className="flex flex-col">

						<motion.div
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-30%" }}
						>

							<motion.h2
								className="text-petroleum-900 text-8xl font-bold text-center"
								variants={item}
							>
								Naše služby
							</motion.h2>
							<motion.svg variants={item} width="555" height="19" viewBox="0 0 555 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
								<path d="M444.942 6.04206C419.348 4.17122 373.68 3.28114 343.311 2.13576C312.942 0.990381 236.127 0.2969 172.611 0.447541C109.096 0.598181 45.3268 1.12556 31.0129 1.7884C9.91981 2.59594 4.38532 1.82547 2.10734 4.64856C0.0841797 6.9057 0.0717594 8.79765 2.06387 11.2704C4.55562 14.1248 8.56965 14.5295 30.9142 14.2978C45.2244 14.2025 75.607 13.2668 98.4586 12.2816C121.31 11.2964 199.141 10.2937 271.693 10.2024C360.062 10.0257 419.555 10.7947 452.431 12.5241C479.283 14.0248 513.411 16.1409 527.962 17.5608C547.281 19.3905 554.31 19.4366 554.32 17.9231C554.077 16.597 541.037 14.4302 522.724 12.418C505.414 10.6015 470.537 7.72371 444.942 6.04206Z" fill="url(#paint0_linear_345_2962)" />
								<defs>
									<linearGradient id="paint0_linear_345_2962" x1="558.965" y1="-17.0979" x2="532.369" y2="138.819" gradientUnits="userSpaceOnUse">
										<stop stopColor="#56592C" />
										<stop offset="0.191399" stopColor="#E6C453" />
										<stop offset="0.73931" stopColor="#F0CD5B" />
										<stop offset="1" stopColor="#D1A617" />
									</linearGradient>
								</defs>
							</motion.svg>
						</motion.div>

						{/* 1 */}
						<div className="mt-36">
							<h3 className="mb-8 text-4xl font-bold">
								Konzultační služby
							</h3>
							<p className="text-sm">
								Objevte nové perspektivy a řešení s našimi odbornými konzultačními službami, které vám pomohou dosáhnout úspěchu a optimalizovat váš potenciál.
							</p>
						</div>
						<motion.div
							className="mt-12 grid lg:grid-rows-2 lg:grid-flow-col gap-8"
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-30%" }}
						>
							{
								cardsConsultation.map((card, index) => (
									<Card02 key={index} {...card} index={index} section={1} />
								))
							}
						</motion.div>

						{/* 2 */}
						<div className="mt-36">
							<h3 className="mb-8 text-4xl font-bold">
								Programy
							</h3>
							<p className="text-sm">
								Naše programy pro firmy a podnikatele vám pomohou podnikat v souladu se sebou a rozvíjet autentické vedení pro úspěch vašeho podnikání.
							</p>
						</div>
						<motion.div
							className="mt-12 grid lg:grid-flow-col gap-8"
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-30%" }}
						>
							{
								cardsPrograms.map((card, index) => (
									<Card02 key={index} {...card} index={index} section={2} />
								))
							}
						</motion.div>

						{/* 3 */}
						<div className="mt-36">
							<h3 className="mb-8 text-4xl font-bold">
								Přednášky
							</h3>
							<p className="text-sm">
								Zvýšte úspěch vašeho podnikání s našimi inspirativními přednáškami, které poskytují klíčové strategie a know-how pro dosažení optimálního růstu a úspěchu vaší firmy.
							</p>
						</div>
						<motion.div
							className="mt-12 grid grid-flow-col gap-8"
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-30%" }}
						>
							{
								cardsLectures.map((card, index) => (
									<Card02 key={index} {...card} index={index} section={3} />
								))
							}
						</motion.div>

					</div>

				</div>

			</div>

		</section>

	)

}