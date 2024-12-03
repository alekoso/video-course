"use client";

import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import CardWithBorderGradientAndMarker from "../main/common/CardWithBorderGradientAndMarker";

export default function CourseBenefits() {
  const t = useTranslations("CourseBenefits");

  const items = Object.values({
    item1: t("item1"),
    item2: t("item2"),
    item3: t("item3"),
    item4: t("item4"),
    item5: t("item5"),
    item6: t("item6"),
    item7: t("item7"),
  });
  return (
    <Container>
      <div className="px-10 lg:px-20 pb-[76px] lg:pb-[200px]">
        <h2 className="mb-7 l:mb-[50px] uppercase font-bold text-2xl leading-[1.17] md:text-4xl md:leading-[1.17] l:text-5xl l:leading-[1.17] text-center max-w-[80%] mx-auto sm:max-w-[100%]">
          {t("title")}
        </h2>

        <motion.ul
          className="flex flex-col gap-4 sm:flex-row sm:flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
        >
          {items.map((benefit, index) => (
            <CardWithBorderGradientAndMarker
              variant="variableWidth"
              text={benefit}
              index={index}
              key={index}
            />
          ))}
        </motion.ul>
      </div>
    </Container>
  );
}
