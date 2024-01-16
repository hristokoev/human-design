import Human from "../assets/images/human.png";

export default function HumanAnimation() {

	return (

		<div className="lg:absolute lg:top-0 lg:right-0 sm:h-[28rem] xl:h-[34rem]">

			<img src={Human.src} alt="" className="w-full h-full" />

		</div>

	);

}