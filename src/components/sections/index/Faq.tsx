import Accordion from "../../Accordion";
import type { AccordionProps } from "../../Accordion";

interface FaqProps {
	faqs: AccordionProps[] 
}

export default function Faq({ faqs }: FaqProps) {

	return (

		<section className="text-black">

			<div className="container">

				<div className="py-32">

					<div className="flex flex-col md:flex-row gap-24">

						{/* Left Side */}
						<div className="md:w-2/5 flex flex-col gap-y-8">

							<h3 className="text-4xl font-bold">
								Často kladené otázky
							</h3>

							<p className="text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
							</p>

							<div>
								<a className="btn border-2 border-black hover:bg-black/10 rounded-3xl" href="#">
									Kontaktujte nás
								</a>
							</div>

						</div>

						{/* FAQ Items */}
						<div className="grow flex flex-col gap-y-4">

							<ul className="border-t border-black">
								{
									faqs.map((faq, index) => (
										<Accordion key={index} question={faq.question} answer={faq.answer} id={`faqs-${index}`} active={faq.active} />
									))
								}
							</ul>

						</div>

					</div>

				</div>

			</div>

		</section>

	);

}