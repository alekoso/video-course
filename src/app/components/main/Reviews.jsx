"use client";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import { ArrowIcon } from "../main/common/ArrowIcon";
import { useState } from "react";
import Image from "next/image";

export default function Reviews() {
  const t = useTranslations("Reviews");
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  const reviewsData = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    image: `/image/reviews/review-${i + 1}.webp`,
  }));

  return (
    <Container className="overflow-hidden">
      <div
        id="reviews"
        className="px-10 lg:px-20 pb-[76px] lg:pb-[200px] overflow-hidden"
      >
        <h2 className="uppercase font-bold text-2xl l:text-[48px] leading-[1.17] text-center mb-[36px] l:mb-[52px]">
          {t("title")}
        </h2>

        <div className="w-full flex justify-center">
          <div className="w-[360px] md:w-[735px] lg:w-[1110px]">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={15}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop
              breakpoints={{
                550: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                989: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              className="[&_.swiper-wrapper]:!w-[360px] md:[&_.swiper-wrapper]:!w-[735px] lg:[&_.swiper-wrapper]:!w-[1110px]"
            >
              {reviewsData.map((review) => (
                <SwiperSlide key={review.id} className="!w-[360px]">
                  <div className="rounded-[18px] w-[360px] h-[440px] overflow-hidden">
                    <Image
                      src={review.image}
                      alt={`Review ${review.id}`}
                      width={360}
                      height={440}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Кнопки навігації */}
        <div className="flex gap-4 justify-center md:gap-6 mt-8 md:mt-10">
          <div
            className="cursor-pointer rounded-[14.215px] hover:bg-[linear-gradient(126deg,_#5bdbfd_16.95%,_#7375ff_79.54%,_#df93ff_140.99%,_#e56f8c_172.25%)] hover:shadow-none shadow-[0px_11.846px_66.338px_2.369px_rgba(121,121,121,0.12)] custom-prev w-[46px] h-[46px] md:w-[66px] md:h-[66px] bg-textColorWhite flex justify-center items-center transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredPrev(true)}
            onMouseLeave={() => setHoveredPrev(false)}
          >
            <ArrowIcon color={hoveredPrev ? "white" : "black"} />
          </div>
          <div
            className="cursor-pointer rounded-[14.215px] hover:bg-[linear-gradient(126deg,_#5bdbfd_16.95%,_#7375ff_79.54%,_#df93ff_140.99%,_#e56f8c_172.25%)] hover:shadow-none shadow-[0px_11.846px_66.338px_2.369px_rgba(121,121,121,0.12)] custom-next w-[46px] h-[46px] md:w-[66px] md:h-[66px] bg-textColorWhite flex justify-center items-center transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredNext(true)}
            onMouseLeave={() => setHoveredNext(false)}
          >
            <ArrowIcon color={hoveredNext ? "white" : "black"} rotate={true} />
          </div>
        </div>
      </div>
    </Container>
  );
}
