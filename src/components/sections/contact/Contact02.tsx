export default function Contact02() {

	return (

		<section className="text-petroleum-900">

			<div className="container">

				<div className="py-32">

					<div className="flex flex-col">

						<div className="flex flex-col gap-y-8 text-center">

							<h2 className="text-petroleum-900 text-6xl font-bold text-center">
								Máte zájem o rozvoj svého podnikání?
							</h2>

							<span className="text-xl">Objednejte se!</span>

						</div>

						{/* Form */}
						<div className="mt-24">

							<form className="grow flex flex-col gap-y-8 max-w-3xl mx-auto">

								<div className="flex flex-col sm:flex-row gap-6">
									<div className="grow flex flex-col gap-y-2">
										<label htmlFor="firstName">Jméno *</label>
										<input type="text" id="firstName" className="input border-petroleum-900 rounded-3xl" required />
									</div>
									<div className="grow flex flex-col gap-y-2">
										<label htmlFor="lastName">Příjmení *</label>
										<input type="text" id="lastName" className="input border-petroleum-900 rounded-3xl" required />
									</div>
								</div>

								<div className="flex flex-col sm:flex-row gap-6">
									<div className="grow flex flex-col gap-y-2">
										<label htmlFor="email">Email *</label>
										<input type="email" id="email" className="input border-petroleum-900 rounded-3xl" required />
									</div>
									<div className="grow flex flex-col gap-y-2">
										<label htmlFor="phone">Telefon</label>
										<input type="tel" id="phone" className="input border-petroleum-900 rounded-3xl" />
									</div>
								</div>

								<div className="flex flex-col gap-y-2">
									<label htmlFor="service">Jakou službu poptáváte? *</label>
									<select name="subject" id="service" className="grow input border-petroleum-900 rounded-3xl" required >
										<option value="0" disabled selected>Vyberte...</option>
										<option value="1">Obecný dotaz</option>
										<option value="2">Obchodní dotaz</option>
										<option value="3">Technický dotaz</option>
									</select>
								</div>

								<div className="flex flex-col sm:flex-row gap-6">
									<div className="grow flex flex-col gap-y-2">
										<label htmlFor="birthDate">Datum narození *</label>
										<input type="text" id="birthDate" className="input border-petroleum-900 rounded-3xl" required />
									</div>
									<div className="grow flex flex-col gap-y-2">
										<label htmlFor="birthTime">Čas narození *</label>
										<input type="text" id="birthTime" className="input border-petroleum-900 rounded-3xl" required />
									</div>
								</div>

								<div className="flex flex-col sm:flex-row gap-6">
									<div className="grow flex flex-col gap-y-2">
										<label htmlFor="birtCountry">Země, kde jste se narodili *</label>
										<input type="text" id="birtCountry" className="input border-petroleum-900 rounded-3xl" required />
									</div>
									<div className="grow flex flex-col gap-y-2">
										<label htmlFor="birthCity">Město, kde jste se narodili *</label>
										<input type="text" id="birthCity" className="input border-petroleum-900 rounded-3xl" required />
									</div>
								</div>

								<div className="flex justify-center items-center gap-x-2">
									<span>Proč tyto informace potřebujeme? <a href="#" className="underline hover:no-underline">Zjistit více</a>.</span>
								</div>

								<div className="flex flex-col gap-y-2">
									<label htmlFor="message">Zpráva *</label>
									<textarea name="message" id="message" cols={30} rows={10} className="input border-petroleum-900 rounded-3xl" required></textarea>
								</div>

								<div className="flex justify-center items-center gap-x-2">
									<input type="checkbox" id="gdpr" className="mr-2 w-4 h-4 cursor-pointer" required />
									<span>Souhlasím s <a href="#" className="underline hover:no-underline">Použití a zpracování osobních údajů</a></span>
								</div>

								<div className="flex justify-center">
									<button className="btn text-white bg-petroleum-900 hover:bg-petroleum-700 border-transparent">Objednat</button>
								</div>

							</form>

						</div>

					</div>

				</div>

			</div>

		</section>

	)

}