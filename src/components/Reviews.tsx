/*

	Reviews Component
	
	TODO: Connect with CMS and use slider instead of grid

*/

import { motion } from "framer-motion";
import ReviewItem from "./ReviewItem";

export default function Reviews() {

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
		hidden: { opacity: 0, x: -100 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				duration: 0.8,
				ease: "easeInOut",
				bounce: 0.4,
			}
		},
	}

	// Sample reviews data
	const reviews = [
		{
			rating: 5,
			text: "V rámci koučování i supervize na Blance velmi oceňuji jeji způsob práce. Dává otázky, které mě umožní jít hlouběji do těla a do prožitku – zkrátka do hlubší úrovně, než je ta rozumová. Na rozumové úrovni je změna povrchní. Pomocí toho, jak Blanka vede rozhovor nalézám funkčnější řešení v pracovní i osobní oblasti, které vede k trvalejším změnám. Také oceňuji její znalosti a vhledy z Human Designu, které pojmenovávají mou vnitřní dynamiku jiným způsobem, což mi pomůže vnímat situaci ještě z dalšího úhlu pohledu.",
			name: "Helena Bernardová",
			title: "Interní koučka | Pivovar Bernard"
		},
		{
			rating: 5,
			text: "Blanka bravurně, jednoduše a pochopitelně vysvětluje složitý systém Human Designu a probere s vámi právě vaše osobní nastavení a to jedinečným a empatickým způsobem. Naším tématem bylo podnikání a jak svůj design využít právě v podnikatelské praxi, tak abych se cítila dobře, sebejistě a v souladu se sebou samou. Osobní výklad obohacuje o množství praktických příkladů a díky její dlouholeté praxi z koučinku, mentoringu i vlastního podnikání, jsem tak získala mnohem více a s nevídaným přesahem. Blanko děkuji a těším se na další spolupráci.",
			name: "Dara Blaha",
			title: "#marketingwomen"
		},
		{
			rating: 5,
			text: "Moc děkuji za tvé vedení k úvodu do Human designudesingu. Každé setkání bylo pro mne nabito spoustou zajímavých informací nejen o HD, ale i o mne samotné. Díky tomu jsem dostala spoustu podnětů k zamyšlení, a prožila mnoho AHA momentů. Ani neumím vyjádřit, za co cítímcítim ten největší vděk. Tobě osobně patří velký dík za autenticitu a citlivé vedení všech našich setkání. Vlastně vůbec nejvíc si vážím hloubky a citlivosti všech našich setkánísetkáni, která na mě měla až terapeutický dopad.",
			name: "Jana Rydlová",
			title: "Projektová manažerka | Škoda Auto a.s"
		},
	];

	return (

		<section className="text-petroleum-900 overflow-hidden" id="sluzby">

			<div className="container">
				<div className="py-32 mx-auto max-w-7xl">
					<div className="flex flex-col">

						{/* Title */}
						<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-30%" }}>
							<motion.h2 className="text-petroleum-900 text-8xl font-bold text-center" variants={item}>
								Co o nás říkají naši klienti?
							</motion.h2>
						</motion.div>

						{/* Reviews */}
						<motion.div className="mt-36 grid lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-30%" }}>
							{reviews.map((review, index) => (
								<ReviewItem key={index} {...review} />
							))}
						</motion.div>

					</div>
				</div>
			</div>
		</section>

	)
}