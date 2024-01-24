/*

	A simple counter provided by @driaug on GitHub

	Find the original code here:
	https://github.com/driaug/animated-counter/blob/master/src/components/Counter.tsx

*/

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ value, direction = "up", }: { value: number; direction?: "up" | "down" }) {

	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(direction === "down" ? value : 0);
	const springValue = useSpring(motionValue, { damping: 100, stiffness: 100, duration: 0.8,  });
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	useEffect(() => {
		if (isInView) {
			motionValue.set(direction === "down" ? 0 : value);
		}
	}, [motionValue, isInView]);

	useEffect(() =>
		springValue.on("change", (latest) => {
			if (ref.current) {
				ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0));
			}
		}),
		[springValue]
	)

	return <span ref={ref} />

}