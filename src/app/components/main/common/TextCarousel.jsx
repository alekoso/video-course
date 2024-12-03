"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function TextCarousel() {
  const t = useTranslations("IfYouWantSection");

  return (
    <div className="gradient-diagonal rounded-[18px] px-6 py-4  l:px-12 l:py-5 w-[110px] l:w-[170px] h-full overflow-hidden">
      <motion.div
        animate={{
          y: ["800%", "-1200%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <p className="font-sansation uppercase font-bold text-[64px] transform rotate-90 whitespace-nowrap">
          {t("slideText")}
        </p>
      </motion.div>
    </div>
  );
}
