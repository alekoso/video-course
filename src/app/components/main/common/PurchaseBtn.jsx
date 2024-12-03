"use client";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function PurchaseBtn({
  buttonVariant = "default",
  btnBg = "#fff",
  textColor = "#0C0117",
  discount = true,
  isBlicking = false,
  onClick,
}) {
  const t = useTranslations("ModalBtn");
  const f = useTranslations("Tariffs");
  const router = useRouter();
  const btnText = t("btnText");
  const btnTextSmall = f("button");

  // Варианты анимации круга
  const circleVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%", transition: { duration: 1, ease: "easeOut" } },
  };

  // Варианты анимации текста
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Задержка между буквами
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const buttonClasses =
    buttonVariant === "large"
      ? "w-[313px] md:w-full h-[60px] lg:h-[74px] rounded-[18419.209px] bg-textColorWhite text-black text-sm lg:text-[22px]  font-semibold shadow-[4px_6px_10px_4px_rgba(167,93,243,0.20)_inset] relative"
      : buttonVariant === "largeGradient"
      ? "w-full h-[60px] lg:h-[74px] rounded-[40px] btnGradient text-sm lg:text-[22px] font-semibold relative"
      : buttonVariant === "small"
      ? "w-full rounded-[52.321px] h-[47px] lg:h-[57px] md:text-base font-semibold"
      : "lg:w-[190px] h-10 px-4 py-[10px] rounded-[9999px] gradient-to-right text-textColorWhite text-xs font-semibold leading-relaxed";

  return (
    <>
      <Button
        onClick={() => {
          if (discount) {
            localStorage.setItem("selectedPlan", "base");
            router.push("/payment");
          } else {
            onClick();
          }
        }}
        style={{ backgroundColor: btnBg, color: textColor }}
        className={`${buttonClasses} ${isBlicking ? "purchase-btn" : ""}`}
      >
        <motion.div
          className="inline-flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          {/* Текст "печатается" по буквам, включая пробелы */}
          {Array.from(buttonVariant === "small" ? btnTextSmall : btnText).map(
            (char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={char === " " ? "inline-block w-1" : ""} // Добавляем пробелы
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            )
          )}
        </motion.div>

        {(buttonVariant === "large" || buttonVariant === "largeGradient") && (
          <motion.div
            className="absolute w-[59px] h-[60px] lg:w-[74px] lg:h-[74px] rounded-[37px] bg-[#FF4A77] top-0 right-0 flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={circleVariants}
          >
            <p className="text-textColorWhite text-xl font-semibold leading-tight lg:text-2xl lg:leading-normal">
              -50%
            </p>
          </motion.div>
        )}
      </Button>
      {buttonVariant === "largeGradient" && (
        <div className="flex items-center gap-4">
          <p className="text-[#FF4A77] text-xl font-semibold leading-[1.84] lg:text-2xl lg:leading-[1.53]">
            99 $
          </p>
          <p className="text-[#959595] font-semibold text-sm line-through leading-[2.63] md:text-base md:leading-[2.3]">
            200$
          </p>
        </div>
      )}
    </>
  );
}
