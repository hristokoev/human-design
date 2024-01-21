/*

TODO: 

*/

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

import type StoryProps from "../interfaces/Story";


interface SlidesProps {
	story: StoryProps;
	isOpen: boolean;
}

export default function Slides({ story, isOpen }: SlidesProps) {

	const [position, setPosition] = useState(0);

	const controls = useAnimationControls();

	const slideMove = (direction: "up" | "down") => {
		if (position === 0 && direction === "up" || position === story.slides.length && direction === "down") return;
		setTimeout(() => {
			if (direction === "up") setPosition(position - 1);
			if (direction === "down") setPosition(position + 1);
		}, 200);
	}

	useEffect(() => {
		controls.start({
			y: -800 * position,
			transition: {
				type: "spring",
				duration: 0.8,
				ease: "easeInOut",
				bounce: 0.3,
				bounceDamping: 1,
				bounceStiffness: 100,
			}
		})
	}, [position])

	if (!story.slides) return null;

	return (

		<>

			{/* Invisible Controls */}
			<div className="absolute top-0 w-full h-1/3 z-40" onClick={() => slideMove("up")}></div>
			<div className="absolute bottom-0 w-full h-2/3 z-40" onClick={() => slideMove("down")}></div>

			<motion.div
				animate={controls}
				className="h-[50rem]"
			>

				<div className="px-8 md:px-24 py-24 h-[50rem]">
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
							<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + story.photo.path} alt="" className="w-full" />
						</div>
					</div>
				</div>

				{story.slides.map((slide, index) => (
					<div key={index}>
						<div className="py-32 h-[50rem] relative flex flex-col justify-center items-center gap-8">

							{slide.date && (
								<span className="btn border-petroleum-900">
									{slide.date}
								</span>
							)}

							<svg width="36" height="125" viewBox="0 0 36 125" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 14.1211V102.379" stroke="#878787" strokeWidth="6" strokeLinecap="round" strokeDasharray="12 12" />
							</svg>
							<div className="px-16 md:px-32 text-center sm:text-lg md:text-2xl" dangerouslySetInnerHTML={{ __html: slide.text }} />
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