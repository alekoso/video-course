"use client";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import { ArrowIcon } from "../main/common/ArrowIcon";
import { useState } from "react";

export default function Reviews() {
  const t = useTranslations("Reviews");
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  const reviewsData = [
    t("review1"),
    t("review2"),
    t("review3"),
    t("review4"),
    t("review5"),
  ];

  return (
    <Container>
      <div id="reviews" className="px-10 lg:px-20 pb-[76px] lg:pb-[200px]">
        <h2 className="uppercase font-bold text-2xl l:text-[48px] leading-[1.17] text-center mb-[36px] l:mb-[52px]">
          {t("title")}
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop
          breakpoints={{
            550: {
              slidesPerView: 2,
            },
            989: {
              slidesPerView: 3,
            },
          }}
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index} className="mx-auto ">
              <div className="rounded-[18px] md:h-[440px] bg-textColorWhite h-[374px] w-full p-7 flex justify-center items-center">
                <p className="text-textColorBlack text-center text-lg font-medium overflow-hidden text-ellipsis line-clamp-8">
                  {review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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
