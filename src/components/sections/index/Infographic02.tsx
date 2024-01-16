interface CardProps {
	title: string;
	text: string;
	button: string;
}

export default function Infographic01() {

	const data: CardProps[] = [
		{
			title: "Osobní Konzultace",
			text: "Začněte s osobní konzultací vvašeho jedinečného nastavení. Na základě vaší osobní zkušenosti se pobavíme o tom, co dál. ",
			button: "Zjistit více!"
		},
		{
			title: "Firemní Konzultace",
			text: "Objednejte se na krátkou konzultaci zdarma a navážeme na váš osobní Human Design a podpoříme růst vašeho podnikání.",
			button: "Objednat se!"
		}
	];

	return (

		<section className="bg-gradient-to-br from-[#DEBA44] to-[#BB9417]">

			<div className="container">

				<div className="py-32">

					<div className="flex flex-col gap-y-8">

						<h2 className="text-8xl font-bold text-center drop-shadow-[0_4px_15px_rgba(54,99,115,0.25)]">
							Jak začít?
						</h2>

						<div className="flex justify-center">
							<svg width="37" height="125" viewBox="0 0 37 125" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g filter="url(#filter0_d_315_5717)">
									<path d="M18.5312 14.6055V102.863" stroke="#F8F3E1" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 12" />
								</g>
								<defs>
									<filter id="filter0_d_315_5717" x="0.53125" y="0.605469" width="36" height="124.258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
										<feOffset dy="4" />
										<feGaussianBlur stdDeviation="7.5" />
										<feComposite in2="hardAlpha" operator="out" />
										<feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.388235 0 0 0 0 0.45098 0 0 0 0.25 0" />
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_315_5717" />
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_315_5717" result="shape" />
									</filter>
								</defs>
							</svg>
						</div>

						<div className="flex justify-center">
							<span className="text-2xl text-center drop-shadow-[0_4px_15px_rgba(54,99,115,0.25)]">
								Mám již nějakou předchozí zkušenost s <span className="font-bold bg-gradient-to-l from-[#FFE799] from-0% to-[#FFD445] to-35% bg-clip-text text-transparent">Human Designem</span>?
							</span>
						</div>

						<div className="hidden md:flex justify-center">
							<svg width="560" height="136" viewBox="0 0 560 136" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M280 3.17188V24.1856C280 55.1808 259.964 76.1945 229.909 76.1945C225.337 76.1945 191.542 76.1363 178 76.1945M3 132.406V129.254C3.00009 97.2081 22.0346 76.7198 53.0907 76.7198C60.9895 76.7198 93.9044 76.7306 102 76.7198" stroke="#F8F3E1" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 12" />
								<path d="M126.391 86H121.875V63.4531H125.812L136.344 78.1406H136.469V63.4531H140.984V86H137.078L126.531 71.2344H126.391V86ZM151.875 72.2656C149.875 72.2656 148.438 73.7812 148.281 75.875H155.391C155.297 73.7344 153.906 72.2656 151.875 72.2656ZM155.453 80.875H159.641C159.141 84.1562 156.141 86.3594 152 86.3594C146.844 86.3594 143.75 83.0625 143.75 77.7031C143.75 72.3594 146.875 68.8906 151.828 68.8906C156.703 68.8906 159.781 72.1875 159.781 77.2812V78.6719H148.234V78.9531C148.234 81.3438 149.75 82.9844 152.078 82.9844C153.75 82.9844 155.031 82.1562 155.453 80.875Z" fill="#F8F3E1" />
								<path d="M410.641 86L408.922 80.5312H401L399.281 86H394.438L402.266 63.4531H407.812L415.656 86H410.641ZM404.906 67.7656L402.016 77H407.906L405.016 67.7656H404.906ZM417.578 86V69.25H421.984V72.2344H422.078C422.969 70.1562 424.734 68.9375 427.312 68.9375C431.031 68.9375 433.125 71.2812 433.125 75.2031V86H428.562V76.1562C428.562 73.9688 427.531 72.7188 425.484 72.7188C423.438 72.7188 422.141 74.2188 422.141 76.3906V86H417.578ZM443.703 86.3594C438.641 86.3594 435.406 83.1094 435.406 77.6094C435.406 72.1875 438.688 68.8906 443.703 68.8906C448.719 68.8906 452 72.1719 452 77.6094C452 83.125 448.766 86.3594 443.703 86.3594ZM443.703 82.875C445.938 82.875 447.359 80.9844 447.359 77.625C447.359 74.2969 445.922 72.375 443.703 72.375C441.484 72.375 440.031 74.2969 440.031 77.625C440.031 80.9844 441.453 82.875 443.703 82.875Z" fill="#F8F3E1" />
								<path d="M280 3.17188V24.1856C280 55.1808 300.036 76.1945 330.091 76.1945C334.663 76.1945 368.458 76.1363 382 76.1945M557 132.406V129.254C557 97.2081 537.965 76.7198 506.909 76.7198C499.01 76.7198 473.596 76.7306 465.5 76.7198" stroke="#F8F3E1" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 12" />
							</svg>
						</div>

						<div className="flex flex-col md:flex-row md:justify-evenly gap-8 text-center">
							{
								data.map((card, index) => (
									<>
										{index === 0 && (
											<div className="flex justify-center md:hidden">
												<svg width="283" height="136" viewBox="0 0 283 136" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M133.641 86L131.922 80.5312H124L122.281 86H117.438L125.266 63.4531H130.812L138.656 86H133.641ZM127.906 67.7656L125.016 77H130.906L128.016 67.7656H127.906ZM140.578 86V69.25H144.984V72.2344H145.078C145.969 70.1562 147.734 68.9375 150.312 68.9375C154.031 68.9375 156.125 71.2812 156.125 75.2031V86H151.562V76.1562C151.562 73.9688 150.531 72.7188 148.484 72.7188C146.438 72.7188 145.141 74.2188 145.141 76.3906V86H140.578ZM166.703 86.3594C161.641 86.3594 158.406 83.1094 158.406 77.6094C158.406 72.1875 161.688 68.8906 166.703 68.8906C171.719 68.8906 175 72.1719 175 77.6094C175 83.125 171.766 86.3594 166.703 86.3594ZM166.703 82.875C168.938 82.875 170.359 80.9844 170.359 77.625C170.359 74.2969 168.922 72.375 166.703 72.375C164.484 72.375 163.031 74.2969 163.031 77.625C163.031 80.9844 164.453 82.875 166.703 82.875Z" fill="#F8F3E1" />
													<path d="M3 3.17188V24.1856C3 55.1808 23.0361 76.1945 53.0905 76.1945C57.6625 76.1945 91.4579 76.1363 105 76.1945M280 132.406V129.254C280 97.2081 260.965 76.7198 229.909 76.7198C222.01 76.7198 196.596 76.7306 188.5 76.7198" stroke="#F8F3E1" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 12" />
												</svg>
											</div>
										)}
										{index === 1 && (
											<div className="flex justify-center md:hidden">
												<svg width="283" height="136" viewBox="0 0 283 136" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M280 3.17188V24.1856C280 55.1808 259.964 76.1945 229.909 76.1945C225.337 76.1945 191.542 76.1363 178 76.1945M3 132.406V129.254C3.00009 97.2081 22.0346 76.7198 53.0907 76.7198C60.9895 76.7198 93.9044 76.7306 102 76.7198" stroke="#F8F3E1" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 12" />
													<path d="M126.391 86H121.875V63.4531H125.812L136.344 78.1406H136.469V63.4531H140.984V86H137.078L126.531 71.2344H126.391V86ZM151.875 72.2656C149.875 72.2656 148.438 73.7812 148.281 75.875H155.391C155.297 73.7344 153.906 72.2656 151.875 72.2656ZM155.453 80.875H159.641C159.141 84.1562 156.141 86.3594 152 86.3594C146.844 86.3594 143.75 83.0625 143.75 77.7031C143.75 72.3594 146.875 68.8906 151.828 68.8906C156.703 68.8906 159.781 72.1875 159.781 77.2812V78.6719H148.234V78.9531C148.234 81.3438 149.75 82.9844 152.078 82.9844C153.75 82.9844 155.031 82.1562 155.453 80.875Z" fill="#F8F3E1" />
												</svg>
											</div>
										)}
										<div key={index} className="p-8 mx-auto flex flex-col items-center gap-y-4 bg-gradient-to-br from-[#DFBA3F] to-[#DFBA3F] rounded-3xl shadow-[0_4px_15px_0_rgba(54,99,115,0.15) max-w-96">
											<div className="text-3xl">
												<p className="font-bold">{card.title}</p>
											</div>
											<div className="grow flex items-center px-2">
												<p className="text-sm font-medium">{card.text}</p>
											</div>
											<div className="">
												<a className="btn border-2 border-white hover:bg-white/10 rounded-3xl" href="#">{card.button}</a>
											</div>
										</div>
									</>
								))
							}
						</div>

					</div>

				</div>

			</div>

		</section>

	);

}