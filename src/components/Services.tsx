/*

	Services section component

*/

import { motion } from "framer-motion";

import Card02 from "@/components/Card02";
import ImagePerson from "@/assets/svg/card-person.svg";
import ImagePersons from "@/assets/svg/card-persons.svg";
import ImageTeams from "@/assets/svg/card-teams.svg";
import ImageAlone from "@/assets/svg/card-alone.svg";
import ImageLeader from "@/assets/svg/card-leader.svg";
import ImageCompany from "@/assets/svg/card-company.svg";

export default function Services() {

	// Animation variants (hidden and show) for the Motion container element
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

	// Animation variants (hidden and show) for the Motion element
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

	// Sample data for 'Konzultační služby' section
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

	// Sample data for 'Programy' section
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

	// Sample data for 'Přednášky' section
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

						{/* Title */}
						<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-30%" }}>
							<motion.h2 className="text-petroleum-900 text-8xl font-bold text-center" variants={item}>
								Naše služby
							</motion.h2>
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
						<motion.div className="mt-12 grid lg:grid-rows-2 lg:grid-flow-col gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-30%" }}>
							{cardsConsultation.map((card, index) => (
								<Card02 key={index} {...card} index={index} section={1} />
							))}
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
						<motion.div className="mt-12 grid lg:grid-flow-col gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-30%" }}>
							{cardsPrograms.map((card, index) => (
								<Card02 key={index} {...card} index={index} section={2} />
							))}
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
						<motion.div className="mt-12 grid grid-flow-col gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-30%" }}>
							{cardsLectures.map((card, index) => (
								<Card02 key={index} {...card} index={index} section={3} />
							))}
						</motion.div>

					</div>
				</div>
			</div>
		</section>

	)
}