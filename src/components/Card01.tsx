/* 

	A simple card with image and text.
	It's used on Index page in the section "Jak vám pomůže Human Design?".
	Framer Motion is used for animations.

*/

import { motion } from "framer-motion";

interface Card01Props {
	image: string;
	text: string;
}

export default function Card01({ image, text }: Card01Props) {

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

	return (

		<motion.div className="card-white" variants={item}>

			{/* Image */}
			<div className="p-4 xl:p-8 grow flex items-center max-w-72 mx-auto">
				<img src={image} alt="Image" aria-hidden={true} />
			</div>

			{/* Text */}
			<p className="font-medium">{text}</p>

		</motion.div>

	)
}