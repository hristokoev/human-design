/*

This component is a card with image, title, text and button(s).
It's used on Index page in the section "Naše služby".

The index prop is used to determine the layout of the card.
Every third card is spread on two rows, the rest is spread on two columns.

*/

export interface Card02Props {
	image: string;
	title: string;
	text: string;
	cta?: string;
	button: string;
	index: number;
}

export default function Card02({ image, title, text, cta, button, index }: Card02Props) {

	if (!index) index = 0;

	return (

		<div className={`p-8 flex ${(index + 1) % 3 !== 0 ? 'lg:col-span-2 flex-col sm:flex-row' : 'lg:row-span-2 flex-col sm:flex-row lg:flex-col'} card-service`}>

			<div className={`${(index + 1) % 3 !== 0 ? 'sm:w-2/5' : 'sm:w-2/5 lg:w-full lg:h-3/5'} flex items-center max-w-80 mx-auto`}>
				<img src={image} alt="Image" aria-hidden={true} />
			</div>

			<div className={`${(index + 1) % 3 !== 0 ? 'sm:w-3/5' : 'sm:w-3/5 lg:w-full lg:h-2/5'} flex flex-col justify-center gap-6`}>
				<div>
					<p className="text-3xl font-extrabold text-gradient">{title}</p>
				</div>
				<div className="">
					<p className="font-medium" dangerouslySetInnerHTML={{ __html: text }}></p>
				</div>
				<div className="flex flex-col sm:flex-row items-center gap-6">
					{cta && (
						<a className="btn border-petroleum-900 hover:bg-petroleum-900 hover:text-white" href="#">{cta}</a>
					)}
					<a href="#" className="flex items-center gap-2 group font-bold hover:text-gold-400">
						{button}
						<svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-all duration-150 ease-in-out">
							<path fillRule="evenodd" clipRule="evenodd" d="M12.7979 10.0992C12.9787 10.28 12.9787 10.5731 12.7979 10.754L8.07708 15.4747C7.89625 15.6556 7.60312 15.6556 7.42229 15.4747L7.20398 15.2565C7.02315 15.0756 7.02315 14.7825 7.20398 14.6016L11.3791 10.4266L7.20398 6.25149C7.02315 6.07066 7.02315 5.77753 7.20398 5.5967L7.42229 5.37839C7.60312 5.19756 7.89625 5.19756 8.07708 5.37839L12.7979 10.0992Z" fill="black" />
						</svg>
					</a>
				</div>
			</div>

		</div>

	)

}