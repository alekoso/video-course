"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import marker from "../../../../public/icons/arrow.svg";
import img1 from "../../../../public/image/for-you-if/img1.png";
import img2 from "../../../../public/image/for-you-if/img2.png";
import img3 from "../../../../public/image/for-you-if/img3.png";
import img4 from "../../../../public/image/for-you-if/img4.png";

export default function CourseForYouIf() {
  const t = useTranslations("CourseForYouIf");

  const items = Object.values({
    item1: t("item1"),
    item2: t("item2"),
    item3: t("item3"),
    item4: t("item4"),
    item5: t("item5"),
    item6: t("item6"),
  });

  // Анимации для фотографий
  const photoVariants = {
    hidden: (direction) => ({
      x: direction === "left" ? "-100%" : "100%", // Фотографии выезжают с левой или правой стороны
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20, y: -20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const listVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Container>
      <div className="px-10 md:px-0 pb-[76px] lg:pb-[200px] overflow-x-clip relative md:flex md:justify-between md:gap-5">
        {/* Фотографии слева */}
        <div className="hidden md:block mt-[46px]">
          <motion.div
            className="relative w-[180px] l:w-[250px] lg:w-[346px] mb-[134px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom="left"
            variants={photoVariants}
          >
            <Image
              src={img1}
              alt="camera photo"
              sizes="100vh"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0C0117]" />
          </motion.div>
          <motion.div
            className="relative w-[180px] l:w-[250px] lg:w-[346px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom="left"
            variants={photoVariants}
          >
            <Image
              src={img2}
              alt="camera photo"
              sizes="100vh"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0C0117]" />
          </motion.div>
        </div>

        <div>
          <h2 className="mb-7 l:mb-[40px] uppercase font-bold text-2xl leading-[1.17] md:text-4xl md:leading-[1.17] l:text-5xl l:leading-[1.17] text-center sm:text-start max-w-[80%] mx-auto sm:max-w-[390px]">
            {t("title")}
          </h2>

          <motion.ul
            className="flex flex-col gap-6 md:gap-9 mx-auto sm:w-[394px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={listVariants}
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 md:gap-6"
                variants={itemVariants}
              >
                <motion.div variants={arrowVariants}>
                  <Image
                    src={marker}
                    alt="icon"
                    className="w-[23px] h-[23px] md:w-[26px] md:h-[26px]"
                  />
                </motion.div>
                <motion.p
                  className="text-sm leading-[1.17] l:text-base l:leading-[1.17] font-medium"
                  variants={textVariants}
                >
                  {item}
                </motion.p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Фотографии справа */}
        <div className="hidden md:block mt-[46px]">
          <motion.div
            className="relative w-[180px] l:w-[250px] lg:w-[346px] mb-[134px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom="right"
            variants={photoVariants}
          >
            <Image
              src={img3}
              alt="camera photo"
              sizes="100vh"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0C0117]" />
          </motion.div>
          <motion.div
            className="relative w-[180px] l:w-[250px] lg:w-[346px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom="right"
            variants={photoVariants}
          >
            <Image
              src={img4}
              alt="camera photo"
              sizes="100vh"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0C0117]" />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
