/*

	Human Animation Component with the help of SVG and Framer Motion.

	How it works:
	The yellow 'lines' are actually shapes. They are masked by hidden paths (with stroke attributes) and those are animated with Framer Motion.
	With the help of Framer Motion, the hidden SVG paths are animated and the yellow lines are revealed.

	Animateion sequence:
	1. For the sequence, an array of 15 unique integers is created. 
	2. The 15 unique integers represent 1s, 2s, 3s... 15s of delay.
	3. The array is then shuffled and mapped to the SVG paths.
	4. The paths are animated in the order of the randomized array.

	TODO: Make the animation better and more random. The center shapes should glow when the lines 'enter' into them. Maybe add some more paths.

*/

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import BgBrain from "@/assets/images/bg-brain.png";
import Human from "@/assets/svg/human.svg";

export default function HumanAnimation() {
  const [uniqueIntegers, setUniqueIntegers] = useState<number[]>([]);

  const menuVariants = {
    open: {
      pathLength: [0, 1, 1],
      pathOffset: [0, 0, 1],
    },
    closed: {
      pathLength: 0,
    },
  };

  // Function to shuffle an array
  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  };

  useEffect(() => {
    // Create an array of integers from 0 to 17
    const integers = Array.from(Array(15).keys());

    // Shuffle the array
    shuffleArray(integers);

    // Set the state
    setUniqueIntegers(integers);
  }, []);

  // Array of active paths (d attribute for SVG yellow lines), better and cleaner for mapping
  const activePaths = [
    "m854 217v83",
    "m743 428v179",
    "m700 679c0 0-148 7.9-292 257-144 249.1-138.7 301.3-154 430",
    "m908 679c0 0 197.6 65.2 299 284 101.4 218.8 129.2 269.7 138.1 423.8",
    "m692 739c0 0-239.5 140.9-326 401-86.5 260.1 193.4 305.6 355.7 330.8",
    "m921 1064c0 0 99.5 69.5 129.5 116.8",
    "m898 1552c0 0 153.8-16.3 259-61",
    "m369 1528c0 0 31 207.7 322 248",
    "m883 1832c0 0 291.9 19.2 393-256",
  ];

  return (
    <div className="lg:absolute lg:top-0 lg:right-0 sm:h-[28rem] xl:h-[34rem]">
      <div className="relative w-[544px] h-[544px]">
        {/* Human - Left */}
        <img
          src={Human.src}
          alt="Human"
          className="absolute top-1/2 -left-1/2 translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3"
        />

        {/* Human - Main */}
        <motion.svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1507 1979"
          width="1507"
          height="1979"
          className="absolute w-full h-full z-20"
        >
          <path
            fill="#3B3B3D"
            d="m481.3 704.3c65.3-9.2 139-31.6 174.1-78.9 16.8-22.8 28.9-71.2 24.4-81.6-5.7-14.7-12.1-18.1-41.1-12.7-15.3 2.5-45.8-3-46.3-29.1 1.5-21.2 3.4-77.7-2.6-86.6-5.9-8.9-25.3-11.3-23.9-21.8 1.5-10.4 31.9-68.8 32.1-80.6 0.3-11.1-10.5-25.3-14.2-29.8-0.7-0.9-1.3-2.2-1.3-2.2 0 0-0.4-1.6-0.4-2.7 0.4-10.5 3.9-69.3 39.7-123.3 47.3-71.2 126.1-72.7 163-72.7 31.2 0 114.5-5.1 179 72.7 87.7 105.7 22 227.7-18 297-40.6 70.5-34.6 135-5.2 173.4 51.7 67.3 140.2 75.5 177.1 79.3 6.3 0.7 30.7 2.6 42 10.6 14 10 19 27.9 21 32.4 33.6 81.2 250.1 602.2 311.9 760.7 9.1 24.8 14.2 42 13.3 54.6-1.1 15.8-10.1 31.9-21.7 44.3-255 280.3-426.6 344.5-686.2 344.5h-0.2c-258.3 0-439-66-685.5-344.1-11-12.4-20.1-29.5-20.6-45.4 0-1-2.5-18.3 10-48.6 65.9-163.2 263.6-628.9 322.6-766.2 10.5-24.5 24.7-31.7 24.8-31.8 6.5-4.2 14.9-8.6 32.2-11.4z"
          />
          <g id="lines">
            <path
              fill="#1D1D1D"
              d="m374 1297.3c-9.1-14.2-16.6-39.1-16.5-65.6 0-15.6 2.5-31.7 8.1-47 5.1-13.7 12.7-26.6 23.5-38 10.8-11.4 24.8-21.5 43.2-29.2 55.9-23.4 134.2-41.3 221-49.5-2.1-9-1.7-18.4 1.2-27.2-90.4 8.2-172.3 26.7-232.6 51.8-10.6 4.5-20.2 9.7-28.8 15.5 22-51.7 50-104.8 85.8-155.4 71.3-100.8 133.1-154.7 176.4-183.4 9.1-6 17.4-10.9 24.9-14.9v-14c0-4.6 0-10.4 0-16.3-11.2 5.3-24.5 12.6-39.8 22.7-46.5 30.7-110.6 87.2-183.5 190.3-55.6 78.5-92.8 162.5-117.9 238-24.4 73.7-37.1 139.2-43.7 183.8l25 16c3.2-24.1 8.6-56.5 17.2-94.1 3.5 11.7 8.2 22.2 13.7 31 29.5 46.5 116.4 128 329 165v-27.4c-203.8-36.4-282-113.9-306.2-152.1z"
            />
            <path fill="#1D1D1D" d="m784 233.3v51.1c8 0 18.6 0 27 0v-51.1z" />
            <path
              fill="#1D1D1D"
              d="m784 513.6v78.4c8.3 0 18.6 0 27 0v-77.6c-8.9 3.6-18.2 3.3-27-0.8z"
            />
            <path
              fill="#1D1D1D"
              d="m680.2 1847.2v-8.4c0-5.2 0-11.8 0-18.6-23.2-0.1-57.4-2.9-96.6-14.4-39.9-11.7-85-32.4-129.3-68.7-12.2-10-24.4-21.1-36.3-33.6-40.4-42.3-65.3-86.7-80.6-127.6l-23.2 14.9c16.6 42.4 42.9 88 84.3 131.3 12.7 13.3 25.6 25.2 38.7 35.9 47.3 38.8 95.9 61.2 138.8 73.8 42.2 12.3 79 15.3 104.2 15.4z"
            />
            <path
              fill="#1D1D1D"
              d="m1258 1575.7c-15.3 40.9-40.2 85.4-80.6 127.8-12.1 12.6-24.3 23.8-36.6 33.9-44.3 36.2-89.3 56.8-129.2 68.5-38.9 11.4-72.9 14.2-96.1 14.3 0 6.8 0 13.4 0 18.6v8.4c25.2-0.1 61.7-3.1 103.7-15.4 42.8-12.5 91.3-34.8 138.6-73.5q0 0 0.1 0c13.1-10.8 26.2-22.8 39-36.2 41.4-43.3 67.8-89.1 84.4-131.6z"
            />
            <path
              fill="#1D1D1D"
              d="m1191.9 1023.7c-15.6-29.1-33.3-58.2-53.4-86.6-72.9-103.1-137-159.6-183.5-190.3-15.1-10-28.4-17.3-39.5-22.6 0 5.9 0 11.6 0 16.2v14.1c42.7 23.1 114.8 76.5 201 198.2 19.3 27.4 36.5 55.5 51.6 83.8 50.7 94.9 78.7 191.1 94 263.5 6.2 29.6 10.4 55.2 13 75.1l25-16c-10.8-73.7-38.6-205-108.2-335.4z"
            />
            <path fill="#1D1D1D" d="m811 1619.8c-8.4 0-18.7 0-27 0v79.5h27z" />
            <path
              fill="#1D1D1D"
              d="m811 1200.4c-8.8 2.4-18.2 2.4-27-0.1v181h27z"
            />
            <path
              fill="#1D1D1D"
              d="m811 845.7c-8.4 0-18.7 0-27 0v66.9c8.8-2.5 18.2-2.5 27-0.1z"
            />
            <path
              fill="#1D1D1D"
              d="m1004.4 1100.7q0-0.1 0-0.1c-16.7-14.3-37-27.7-61.3-38.4-1 8.9-4.4 17.6-10.2 25 21.4 9.5 39.1 21.3 53.9 33.9q0 0 0 0.1c20.6 17.6 35.1 36.8 44.9 52.6l19-20.4c-10.8-16.4-25.9-35.1-46.3-52.7z"
            />
            <path fill="#1D1D1D" d="m867 233.3h-27v51.1h27z" />
            <path
              fill="#1D1D1D"
              d="m755 481.7l-27-42.2v152.6c0.7-0.1 27-0.1 27-0.1z"
            />
            <path
              fill="#1D1D1D"
              d="m682.8 1903.5c-1.7-5.2-2.6-10.6-2.6-16.3v-10.9c-24.3-0.8-60.3-4.3-101.7-14.9-50.7-13.1-109.3-36.9-164.4-80.1-15.8-12.4-31.3-26.3-46.2-42-40.5-42.8-66.9-87.4-84-129.1l-7.6 4.8c-5.7 3.7-11.3 6.2-16.5 7.4 18.2 43.9 46.1 90.8 88.5 135.4 15.9 16.8 32.4 31.6 49.1 44.7q0 0 0 0.1c58.7 45.9 120.9 71.2 174.4 84.9 45.8 11.8 85.2 15.2 111 16z"
            />
            <path
              fill="#1D1D1D"
              d="m622.2 698.4c-56.7 33.4-132.8 94.9-211.7 207.3-21.9 31.1-41.1 63-58.1 94.9-68.2 128.6-99.4 258.1-113.6 340.7 7.6-3.9 17-4 27.4 0.2 14.2-80.9 44.9-205.5 110.1-328.2 16.5-31.1 35.1-62 56.2-92 77-109.6 150.1-168.3 203.4-199.6 16.9-9.9 31.8-17.1 44.3-22.3q0-1.1 0-2.1v-26.9c-15.5 5.8-35.2 14.6-58 28z"
            />
            <path
              fill="#1D1D1D"
              d="m867 1619.8q-0.7 0-1.4 0h-25.6v79.5h25.6q0.7 0 1.4 0z"
            />
            <path
              fill="#1D1D1D"
              d="m755 1180.2l-26.4-26.4q-0.3-0.3-0.6-0.6v228.1q1.1 0 2.1 0h24.9z"
            />
            <path
              fill="#1D1D1D"
              d="m755 845.7c0 0-26.3-0.1-27-0.1v114.1l0.6-0.6 26.4-26.4z"
            />
            <path
              fill="#1D1D1D"
              d="m1319.5 1615l-8-5c-17.1 41.7-43.5 86.5-84 129.3-15 15.7-30.5 29.7-46.3 42.1-55.1 43.1-113.7 67-164.4 80-41.2 10.6-77 14-101.3 14.9v10.9c0 5.7-0.9 11.1-2.6 16.3 25.8-0.8 65.1-4.2 110.6-16 53.5-13.7 115.7-38.9 174.3-84.8q0 0 0-0.1c16.8-13.1 33.4-28 49.3-44.8 42.4-44.6 70.3-91.6 88.6-135.5-5.2-1.3-10.6-3.7-16.2-7.3z"
            />
            <path
              fill="#1D1D1D"
              d="m1242.3 999.5c-16.8-31.5-35.8-63-57.4-93.8-79-112.4-155-173.9-211.7-207.3-22.7-13.3-42.2-22.1-57.7-27.9v29c13.1 5.5 28.7 13.1 46.5 23.7 53.1 31.7 125 90.2 200.8 198.1 20.9 29.7 39.4 60.2 55.7 90.9 65.6 123.1 96.5 248.3 110.7 329.4 10.4-4.3 19.8-4.3 27.3-0.5-14.2-82.8-45.6-212.7-114.2-341.6z"
            />
            <path fill="#1D1D1D" d="m755 233.3h-27v51.1h27z" />
            <path
              fill="#1D1D1D"
              d="m867 442.6l-27 42.1v107.3h25.6q0.7 0 1.4 0z"
            />
            <path
              fill="#1D1D1D"
              d="m755 1619.8c0 0-26.3 0-27 0v79.5c0.7 0 27 0 27 0z"
            />
            <path
              fill="#1D1D1D"
              d="m867 845.6c-0.5 0-27 0.1-27 0.1v86.6l26.8 26.8q0.1 0.1 0.2 0.2z"
            />
            <path
              fill="#1D1D1D"
              d="m635.9 1750.2c-42.4-9.4-95.2-27.4-140.3-61-8-6-15.8-12.5-23.2-19.5-45.9-43.1-71.8-87.4-85.7-125.4l-19.6 12.6q-1.7 1.1-3.6 2.3c15.7 40.5 43.6 86.3 90.4 130.2 8.2 7.7 16.7 14.8 25.5 21.4 51.1 38.1 109.4 57 155 66.7 17.5 3.7 33.1 6.1 45.8 7.5v-27.1c-12.4-1.6-27.5-4-44.3-7.7z"
            />
            <path
              fill="#1D1D1D"
              d="m973.8 1236.1c-59.1 0.4-130.7 2.6-199.5 8.9-55.8 5.2-98.6 10.7-134.1 17.1q0 0-0.1 0c-65.4 11.7-106.2 26.4-155.9 45.9-40.9 16-72.2 42.7-94.4 69.8-7.9 9.6-14.6 19.3-20.2 28.7l22.7 14.6c8.5-14.3 20.1-29.8 34.8-44.1 17.8-17.5 40.2-33.4 66.9-43.9 49.5-19.4 87.3-33 150.9-44.5 34.5-6.1 76.6-11.6 131.8-16.7 64.6-5.9 132-8.2 188.9-8.7-3.3-7.8-1-17.2 7.7-26.6z"
            />
            <path
              fill="#1D1D1D"
              d="m1228.7 1556.9l-20.5-13.1c-6.9 16.9-14.9 30.8-21.6 41.6-3.3 5.3-6.9 11.8-11.6 19.4-13.8 22.7-36 55.1-75.7 84.9q0 0-0.1 0c-39.9 29.8-97.8 57.1-183.7 67.6v27.2c91.8-10.7 155.7-40.1 199.9-73.2 29-21.7 49.6-44.9 64.4-65.1 7.4-10.1 13.4-19.4 18.3-27.4 4.9-8 8.6-14.7 11.4-19.1 6.7-10.6 14.6-24.4 21.8-41.2q-1.4-0.8-2.6-1.6z"
            />
            <path
              fill="#1D1D1D"
              d="m1241.5 1381.8c-4.4-15.5-10.5-29.7-17.5-42.6-13.1-24.1-29.6-43.4-45.9-58.5 2.2 11.8-3.2 20.5-14.1 23.9 13.1 12.8 26 28.6 36.3 47.5q0 0.1 0 0.1c6.1 11.2 11.4 23.5 15.3 37.1q3 10.6 5.1 20.7l8-5.1c4.4-2.8 10.4-6.7 16.2-10.4q-1.5-6.3-3.4-12.7z"
            />
            <path
              fill="#1D1D1D"
              d="m1032.6 940.9q0-0.1 0-0.1c-41.8-75.8-88.7-125.7-117.1-151.8v2.8c0 10.1-2.6 19.6-7.1 27.7 27 26.7 65.6 71 100.5 134.4 26.4 47.8 50.6 106.3 66.2 176.3 9.4-5.1 19.3-5 27.7 0.1-16.2-75.3-42-138.3-70.2-189.4z"
            />
            <path
              fill="#1D1D1D"
              d="m1153.4 1506.3c-7-7.6-10.5-16.2-10.7-24.8-22.5 12.2-59.2 27.7-114.9 39.6-31.2 6.7-68.4 12.2-112.3 15.4v27.1c46-3.3 85-9.1 117.9-16.1 56.4-12 95-27.8 120-41.2z"
            />
            <path
              fill="#1D1D1D"
              d="m680.2 1563.6v-27.1c-48.8-3.5-89.2-9.9-122.4-17.5-49.9-11.5-83.5-25.7-104.8-37.1-0.2 8.5-3.9 17.1-10.9 24.7 23.6 12.5 59 27.1 109.6 38.7q0.1 0 0.1 0c35.1 8.1 77.5 14.7 128.4 18.3z"
            />
            <path
              fill="#1D1D1D"
              d="m867 1153.6l-0.2 0.2-26.8 26.8v200.7h25.6q0.7 0 1.4 0z"
            />
          </g>
          <g id="centers">
            <path
              fill="#818FA6"
              d="m915.5 1887.2c0 27.9-22.3 50.6-49.9 50.6h-47.8c-11 0-28.9 0-39.9 0h-47.8c-27.6 0-49.9-22.7-49.9-50.6v-48.4c-0.1-11.2-0.1-29.3 0-40.5v-48.4c0-27.9 22.3-50.6 49.9-50.6h47.8c11 0 28.9 0 39.9 0h47.8c27.6 0 49.9 22.7 49.9 50.6v48.4c0 11.2 0 29.3 0 40.5z"
            />
            <path
              fill="#818FA6"
              d="m915.5 1569.2c0 27.9-22.3 50.6-49.9 50.6h-47.8c-11 0-28.9 0-39.9 0h-47.8c-27.6 0-49.9-22.7-49.9-50.6v-48.4c-0.1-11.2-0.1-29.3 0-40.5v-48.4c0-27.9 22.3-50.6 49.9-50.6h47.8c11 0 28.9 0 39.9 0h47.8c27.6 0 49.9 22.7 49.9 50.6v48.4c0 11.2 0 29.3 0 40.5z"
            />
            <path
              fill="#818FA6"
              d="m1319.5 1346.8c30.7-19.8 55.7-3.8 55.7 35.7v80.5c0 9.9 0 25.9 0 35.7v80.6c0 39.4-25 55.4-55.7 35.7l-63-40.3c-7.7-4.9-20.1-12.9-27.8-17.8l-62.9-40.3c-30.8-19.7-30.8-51.7 0-71.4l62.9-40.3c7.7-4.9 20.1-12.9 27.8-17.9z"
            />
            <path
              fill="#818FA6"
              d="m276.3 1346.8c-30.7-19.8-55.7-3.8-55.7 35.7v80.5c0 9.9 0 25.9 0 35.7v80.6c0 39.4 25 55.4 55.7 35.7l62.9-40.3c7.7-4.9 20.2-12.9 27.9-17.8l62.9-40.3c30.8-19.7 30.8-51.7 0-71.4l-62.9-40.3c-7.7-4.9-20.2-12.9-27.9-17.9z"
            />
            <path
              fill="#818FA6"
              d="m1174.8 1270.5c11.3 24.1-3.2 39.7-32.4 34.8l-60.9-10.2c-7.3-1.3-19.3-3.3-26.7-4.5l-61.1-10.3c-29.1-4.9-38.3-24.5-20.4-43.7l37.4-40.1c4.5-4.9 11.8-12.7 16.3-17.6l37.5-40.3c17.9-19.2 41.5-15.3 52.8 8.9l23.5 50.3c2.9 6.1 7.5 16 10.4 22.1z"
            />
            <path
              fill="#818FA6"
              d="m833 1187.6c-19.5 19.5-51.1 19.5-70.6 0l-33.8-33.8c-7.8-7.8-20.5-20.5-28.3-28.3l-33.7-33.7c-19.5-19.5-19.5-51.2 0-70.7l33.7-33.7c7.8-7.8 20.5-20.5 28.3-28.3l33.8-33.7c19.5-19.6 51.1-19.6 70.6 0l33.8 33.7c7.8 7.8 20.4 20.5 28.3 28.3l33.7 33.7c19.5 19.5 19.5 51.2 0 70.7l-33.7 33.7c-7.9 7.8-20.5 20.5-28.3 28.3z"
            />
            <path
              fill="#818FA6"
              d="m915.5 791.8c0 29.7-22.3 53.9-49.9 53.9h-47.8c-11 0-28.9 0-39.9 0h-47.8c-27.6 0-49.9-24.2-49.9-53.9v-51.4c-0.1-11.9-0.1-31.2 0-43.1v-51.4c0-29.8 22.3-53.9 49.9-53.9h47.8c11 0 28.9 0 39.9 0h47.8c27.6 0 49.9 24.1 49.9 53.9v51.4c0 11.9 0 31.2 0 43.1z"
            />
            <path
              fill="#818FA6"
              d="m664.3 340.2c-19.7-30.8-3.7-55.8 35.7-55.8h80.6c9.9 0 25.9 0 35.7 0h80.6c39.4 0 55.4 25 35.7 55.8l-40.3 62.9c-4.9 7.7-12.9 20.1-17.8 27.8l-40.3 62.9c-19.8 30.8-51.7 30.8-71.4 0l-40.3-62.9c-5-7.7-12.9-20.1-17.9-27.8z"
            />
            <path
              fill="#818FA6"
              d="m932.6 177.6c19.7 30.7 3.7 55.7-35.7 55.7h-80.6c-9.8 0-25.8 0-35.7 0h-80.6c-39.4 0-55.4-25-35.7-55.7l40.3-62.9c5-7.7 12.9-20.2 17.9-27.9l40.3-62.9c19.7-30.8 51.6-30.8 71.4 0l40.3 62.9c4.9 7.7 12.9 20.2 17.8 27.9z"
            />
          </g>
          {uniqueIntegers.length > 0 && (
            <>
              <g id="active" mask="url(#mask)">
                <path fill="#FBC925" d="m867 233.3h-27v51.1h27z" />
                <path
                  fill="#FBC925"
                  d="m1153.4 1506.3c-7-7.6-10.5-16.2-10.7-24.8-22.5 12.2-59.2 27.7-114.9 39.6-31.2 6.7-68.4 12.2-112.3 15.4v27.1c46-3.3 85-9.1 117.9-16.1 56.4-12 95-27.8 120-41.2z"
                />
                <path
                  fill="#FBC925"
                  d="m1004.4 1100.7q0-0.1 0-0.1c-16.7-14.3-37-27.7-61.3-38.4-1 8.9-4.4 17.6-10.2 25 21.4 9.5 39.1 21.3 53.9 33.9q0 0 0 0.1c20.6 17.6 35.1 36.8 44.9 52.6l19-20.4c-10.8-16.4-25.9-35.1-46.3-52.7z"
                />
                <path
                  fill="#FBC925"
                  d="m755 481.7l-27-42.2v152.6c0.7-0.1 27-0.1 27-0.1z"
                />
                <path
                  fill="#FBC925"
                  d="m374 1297.3c-9.1-14.2-16.6-39.1-16.5-65.6 0-15.6 2.5-31.8 8.1-47 0.8-2.1 1-4.2 0.8-6.2 24.3-72.2 60.1-151.9 112.5-225.8 71.3-100.8 133.1-154.7 176.4-183.4q13.7-9 24.9-15v-13.9c0-4.6 0-10.4 0-16.3-11.2 5.3-24.5 12.6-39.8 22.7-46.5 30.7-110.6 87.2-183.5 190.3-55.6 78.5-92.8 162.5-117.9 238-0.6 1.9-0.8 3.8-0.6 5.6-5.5 17-7.9 34.3-7.9 51 0.1 31.4 8.2 60.1 20.7 80.1 29.5 46.5 116.4 128 329 165v-27.4c-203.8-36.4-282-113.9-306.2-152.1z"
                />
                <path
                  fill="#FBC925"
                  d="m1258 1575.7c-15.3 40.9-40.2 85.4-80.6 127.8-12.1 12.6-24.3 23.8-36.6 33.9-44.3 36.1-89.3 56.8-129.2 68.5-38.9 11.4-72.9 14.2-96.1 14.3 0 6.8 0 13.4 0 18.6v8.4c25.2-0.1 61.7-3.1 103.7-15.4 42.8-12.5 91.3-34.8 138.6-73.5q0 0 0.1 0c13.1-10.8 26.2-22.8 39-36.2 41.4-43.3 67.8-89.1 84.4-131.6z"
                />
                <path
                  fill="#FBC925"
                  d="m622.2 698.4c-56.7 33.4-132.8 94.9-211.7 207.3-21.9 31.1-41.1 63-58.1 94.9-68.2 128.6-99.4 258.1-113.6 340.7 7.6-3.9 17-4 27.4 0.2 14.2-80.9 44.9-205.5 110.1-328.2 16.5-31.1 35.1-62 56.2-92 77-109.6 150.1-168.3 203.4-199.6 16.9-9.9 31.8-17.1 44.3-22.3q0-1.1 0-2.1v-26.9c-15.5 5.8-35.2 14.6-58 28z"
                />
                <path
                  fill="#FBC925"
                  d="m1242.3 999.5c-16.8-31.5-35.8-63-57.4-93.8-79-112.4-155-173.9-211.7-207.3-22.7-13.3-42.2-22.1-57.7-27.9v29c13.1 5.5 28.7 13.1 46.5 23.7 53.1 31.7 125 90.2 200.8 198.1 20.9 29.7 39.4 60.2 55.7 90.9 65.6 123.1 96.5 248.3 110.7 329.4 10.4-4.3 19.8-4.3 27.3-0.5-14.2-82.8-45.6-212.7-114.2-341.6z"
                />
                <path
                  fill="#FBC925"
                  d="m635.9 1750.2c-42.4-9.4-95.2-27.4-140.3-61-8-6-15.8-12.5-23.2-19.5-45.9-43.1-71.8-87.4-85.7-125.4l-19.6 12.6q-1.7 1.1-3.6 2.3c15.7 40.5 43.6 86.3 90.4 130.2 8.2 7.7 16.7 14.8 25.5 21.4 51.1 38.1 109.4 57 155 66.7 17.5 3.7 33.1 6.1 45.8 7.5v-27.1c-12.4-1.6-27.5-3.9-44.3-7.7z"
                />
              </g>
              <g>
                <motion.mask id="mask">
                  {activePaths.map((path, index) => {
                    return (
                      <motion.path
                        key={index}
                        stroke="yellow"
                        variants={menuVariants}
                        animate="open"
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "mirror",
                          delay: uniqueIntegers[index],
                          repeatDelay: 15,
                        }}
                        strokeWidth="50"
                        fill="none"
                        d={path}
                      />
                    );
                  })}
                </motion.mask>
              </g>
            </>
          )}
        </motion.svg>

        {/* Human - Right */}
        <img
          src={Human.src}
          alt="Human"
          className="absolute top-1/2 -right-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3"
        />

        {/* Background */}
        <div className="absolute top-[8rem] -translate-y-1/4 left-0 -translate-x-[8rem] pointer-events-none -z-10">
          <img
            src={BgBrain.src}
            alt="Background"
            className="max-w-[48rem] max-h-[42rem]"
            aria-hidden={true}
          />
        </div>
      </div>
    </div>
  );
}
