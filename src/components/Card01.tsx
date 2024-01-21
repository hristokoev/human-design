/* 

This component is a simple card with an image and text.
It's used on Index page in the section "Jak vám pomůže Human Design?".

*/

import { motion } from "framer-motion";

export interface Card01Props {
	image: string;
	text: string;
}

export default function Card01({ image, text }: Card01Props) {

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

		<motion.div
			className="card-white"
			variants={item}
		>

			{/* Image */}
			<div className="p-4 xl:p-8 grow flex items-center max-w-72 mx-auto">
				<img src={image} alt="Image" aria-hidden={true} />
			</div>

			{/* Text */}
			<div>
				<p className="font-medium">{text}</p>
			</div>

		</motion.div>

	)

}