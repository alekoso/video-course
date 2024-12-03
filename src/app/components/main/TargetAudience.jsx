"use client";
import { motion } from "framer-motion";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";

export default function TargetAudience() {
  const t = useTranslations("TargetAudience");

  const items = Object.values({
    item1: t("item1"),
    item2: t("item2"),
    item3: t("item3"),
    item4: t("item4"),
    item5: t("item5"),
  });

  // Анимации для пунктов
  const itemVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? "-100%" : "100%",
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-x-clip relative">
      {/* градієнти з md */}
      <div className="hidden w-[368.221px] h-[346.719px] radial-blue-gradient-large absolute bottom-[261px] right-[-220px] z-0 md:block" />
      <div className="hidden w-[368.221px] h-[346.719px] radial-violet-gradient-large absolute top-[-70px] left-[-258px] z-0 md:block" />

      <Container>
        <div className="px-10 md:px-0 pb-[76px] lg:pb-[200px] relative z-1">
          <h2 className="mb-7 l:mb-[50px] uppercase font-bold text-2xl leading-[1.17] md:text-4xl md:leading-[1.17] l:text-5xl l:leading-[1.17] text-center mx-auto max-w-[80%] l:max-w-[432px]">
            {t("title")}
          </h2>

          <ul className="flex flex-col gap-4 md:gap-5 mx-auto sm:w-[60%] l:w-[671px]">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="gradient-diagonal rounded-[46px] p-[2px] h-[78px] l:h-[82px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index % 2 === 0 ? "left" : "right"} // Чередование направлений
                variants={itemVariants}
              >
                <div className=" bg-textColorWhite w-full h-full rounded-[46px] flex justify-center items-center sm:justify-start sm:px-[46px] sm:py-[27px]">
                  <p className="text-textColorBlack text-base leading-[1.17] md:text-xl md:leading-[1.17] l:text-2xl l:leading-[1.17] font-semibold max-w-[65%] text-center sm:max-w-full sm:text-start">
                    {item}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
