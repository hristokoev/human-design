/*

	Review Card Component
	
	TODO: Rating in float (1.5, 2.5, etc.), error handling

*/

import { motion } from "framer-motion";

interface ReviewItemsProps {
	rating: number;
	text: string;
	name: string;
	title: string;
}

export default function ReviewItem({ rating, text, name, title }: ReviewItemsProps) {

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

		<motion.div className="flex flex-col gap-y-8 card-review" variants={item}>

			{/* Render stars based on rating (int 1-5) */}
			<div className="flex">
				{[...Array(rating)].map((_, i) =>
					<span key={i}>
						<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#0b2328" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
					</span>
				)}
			</div>

			{/* Text */}
			<div className="grow">
				<p className="text-sm">
					{text}
				</p>
			</div>

			{/* Reviewer */}
			<div className="flex flex-col">
				<span className="font-bold">{name}</span>
				<span>{title}</span>
			</div>
		</motion.div>

	)
}