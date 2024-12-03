"use client";

import { motion } from "framer-motion";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroMob from "../../../../public/image/hero/hero-mob.png";
import heroDesk from "../../../../public/image/hero/hero-desk.png";
import PurchaseBtn from "../main/common/PurchaseBtn";
import {
  buttonVariants,
  imageAnimation,
  subtitleAnimation,
  titleAnimation,
} from "../../../app/helpers/animation";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <Container>
      <div className="px-10 lg:pl-20 lg:pr-[60px] pt-6 lg:pt-10 pb-[76px] lg:pb-[200px] overflow-x-clip relative ">
        <div className="w-[184.357px] h-[173.591px] radial-blue-gradient absolute bottom-[165px] left-[-55px] md:hidden" />

        <div className="w-[184.357px] h-[173.591px] radial-violet-gradient absolute top-[99px] right-[-10px] md:hidden" />

        <div className="w-full relative md:w-[56.3%]">
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={heroMob}
              alt="Aleko Sokurashvili"
              sizes="100vh"
              priority
              className="w-full h-auto md:hidden"
              quality={100}
            />
            <Image
              src={heroDesk}
              alt="Aleko Sokurashvili"
              sizes="100vh"
              priority
              className="w-full h-auto hidden md:flex"
              quality={100}
            />
          </motion.div>

          <div>
            <div className="absolute flex flex-col gap-8 md:flex-col-reverse md:gap-[42px] top-[77.5%] md:top-[10%] md:left-[96%] l:left-[89%] lg:top-[18%]">
              <motion.div
                variants={titleAnimation}
                initial="hidden"
                animate="visible"
              >
                <p className="gradient-secondary-text font-bold text-[20.926px] mb-1 md:mb-4 text-center md:text-start lg:text-[32px]">
                  {t("colorText")}
                </p>
                <h1 className="text-[54px] xs:max-w-[80%] sm:max-w-[90%] l:text-7xl lg:text-8xl font-extrabold uppercase text-center md:text-start mx-auto md:mx-0 lg:leading-[1.17]">
                  {t("title")}
                </h1>
              </motion.div>

              <motion.div
                variants={subtitleAnimation}
                initial="hidden"
                animate="visible"
              >
                <p className="text-center xs:max-w-[80%] md:max-w-[96%] mx-auto md:mx-0 text-sm md:text-start md:pl-20 l:pl-28 lg:text-[18px] leading-[1.15]">
                  {t("description")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="mt-[276px] xs:mt-[260px] sm:mt-[130px] md:mt-[42px] flex flex-col items-center md:items-start md:max-w-[50%] lg:w-[46.5%]"
        >
          <PurchaseBtn buttonVariant="large" />
          <div className="flex items-center gap-[10px] lg:gap-4 mt-3 justify-center w-full">
            <p className="text-[#FF4A77] text-xl font-semibold leading-[1.08] lg:text-2xl lg:leading-normal">
              99 $
            </p>
            <p className="text-[#C5C5C5] font-semibold text-sm line-through">
              200$
            </p>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
