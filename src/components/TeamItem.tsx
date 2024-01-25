/*

	A component for displaying a team member.
	It's used on the Team page.
	
	Each team member has a story, which is displayed in a modal window (Slides.tsx).
	
	TODO: 
	
	1. Error handling for missing data.

*/

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Slides from "@/components/Slides";
import Counter from "@/components/Counter";
import type TeamItemProps from "@/interfaces/TeamItem";
import ImageDna from "@/assets/images/dna.png";

export default function TeamItem({ item }: { item: TeamItemProps }) {

	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (

		<div>

			{/* Modal Window */}
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-20" onClose={closeModal}>
					<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="mt-12 md:mt-24 fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4">
							<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-3xl bg-petroleum-950 shadow-2xl shadow-petroleum-900/50 cursor-pointer">

									{/* Chevron */}
									<button className="p-2 block absolute top-8 left-8">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
											<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
										</svg>
									</button>

									{/* X */}
									<button className="absolute top-8 right-8 z-50" onClick={closeModal}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
										</svg>
									</button>

									{/* Text Tip Lower Left Corner */}
									<span className="absolute bottom-0 left-0 p-8 z-30 w-full flex gap-2 text-xl text-petroleum-300/50 bg-gradient-to-t from-petroleum-950">
										Kliknutím pokračuj dál
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5.85616 1.70732V3.41536H6.53396H7.21176V1.70732V-0.000732422H6.53396H5.85616V1.70732ZM2.38682 2.22136C2.14233 2.48917 1.95059 2.73252 1.96073 2.76208C1.98356 2.82877 4.12984 4.98785 4.17328 4.98785C4.24041 4.98785 5.10885 4.07483 5.08998 4.02419C5.0664 3.96118 2.89506 1.73443 2.8571 1.73443C2.84295 1.73443 2.63132 1.95355 2.38682 2.22136ZM9.90939 2.78154C9.35023 3.35067 8.89269 3.8343 8.89269 3.8562C8.89269 3.91129 9.75599 4.74385 9.81309 4.74385C9.87187 4.74385 11.9292 2.76115 11.9292 2.70454C11.9292 2.63188 11.052 1.7341 10.9874 1.74061C10.9537 1.74402 10.4686 2.21241 9.90939 2.78154ZM0 6.96702V7.64482H1.89783H3.79566V6.96702V6.28922H1.89783H0V6.96702ZM6.51319 7.27224C6.94997 8.67556 8.91568 14.4901 10.1404 18.0016C10.3849 18.7024 10.6785 19.5442 10.7929 19.8723C10.9073 20.2003 11.1512 20.8835 11.3347 21.3905C11.5183 21.8975 11.7781 22.6356 11.9121 23.0308C12.046 23.4259 12.1758 23.7493 12.2006 23.7493C12.2252 23.7493 12.361 23.5235 12.5022 23.2477C12.6434 22.9718 12.9954 22.3069 13.2844 21.7701C13.5735 21.2333 14.0002 20.4281 14.2328 19.9807C14.4653 19.5334 14.6736 19.143 14.6958 19.1131C14.7178 19.0833 14.876 18.7817 15.0471 18.4428L15.3583 17.8267L17.2903 19.7522C18.4732 20.931 19.307 21.7198 19.4406 21.7865C20.3937 22.2622 21.5378 21.8811 22.0014 20.9335C22.1245 20.6819 22.149 20.5599 22.1493 20.1979C22.1497 19.3315 22.2396 19.452 19.7757 17.0145C18.5788 15.8304 17.6108 14.8514 17.6247 14.8388C17.6536 14.8125 19.6436 13.8407 20.1712 13.5952C20.3651 13.505 21.1093 13.1523 21.8251 12.8114C22.5408 12.4705 23.2423 12.1416 23.384 12.0805C23.5256 12.0194 23.6416 11.9508 23.6416 11.9282C23.6416 11.8802 23.3163 11.7793 21.1201 11.1459C18.3849 10.3572 18.0131 10.2493 16.8907 9.91804C16.2942 9.74203 15.2572 9.43805 14.5862 9.24252C13.9152 9.04699 13.0855 8.80434 12.7426 8.70337C12.1931 8.54162 11.161 8.24827 7.48217 7.20837C6.95989 7.06072 6.50495 6.93991 6.47117 6.93991C6.43001 6.93991 6.4439 7.04955 6.51319 7.27224ZM2.95894 10.5692L1.87907 11.6501L2.33016 12.1281C2.57828 12.3911 2.79616 12.6125 2.81437 12.62C2.83259 12.6275 3.33514 12.1455 3.93117 11.549L5.01483 10.4643L4.52681 9.97627L4.0388 9.48826L2.95894 10.5692Z" fill="currentColor" />
										</svg>
									</span>

									{/* DNA Image */}
									<img src={ImageDna.src} alt="DNA Image" className="absolute bottom-0 right-0 h-2/3" aria-hidden={true} />

									{/* Slides */}
									{item.story?.map((story, i) => (
										<div className="flex flex-col text-white" key={i}>
											<Slides story={story} />
										</div>
									))}

								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

			<div className="flex flex-col sm:flex-row gap-8 lg:gap-32">

				{/* Left Side */}
				<div className="sm:w-2/3 flex flex-col gap-y-4 sm:gap-y-12">

					{/* Name and title */}
					<div className="flex flex-col gap-y-2">
						<div className="self-start">

							{/* Name */}
							<h2 className="text-petroleum-900 text-6xl font-bold">{item.name}</h2>

						</div>

						{/* Title */}
						<span className="text-lg text-petroleum-700">{item.title}</span>

					</div>

					{/* Quotes */}
					<div className="relative">
						<svg className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 text-gold-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
						</svg>
						<div className="w-[90%] mx-auto p-6 lg:p-12 text-xl" dangerouslySetInnerHTML={{ __html: item.quote }} />
						<svg className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 rotate-180 text-gold-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
						</svg>
					</div>

					{/* Counters - Desktop */}

					<div className="flex flex-col items-center">
						<div className="w-full max-w-xl hidden lg:grid grid-cols-3">
							{item.counters?.map((counter, j) => (
								<div className="flex flex-col items-center" key={j}>
									<span className="text-5xl text-gold-400 font-bold">
										<Counter value={counter.number} direction="up" />
									</span>
									<span className="font-black uppercase">{counter.text}</span>
								</div>
							))}
						</div>
					</div>

					{/* My story button - Desktop */}
					{item.story?.length && (
						<div className="hidden lg:block mx-auto">
							<button onClick={openModal} className="btn-lg text-white font-extrabold text-xl shadow-xl shadow-gold-900/10 hover:scale-105 hover:shadow-2xl hover:shadow-gold-900/10 rounded-full bg-[linear-gradient(to_right,theme(colors.gold.200),theme(colors.gold.400),theme(colors.gold.400),theme(colors.gold.200))] bg-[length:200%_auto] hover:animate-gradient">
								Můj příběh
							</button>
						</div>
					)}

				</div>

				{/* Right Side */}
				<div className="relative">

					{/* Main Photo */}
					<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + item.photo.path} alt={item.name} className="w-full h-full object-cover" />

					{/* Award - Desktop */}
					{item.award?.path && (
						<div className="hidden lg:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 z-10">
							<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + item.award?.path} alt="Obrázek ocenění" className="w-[16rem] h-[12.8rem] object-contain" />
						</div>
					)}

					{/* Award - Mobile */}
					{item.award?.path && (
						<div className="lg:hidden absolute bottom-0 left-0 w-full flex justify-center z-10" aria-hidden={true}>
							<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + item.award?.path} alt="Obrázek ocenění" className="max-w-40 translate-y-12 object-contain" />
						</div>
					)}

				</div>

			</div>

			{/* Counters and button - Mobile */}
			<div className="mt-16 lg:hidden flex flex-col justify-center gap-y-8" aria-hidden={true}>

				{/* Counters */}
				<div className="w-full max-w-xl lg:hidden flex flex-col sm:flex-row justify-between gap-8 mx-auto">
					{item.counters?.map((counter, j) => (
						<div className="flex flex-col items-center" key={j}>
							<span className="text-5xl text-gold-400 font-bold">{counter.number}</span>
							<span className="uppercase">{counter.text}</span>
						</div>
					))}
				</div>

				{/* My story button */}
				{item.story?.length && (
					<div className="mx-auto">
						<button onClick={openModal} className="btn-lg text-white font-extrabold text-xl shadow-xl shadow-gold-900/10 rounded-full bg-[linear-gradient(to_right,theme(colors.gold.200),theme(colors.gold.400),theme(colors.gold.400),theme(colors.gold.200))] bg-[length:200%_auto]">
							Můj příběh
						</button>
					</div>
				)}

			</div>

			{/* Certificates */}
			<div className="mt-12 sm:mt-24 lg:mt-32 grid md:grid-cols-3 gap-12 md:gap-24">
				{item.certificates?.map((certificate, k) => (
					<div className="flex flex-col items-center gap-y-4 text-center" key={k}>
						<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + certificate.image.path} alt="Obrázek certifikátu" className="min-h-40 max-w-52 object-contain" />
						<h3 className="w-2/3 text-xl text-gold-400 font-bold uppercase">{certificate.title}</h3>
						<div className="text-sm" dangerouslySetInnerHTML={{ __html: certificate.text }} />
					</div>
				))}
			</div>

		</div>

	)
}