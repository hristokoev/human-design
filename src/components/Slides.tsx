/*

	Slideshow component for story page

*/

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import type StoryProps from "@/interfaces/Story";

export default function Slides({ story }: { story: StoryProps }) {

	const [position, setPosition] = useState(0);
	const controls = useAnimationControls();
	const ref = useRef<HTMLDivElement>(null);

	// Set the moving direction
	const slideMove = (direction: "up" | "down") => {
		if (position === 0 && direction === "up" || position === story.slides.length && direction === "down") return;
		setTimeout(() => {
			if (direction === "up") setPosition(position - 1);
			if (direction === "down") setPosition(position + 1);
		}, 200);
	}

	// Trigger animation when direction changes
	useEffect(() => {
		const height = ref.current?.offsetHeight || 0;
		controls.start({
			y: -height * position,
			transition: {
				type: "spring",
				duration: 0.5,
				ease: "easeInOut",
				bounce: 0.15,
				bounceDamping: 100,
				bounceStiffness: 500,
			}
		})
	}, [position])

	// If there are no slides, return null
	if (!story.slides) return null;

	return (

		<>

			{/* Invisible Controls */}
			<div className="absolute top-0 w-full h-1/3 z-40" onClick={() => slideMove("up")}></div>
			<div className="absolute bottom-0 w-full h-2/3 z-40" onClick={() => slideMove("down")}></div>

			<motion.div animate={controls} className="h-[75dvh]" ref={ref}>

				{/* First slide */}
				<div className="px-8 md:px-24 py-24 h-[75dvh]">
					<div className="flex flex-col lg:flex-row md:items-center gap-x-16 gap-y-8 h-full overflow-hidden">
						<div className="flex flex-col justify-center gap-4">
							<span className="w-full text-6xl md:text-8xl font-bold">
								{story.header}
							</span>
							<span className="text-lg md:text-2xl font-light">
								{story.subheader}
							</span>
						</div>
						<div className="flex-1 w-full z-10">
							<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + story.photo.path} alt={story.header} className="w-full" />
						</div>
					</div>
				</div>

				{/* Rest of the slides */}
				{story.slides.map((slide, index) => (
					<div key={index}>
						<div className="h-[75dvh] py-24 relative flex flex-col justify-center items-center gap-y-8">

							{/* Date */}
							{slide.date && <span className="btn border-petroleum-900">{slide.date}</span>}

							{/* Vertical Lines */}
							<svg width="36" height="125" viewBox="0 0 36 125" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 14.1211V102.379" stroke="#878787" strokeWidth="6" strokeLinecap="round" strokeDasharray="12 12" />
							</svg>

							{/* Text */}
							<div className="px-16 md:px-32 text-center sm:text-lg md:text-2xl" dangerouslySetInnerHTML={{ __html: slide.text }} />

							{/* Vertical Lines */}
							<svg width="36" height="125" viewBox="0 0 36 125" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 14.1211V102.379" stroke="#878787" strokeWidth="6" strokeLinecap="round" strokeDasharray="12 12" />
							</svg>

						</div>
					</div>
				))}

			</motion.div>

		</>

	)
}