"use client";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Counter = ({ targetNumber, duration = 4 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(targetNumber.replace("%", ""), 10); // Убираем '%' из числа
    const increment = end / (duration * 60); // FPS = 60
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end); // Устанавливаем точное конечное значение
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60); // Обновление каждую 1/60 секунды

    return () => clearInterval(interval);
  }, [isInView, targetNumber, duration]);

  return (
    <span
      ref={ref}
      style={{
        display: "inline-block",
        transition: "all 0.3s ease-out",
      }}
    >
      {count.toLocaleString()} {targetNumber.includes("%") && "%"}
    </span>
  );
};

export default function VideoSection() {
  const t = useTranslations("VideoSection");

  const items = Object.values({
    item1: {
      text: t("item1"),
      num: "12",
    },
    item2: {
      text: t("item2"),
      num: "48",
    },
    item3: {
      text: t("item3"),
      num: "100%",
    },
  });

  return (
    <div className="overflow-x-clip relative">
      {/* градієнти */}
      <div className="w-[184.357px] h-[173.591px] radial-blue-gradient absolute top-[50%] right-[-50%] transform -translate-x-1/2 -translate-y-1/2 md:hidden z-0" />

      <div className="hidden w-[368.221px] h-[346.719px] radial-violet-gradient-large absolute top-[-88px] right-[24px] z-0 md:block" />

      <Container>
        <div className="px-10 lg:px-20 pb-[76px] lg:pb-[200px]">
          <div className="flex flex-col gap-6 md:flex-row-reverse md:gap-5 md:justify-between relative z-10">
            {/* відео */}
            <div className="w-full h-[369px] sm:h-[458px] rounded-[18px] overflow-hidden">
              <ReactPlayer
                url="https://youtu.be/XXACgGVld_E?si=JuNlGnhQ_yvIWl5C"
                light="/image/preview.png"
                width="100%"
                height="100%"
                controls
              />
            </div>
            {/* текстовий блок */}
            <ul
              style={{ height: "fit-content" }} // костыль для высоты перезаписи класса градиента
              className="px-[30px] py-[22px] md:py-[61px] l:px-[110px] rounded-[18px] gradient-background  flex md:flex-col gap-[30px] md:gap-7 justify-center md:w-[32%] l:w-[39%]"
            >
              {items.map(({ text, num }, index) => (
                <li key={index} className="flex flex-col gap-1 md:gap-2">
                  <span className="text-[32px] md:text-5xl leading-[1.17] md:leading-[1.17] font-semibold">
                    <Counter targetNumber={num} />
                  </span>
                  <p className="text-xs font-semibold leading-[1.17] uppercase md:text-lg md:leading-[1.17]">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
