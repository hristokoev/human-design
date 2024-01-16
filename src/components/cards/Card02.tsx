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

		<div className={`p-8 flex ${(index + 1) % 3 !== 0 ? 'lg:col-span-2 flex-col sm:flex-row' : 'lg:row-span-2 flex-col sm:flex-row lg:flex-col'} rounded-3xl shadow-[0_4px_15px_0_rgba(54,99,115,0.25)]`}>

			<div className={`${(index + 1) % 3 !== 0 ? 'sm:w-2/5' : 'sm:w-2/5 lg:w-full lg:h-3/5'} flex items-center max-w-80 mx-auto`}>
				<img src={image} alt="Image" aria-hidden={true} />
			</div>

			<div className={`${(index + 1) % 3 !== 0 ? 'sm:w-3/5' : 'sm:w-3/5 lg:w-full lg:h-2/5'} flex flex-col justify-center gap-6`}>
				<div>
					<p className="text-3xl font-bold bg-gradient-to-r from-[#FAC61B] from-5% to-[#FBD65B] to-65% bg-clip-text text-transparent">{title}</p>
				</div>
				<div className="">
					<p className="font-medium" dangerouslySetInnerHTML={{ __html: text }}></p>
				</div>
				<div className="flex flex-col sm:flex-row items-center gap-6">
					{cta && (
						<a className="btn border-2 border-black hover:bg-black/10 rounded-3xl" href="#">{cta}</a>
					)}
					<a href="#" className="flex items-center gap-2">
						{button}
						<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M12.7979 10.0992C12.9787 10.28 12.9787 10.5731 12.7979 10.754L8.07708 15.4747C7.89625 15.6556 7.60312 15.6556 7.42229 15.4747L7.20398 15.2565C7.02315 15.0756 7.02315 14.7825 7.20398 14.6016L11.3791 10.4266L7.20398 6.25149C7.02315 6.07066 7.02315 5.77753 7.20398 5.5967L7.42229 5.37839C7.60312 5.19756 7.89625 5.19756 8.07708 5.37839L12.7979 10.0992Z" fill="black" />
						</svg>
					</a>
				</div>
			</div>

		</div>

	);

}