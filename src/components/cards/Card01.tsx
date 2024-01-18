/* 

This component is a simple card with an image and text.
It's used on Index page in the section "Jak vám pomůže Human Design?".

*/

export interface Card01Props {
	image: string;
	text: string;
}

export default function Card01({ image, text }: Card01Props) {

	return (

		<div className="card-white">

			{/* Image */}
			<div className="p-4 xl:p-8 grow flex items-center max-w-72 mx-auto">
				<img src={image} alt="Image" aria-hidden={true} />
			</div>

			{/* Text */}
			<div className="">
				<p className="font-medium">{text}</p>
			</div>

		</div>

	)

}