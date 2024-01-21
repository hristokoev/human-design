/*

TODO: 

*/

export default function Cta() {

	return (

		<section className="bg-[linear-gradient(125deg,theme(colors.gold.300),theme(colors.gold.400),theme(colors.gold.300),theme(colors.gold.400),theme(colors.gold.600))] bg-[length:100%_auto];">

			<div className="container">

				<div className="py-24">

					<div className="flex flex-col justify-center gap-y-12 text-center">

						<h2 className="text-6xl font-bold">
							Zaujal vás Human Design?
						</h2>

						<p className="text-xl">
							Navštivte náš eshop! Můžete si vybrat z webinářů, fyzických produktů, ...
						</p>

						<div className="w-48 mx-auto">							
							<a href="#" className="w-full btn hover:bg-white/10 shadow-2xl shadow-gold-900/50">E-shop!</a>
						</div>

					</div>

				</div>

			</div>

		</section>

	)

}