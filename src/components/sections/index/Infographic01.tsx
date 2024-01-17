import Card01 from "../../cards/Card01";
import ImageCard01 from "../../../assets/images/card-infographic-01.png";
import ImageCard02 from "../../../assets/images/card-infographic-02.png";
import ImageCard03 from "../../../assets/images/card-infographic-03.png";
import ImageCard04 from "../../../assets/images/card-infographic-04.png";

export default function Infographic02() {

	const cards= [
		{
			image: ImageCard01.src,
			text: "Human Design je skvělý nástroj, který vám pomůže lépe porozumět, jak fungujete."
		},
		{
			image: ImageCard02.src,
			text: "Objevte své unikátní talenty a překonejte překážky pro plné uplatnění se v práci i životě!"
		},
		{
			image: ImageCard03.src,
			text: "Maximalizujte efektivitu rozhodování, spolupráce a individuálního fungování pro plnější životní cestu."
		},
		{
			image: ImageCard04.src,
			text: "Zjistěte, zda je pro vás lepší pracovat individuálně, v malých týmech nebo ve větších skupinách."
		}
	];

	return (

		<section className="text-black">

			<div className="container">

				<div className="py-32">

					<div className="flex flex-col">

						<h2 className="text-petrolleum text-6xl font-bold text-center drop-shadow-[0_4px_15px_rgba(54,99,115,0.25)]">
							Jak vám pomůže Human Design?
						</h2>

						<div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
							{
								cards.map((card, index) => (
									<Card01 key={index} {...card} />
								))
							}
						</div>

					</div>

				</div>

			</div>

		</section>

	);

}