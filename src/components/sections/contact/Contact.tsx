/*

TODO: 

*/

import LinkIcon from "../../LinkIcon";
import type TeamItemProps from "../../../interfaces/TeamItem";

interface ContactProps {
	teamItems: TeamItemProps[];
}

export default function Contact({ teamItems }: ContactProps) {

	return (

		<section className="text-petroleum-900">

			<div className="container">

				<div className="py-32">

					<div className="flex flex-col">

						<div className="flex flex-col gap-y-8 text-center">

							<h2 className="text-petroleum-900 text-6xl font-bold text-center">
								Kontakt
							</h2>

							{/* <span>Lorem ipsum</span> */}

						</div>

						<div className="mt-24 flex flex-col lg:flex-row gap-24">

							{/* Left Side */}
							<div className="lg:w-1/2 flex flex-col md:flex-row lg:flex-col gap-12">

								<div className="flex flex-col gap-8">

									<div className="flex flex-col gap-y-4">
										<span className="flex items-center gap-x-2 font-bold">
											<svg className="w-6 h-6" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M3.33268 0.333984H24.666C26.1388 0.333984 27.3327 1.52789 27.3327 3.00065V19.0007C27.3327 20.4735 26.1388 21.6673 24.666 21.6673H3.33268C1.85992 21.6673 0.666016 20.4735 0.666016 19.0007V3.00065C0.666016 1.52789 1.85992 0.333984 3.33268 0.333984ZM16.1993 15.6007L24.666 9.66732V6.86732L14.866 13.734C14.3448 14.0957 13.6539 14.0957 13.1327 13.734L3.33268 6.86732V9.66732L11.7993 15.6007C13.1207 16.5243 14.878 16.5243 16.1993 15.6007Z" fill="black" />
											</svg>
											Email
										</span>
										<div>
											<a href="mailto:info@hdprofirmy.cz" className="underline hover:no-underline">info@hdprofirmy.cz</a>
										</div>
									</div>

									<div className="flex flex-col gap-y-4">
										<span className="flex items-center gap-x-2 font-bold">
											<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M18.6667 24.0004C16.4617 23.9984 14.2911 23.4534 12.3467 22.4137L11.7467 22.0804C7.601 19.8514 4.20225 16.4526 1.97333 12.307L1.64 11.707C0.573094 9.75158 0.00950749 7.56129 8.29008e-07 5.33369V4.44036C-0.000559171 3.72964 0.282614 3.04809 0.786667 2.54702L3.04 0.29369C3.25884 0.0731566 3.56775 -0.0331367 3.87595 0.00603667C4.18415 0.04521 4.45664 0.225423 4.61333 0.49369L7.61333 5.64036C7.91671 6.16421 7.82911 6.8267 7.4 7.25369L4.88 9.77372C4.67072 9.98065 4.62196 10.3004 4.76 10.5604L5.22667 11.4404C6.90272 14.5449 9.4524 17.09 12.56 18.7604L13.44 19.2404C13.7 19.3784 14.0197 19.3296 14.2267 19.1204L16.7467 16.6004C17.1736 16.1713 17.8361 16.0837 18.36 16.387L23.5067 19.387C23.7749 19.5437 23.9552 19.8162 23.9943 20.1244C24.0335 20.4326 23.9272 20.7416 23.7067 20.9604L21.4533 23.2137C20.9523 23.7177 20.2707 24.0009 19.56 24.0004H18.6667Z" fill="black" />
											</svg>
											Telefon
										</span>
										<div>
											<a href="tel:+420775892649" className="underline hover:no-underline">+420 775 892 649</a>
										</div>
									</div>

									<div className="flex flex-col gap-y-4">
										<span className="flex items-center gap-x-2 font-bold">
											<svg className="w-6 h-6" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9.99948 0.666016C4.67418 0.666016 0.341797 4.99842 0.341797 10.3236C0.341797 16.9324 8.98441 26.6344 9.35241 27.0441C9.69801 27.4291 10.3015 27.4284 10.6465 27.0441C11.0144 26.6344 19.6571 16.9324 19.6571 10.3236C19.6569 4.99842 15.3247 0.666016 9.99948 0.666016ZM9.99948 15.1827C7.32017 15.1827 5.14049 13.0029 5.14049 10.3236C5.14049 7.64435 7.32022 5.46466 9.99948 5.46466C12.6787 5.46466 14.8584 7.6444 14.8584 10.3237C14.8584 13.0029 12.6787 15.1827 9.99948 15.1827Z" fill="black" />
											</svg>
											Kde nás naleznete?
										</span>
										<a>Pavle Hanuše 252/4, Pražské Předměstí<br />500 02 Hradec Králové</a>
									</div>
									<a href="https://mapy.cz/zakladni?source=addr&id=9054010&ds=1&x=15.8131059&y=50.2085397&z=17" target="_blank" className="flex items-center gap-2 group font-bold hover:text-gold-400">
										Kudy k nám?
										<svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-all duration-150 ease-in-out">
											<path fillRule="evenodd" clipRule="evenodd" d="M12.7979 10.0992C12.9787 10.28 12.9787 10.5731 12.7979 10.754L8.07708 15.4747C7.89625 15.6556 7.60312 15.6556 7.42229 15.4747L7.20398 15.2565C7.02315 15.0756 7.02315 14.7825 7.20398 14.6016L11.3791 10.4266L7.20398 6.25149C7.02315 6.07066 7.02315 5.77753 7.20398 5.5967L7.42229 5.37839C7.60312 5.19756 7.89625 5.19756 8.07708 5.37839L12.7979 10.0992Z" fill="black" />
										</svg>
									</a>

								</div>

								<div className="grow flex flex-col gap-8">

									{
										teamItems.map((item, i) => (
											<div className="flex gap-8 items-center" key={i}>
												<div className="pr-4 py-4">
													<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + item.avatar.path} alt="" className="h-28 w-28 lg:w-40 lg:h-40 object-cover shadow-xl shadow-petroleum-950/25 rounded-full" />
												</div>
												<div className="flex flex-col gap-y-2">
													<p className="text-xl lg:text-3xl font-semibold text-gradient">{item.name}</p>
													<div>
														<a href={`mailto:${item.email}`} className="text-sm lg:text-base hover:text-gold-400 transition-all duration-150 ease-in-out">{item.email}</a>
													</div>
													<div>
														<a href={`tel:${item.phone}`} className="text-sm lg:text-base hover:text-gold-400 transition-all duration-150 ease-in-out">{item.phone}</a>
													</div>
													<div className="flex gap-2">
														{item.links?.map((link, j) => (
															<div key={j}>
																<LinkIcon text={link.text} url={link.url} icon={link.icon} />
															</div>
														))}
													</div>
												</div>
											</div>
										))
									}

								</div>

							</div>

							{/* Right Side */}
							<div className="lg:w-1/2 flex flex-col gap-y-12">

								{/* Contact Form */}
								<div>

									<form className="flex flex-col gap-y-8">

										<div className="flex flex-col sm:flex-row gap-6">
											<div className="grow flex flex-col gap-y-2">
												<label htmlFor="firstName">Jméno *</label>
												<input type="text" id="firstName" name="firstName" className="input border-petroleum-900 rounded-3xl" required />
											</div>
											<div className="grow flex flex-col gap-y-2">
												<label htmlFor="lastName">Příjmení *</label>
												<input type="text" id="lastName" name="lastName" className="input border-petroleum-900 rounded-3xl" required />
											</div>
										</div>

										<div className="flex flex-col sm:flex-row gap-6">
											<div className="grow flex flex-col gap-y-2">
												<label htmlFor="email">Email *</label>
												<input type="email" id="email" name="email" className="input border-petroleum-900 rounded-3xl" required />
											</div>
											<div className="grow flex flex-col gap-y-2">
												<label htmlFor="phone">Telefon</label>
												<input type="tel" id="phone" name="phone" className="input border-petroleum-900 rounded-3xl" />
											</div>
										</div>

										<div className="flex flex-col gap-y-2">
											<label htmlFor="subject">Která služba vás zajímá nejvíce? *</label>
											<select name="service" id="service" className="grow input border-petroleum-900 rounded-3xl" required defaultValue="Nic nebylo vybráno" >
												<option value="Nic nebylo vybráno" disabled>Vyberte...</option>
												<option value="15 min konzultace zdarma">15 min konzultace zdarma</option>
												<option value="Koučink">Koučink</option>
												<option value="Provázená pouť">Provázená pouť</option>
												<option value="3*30 min supervize zdarma">3*30 min supervize zdarma</option>
												<option value="Individuální supervize koučů">Individuální supervize koučů</option>
												<option value="Královehradecká skupinová supervize">Královehradecká skupinová supervize</option>
												<option value="Koučuji v souladu s mým životním posláním">Koučuji v souladu s mým životním posláním</option>
												<option value="Autentický kouč">Autentický kouč</option>
												<option value="Supervize pro HD profíky">Supervize pro HD profíky</option>
												<option value="Jiné">Jiné</option>
											</select>
										</div>

										<div className="flex flex-col gap-y-2">
											<label htmlFor="message">Zpráva *</label>
											<textarea name="message" id="message" cols={30} rows={10} className="input border-petroleum-900 rounded-3xl" required></textarea>
										</div>

										<div className="flex justify-center items-center gap-x-2">
											<input type="checkbox" id="gdpr" name="gdpr" className="mr-2 w-4 h-4 cursor-pointer" required />
											<span>Souhlasím s <a href="#" className="underline hover:no-underline">Použití a zpracování osobních údajů</a></span>
										</div>

										<div className="flex justify-center">
											<button className="btn text-white bg-petroleum-900 hover:bg-petroleum-700 border-transparent">Odeslat</button>
										</div>

									</form>

								</div>

							</div>

						</div>

						{/* Map */}
						<div className="mt-24">
							<div className="w-auto h-96 bg-petroleum-900 text-white border-petroleum-900 flex justify-center items-center">
								<iframe src="https://frame.mapy.cz/s/pafogoroka" width="100%" height="100%"></iframe>
							</div>
						</div>

					</div>

				</div>

			</div>

		</section>

	)

}