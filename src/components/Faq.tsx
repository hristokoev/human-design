/*

	FAQ Section with questions and answers
	
	TODO: Edit text

*/

import FaqItem from "@/components/FaqItem";
import type { FaqItemProps } from "@/components/FaqItem";

export default function Faq({ faqItems }: { faqItems: FaqItemProps[] }) {

	// If there are no FAQ items, don't render this section
	if (faqItems.length === 0) return null;

	return (

		<section className="text-petroleum-900">
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
								<a className="btn border-petroleum-900 hover:bg-petroleum-900 hover:text-white" href="/kontakt">
									Kontaktujte nás
								</a>
							</div>

						</div>

						{/* FAQ Items */}
						<div className="grow flex flex-col gap-y-4">
							<ul className="border-t border-petroleum-900">
								{faqItems.map((faqItem, index) => (
									<FaqItem key={index} question={faqItem.question} answer={faqItem.answer} id={`faqs-${index}`} active={faqItem.active} />
								))}
							</ul>
						</div>

					</div>
				</div>
			</div>
		</section>

	)
}