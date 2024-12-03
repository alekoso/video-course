"use client";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import checkSvg from "../../../../public/icons/tick-circle.svg";
import Image from "next/image";
import TextCarousel from "./common/TextCarousel";
import { motion } from "framer-motion";

export default function IfYouWantSection() {
  const t = useTranslations("IfYouWantSection");

  const items = Object.values({
    item1: t("point1"),
    item2: t("point2"),
    item3: t("point3"),
    item4: t("point4"),
    item5: t("point5"),
    item6: t("point6"),
    item7: t("point7"),
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Интервал между появлением дочерних элементов
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Элементы начинаются с невидимого состояния и смещены вниз
    visible: { opacity: 1, y: 0 }, // Плавное появление и поднятие на место
  };

  return (
    <Container>
      <div className="px-10 lg:px-20 pb-[76px] lg:pb-[200px]">
        <div className="md:flex md:gap-7">
          {/* текстовий блок */}
          <motion.div
            className="shadow-[4px_6px_10px_4px_rgba(167,93,243,0.20)_inset] bg-textColorWhite px-8 py-9 md:py-[74px] l:px-[68px] rounded-[18px] text-textColorBlack"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Анимация запускается, когда элемент появляется в зоне видимости
            variants={containerVariants}
          >
            <h3 className="uppercase font-bold text-2xl md:text-[32px] leading-[1.17] text-center md:text-start mb-[26px] l:mb-[42px]">
              {t("title")}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[26px] l:gap-x-16 lg:gap-x-[102px]">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-[14px]"
                  variants={itemVariants}
                >
                  <Image
                    src={checkSvg}
                    alt="icon"
                    className="w-[22px] h-[22px] l:w-[28px] l:h-[28px]"
                  />
                  <p className="text-sm leading-[1.17] l:text-base l:leading-[1.17]">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Карусель з анімацією бігучої стрічки всередині блоку */}
          <div className="hidden md:block">
            <TextCarousel />
          </div>
        </div>
      </div>
    </Container>
  );
}
