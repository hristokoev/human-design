/*

	Reviews Component
	
*/

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type ReviewItemProps from "@/interfaces/ReviewItem";
import ReviewItem from "./ReviewItem";

export default function Reviews({
  reviewItems,
}: {
  reviewItems: ReviewItemProps[];
}) {
  // If there are no review items, don't render this section
  if (reviewItems.length === 0) return null;

  return (
    <section className="text-petroleum-900 overflow-hidden" id="recenze">
      <div className="container">
        <div className="py-32 mx-auto max-w-7xl">
          <div>
            {/* Title */}
            <div>
              <h2 className="text-petroleum-900 text-8xl font-bold text-center">
                Co o nás říkají naši klienti?
              </h2>
              <p className="mt-8 text-center text-lg">
                Úspechy našich klientů jsou pro nás na prvním místě, a proto nás
                zajímají i jejich názory!
              </p>
            </div>

            {/* Reviews */}

            <div className="relative">
              <div className="swiper-button-prev absolute top-1/2 -left-12 -translate-y-1/2 text-petroleum-700 cursor-pointer z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>

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
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Pagination, Navigation]}
                className={`mt-24 ${reviewItems.length > 3 && "cursor-grab"}`}
              >
                {reviewItems.map((reviewItem, index) => (
                  <SwiperSlide className="py-8" key={index}>
                    <ReviewItem key={index} {...reviewItem} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button-next absolute top-1/2 -right-12 -translate-y-1/2 text-petroleum-700 cursor-pointer z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
