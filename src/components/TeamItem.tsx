import type TeamItemProps from "../interfaces/TeamItem";

export default function TeamItem({ item }: { item: TeamItemProps }) {

	return (

		<div>

			<div className="flex flex-col sm:flex-row gap-8 lg:gap-32">

				{/* Left Side */}
				<div className="sm:w-2/3 flex flex-col gap-y-4 sm:gap-y-12">

					<div className="flex flex-col gap-y-2">
						<div className="self-start">
							<h2 className="text-petroleum-900 text-6xl font-bold">{item.name}</h2>
							<svg width="555" height="19" viewBox="0 0 555 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-4 w-full">
								<path d="M444.942 6.04206C419.348 4.17122 373.68 3.28114 343.311 2.13576C312.942 0.990381 236.127 0.2969 172.611 0.447541C109.096 0.598181 45.3268 1.12556 31.0129 1.7884C9.91981 2.59594 4.38532 1.82547 2.10734 4.64856C0.0841797 6.9057 0.0717594 8.79765 2.06387 11.2704C4.55562 14.1248 8.56965 14.5295 30.9142 14.2978C45.2244 14.2025 75.607 13.2668 98.4586 12.2816C121.31 11.2964 199.141 10.2937 271.693 10.2024C360.062 10.0257 419.555 10.7947 452.431 12.5241C479.283 14.0248 513.411 16.1409 527.962 17.5608C547.281 19.3905 554.31 19.4366 554.32 17.9231C554.077 16.597 541.037 14.4302 522.724 12.418C505.414 10.6015 470.537 7.72371 444.942 6.04206Z" fill="url(#paint0_linear_345_2962)" />
								<defs>
									<linearGradient id="paint0_linear_345_2962" x1="558.965" y1="-17.0979" x2="532.369" y2="138.819" gradientUnits="userSpaceOnUse">
										<stop stopColor="#56592C" />
										<stop offset="0.191399" stopColor="#E6C453" />
										<stop offset="0.73931" stopColor="#F0CD5B" />
										<stop offset="1" stopColor="#D1A617" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<span className="text-lg text-petroleum-700">{item.title}</span>
					</div>

					<div className="relative">
						<svg className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 text-gold-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
						</svg>
						<p className="w-[90%] mx-auto p-6 lg:p-12 text-xl" dangerouslySetInnerHTML={{ __html: item.quote }}></p>
						<svg className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 rotate-180 text-gold-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
						</svg>
					</div>

					<div className="flex flex-col items-center">

						<div className="w-full max-w-xl hidden lg:flex flex-col lg:flex-row justify-between">
							{
								item.counters?.map((counter, j) => (
									<div className="flex flex-col items-center" key={j}>
										<span className="text-5xl text-gold-400 font-bold">{counter.number}</span>
										<span className="font-black uppercase">{counter.text}</span>
									</div>
								))
							}
						</div>

					</div>

					<div className="hidden lg:block mx-auto">
						<button className="btn-lg text-white font-extrabold text-xl shadow-xl shadow-gold-900/10 hover:scale-105 hover:shadow-2xl hover:shadow-gold-900/10 rounded-full bg-[linear-gradient(to_right,theme(colors.gold.200),theme(colors.gold.400),theme(colors.gold.400),theme(colors.gold.200))] bg-[length:200%_auto] hover:animate-gradient">
							Můj příběh
						</button>
					</div>

				</div>

				{/* Right Side */}
				<div className="relative">

					{/* Main Photo */}
					<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + item.photo.path} alt="" className="w-full h-full object-cover" />

					{/* Award */}
					{
						item.award?.path && (
							<div className="hidden lg:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 z-20">
								<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + item.award?.path} alt="" className="w-[16rem] h-[12.8rem] object-contain" />
							</div>
						)
					}

					{/* Copy of award for responsiveness */}
					{
						item.award?.path && (
							<div className="lg:hidden absolute bottom-0 left-0 w-full flex justify-center z-20" aria-hidden={true}>
								<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + item.award?.path} alt="" className="max-w-40 translate-y-12 object-contain" />
							</div>
						)
					}

				</div>

			</div>

			{/* Copy of counter and button for responsiveness */}
			<div className="mt-16 lg:hidden flex flex-col justify-center gap-y-8" aria-hidden={true}>

				<div className="w-full max-w-xl lg:hidden flex flex-col sm:flex-row justify-between gap-8 mx-auto">
					{
						item.counters?.map((counter, j) => (
							<div className="flex flex-col items-center" key={j}>
								<span className="text-5xl text-gold-400 font-bold">{counter.number}</span>
								<span className="uppercase">{counter.text}</span>
							</div>
						))
					}
				</div>

				<div className="mx-auto">
					<button className="btn-lg text-white font-extrabold text-xl shadow-xl shadow-gold-900/10 rounded-full bg-[linear-gradient(to_right,theme(colors.gold.200),theme(colors.gold.400),theme(colors.gold.400),theme(colors.gold.200))] bg-[length:200%_auto]">
						Můj příběh
					</button>
				</div>

			</div>

			<div className="mt-16 sm:mt-24 lg:mt-32 grid md:grid-cols-3 gap-12 md:gap-24">
				{
					item.certificates?.map((certificate, k) => (
						<div className="flex flex-col items-center gap-y-4 text-center" key={k}>
							<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + certificate.image.path} alt="" className="min-h-40 max-w-52 object-contain" />
							<h3 className="w-2/3 text-xl text-gold-400 font-bold uppercase">{certificate.title}</h3>
							<p className="text-sm" dangerouslySetInnerHTML={{ __html: certificate.text }}></p>
						</div>
					))
				}
			</div>

		</div>

	)
}