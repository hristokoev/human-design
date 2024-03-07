import { useTransform, MotionValue } from "framer-motion";

export default function useParallax(
  value: MotionValue<number>,
  distance: number,
  direction: "up" | "down" = "up"
) {
  return useTransform(
    value,
    [0, 1],
    direction === "up" ? [0, distance] : [0, -distance]
  );
}
