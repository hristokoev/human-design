/*

	Reviews Component
	
*/

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import ReviewItem from "./ReviewItem";
import type ReviewItemProps from "@/interfaces/ReviewItem";

export default function Reviews({ reviewItems }: { reviewItems: ReviewItemProps[] }) {

	// If there are no review items, don't render this section
	if (reviewItems.length === 0) return null;

	return (

		<section className="text-petroleum-900 overflow-hidden" id="sluzby">

			<div className="container">
				<div className="py-32 mx-auto max-w-7xl">
					<div>

						{/* Title */}
						<div>
							<h2 className="text-petroleum-900 text-8xl font-bold text-center">
								Co o nás říkají naši klienti?
							</h2>
							<p className="mt-8 text-center text-lg">
								Úspechy našich klientů jsou pro nás na prvním místě, a proto nás zajímají i jejich názory!
							</p>
						</div>

						{/* Reviews */}
						<Swiper
							breakpoints={{
								640: {
									slidesPerView: 1,
									spaceBetween: 16,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 24,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 32,
								},
							}}
							spaceBetween={32}
							draggable={reviewItems.length > 3}
							pagination={{
								dynamicBullets: true,
							}}
							modules={[Pagination]}
							className={`mt-24 ${reviewItems.length > 3 && 'cursor-grab'}`}
						>
							{reviewItems.map((reviewItem, index) => (
								<SwiperSlide className='py-8' key={index}>
									<ReviewItem key={index} {...reviewItem} />
								</SwiperSlide>
							))}
						</Swiper>

					</div>
				</div>
			</div>
		</section>

	)
}