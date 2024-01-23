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

						{/* Title and animated SVG line */}
						<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-30%" }}>

							{/* Title */}
							<motion.h2 className="text-petroleum-900 text-8xl font-bold text-center" variants={item}>
								Co o nás říkají naši klienti?
							</motion.h2>

							{/* Animated SVG Line */}
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