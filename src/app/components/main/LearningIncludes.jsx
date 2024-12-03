"use client";
import { motion } from "framer-motion";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import checkSvg from "../../../../public/icons/tick-circle.svg";
import Image from "next/image";
import img from "../../../../public/image/learning-includes.png";

export default function LearningIncludes() {
  const t = useTranslations("LearningIncludes");

  const items = Object.values({
    item1: t("item1"),
    item2: t("item2"),
    item3: t("item3"),
    item4: t("item4"),
    item5: t("item5"),
    item6: t("item6"),
  });

  // Варианты анимации для списка и его элементов
  const listVariants = {
    hidden: { opacity: 1 }, // Контейнер остается видимым
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Интервал между появлениями дочерних элементов
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Container>
      <div className="px-10 lg:px-20 pb-[76px] lg:pb-[200px]">
        <div className="md:flex md:gap-5 items-stretch">
          {/* текстовый блок */}
          <motion.div
            className="shadow-[4px_6px_10px_4px_rgba(167,93,243,0.20)_inset] bg-textColorWhite px-8 py-9 l:py-[76px] l:px-[53px] rounded-[28px] text-textColorBlack max-w-[455px] l:w-[455px] mx-auto flex-grow flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Анимация срабатывает при попадании в видимую область
            variants={listVariants} // Связываем анимацию списка
          >
            <h3 className="uppercase font-bold text-2xl l:text-[32px] leading-[1.17] text-center mb-[26px] l:mb-[42px]">
              {t("title")}
            </h3>
            <motion.ul className="flex flex-col gap-[26px]">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-[14px]"
                  variants={itemVariants} // Связываем анимацию для элемента
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
            </motion.ul>
          </motion.div>
          {/* /text-block */}

          {/* image */}
          <div className="hidden gradient-to-right rounded-[18px] px-[1px] md:block lx:w-[645px] flex-grow relative overflow-hidden">
            <Image
              src={img}
              alt="woman working on a laptop"
              sizes="100vh"
              className="w-full h-full object-cover rounded-[18px]"
            />
          </div>
          {/* /image */}
        </div>
      </div>
    </Container>
  );
}
