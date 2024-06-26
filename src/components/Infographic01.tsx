/*

	First infographic component ('Jak vám pomůže Human Design?') for the home page.

	TODO: Add background.

*/

import { motion } from "framer-motion";

import Card01 from "@/components/Card01";
import ImageCard01 from "@/assets/svg/card-01.svg";
import ImageCard02 from "@/assets/svg/card-02.svg";
import ImageCard03 from "@/assets/svg/card-03.svg";
import ImageCard04 from "@/assets/svg/card-04.svg";

export default function Infographic01() {
  // Sample cards data
  const cards = [
    {
      image: ImageCard01.src,
      text: "Human Design je skvělý nástroj, který vám pomůže lépe porozumět, jak fungujete.",
    },
    {
      image: ImageCard02.src,
      text: "Objevte své unikátní talenty a překonejte překážky pro plné uplatnění se v práci i životě!",
    },
    {
      image: ImageCard03.src,
      text: "Maximalizujte efektivitu rozhodování, spolupráce a individuálního fungování pro plnější životní cestu.",
    },
    {
      image: ImageCard04.src,
      text: "Zjistěte, zda je pro vás lepší pracovat individuálně, v malých týmech nebo ve větších skupinách.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="text-petroleum-900" id="jak-pomuze">
      <div className="container">
        <div className="py-32">
          <div className="flex flex-col">
            {/* Title */}
            <motion.h2
              className="text-petroleum-900 text-6xl font-bold text-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                show: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 200 },
              }}
            >
              Jak vám pomůže Human Design?
            </motion.h2>

            {/* Cards */}
            <motion.div
              className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-30%" }}
            >
              {cards.map((card, index) => (
                <Card01 key={index} {...card} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
