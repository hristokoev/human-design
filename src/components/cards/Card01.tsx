export interface Card01Props {
	image: string;
	text: string;
}

export default function Card01({ image, text }: Card01Props) {

	return (

		<div className="p-8 flex flex-col rounded-3xl shadow-[0_4px_15px_0_rgba(54,99,115,0.25)]">

			<div className="p-4 xl:p-8 grow flex items-center max-w-72 mx-auto">
				<img src={image} alt="Image" aria-hidden={true} />
			</div>

			<div className="">
				<p className="font-medium">{text}</p>
			</div>

		</div>

	);

}