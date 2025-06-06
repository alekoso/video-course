"use client";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import PurchaseBtn from "./common/PurchaseBtn";
import { useState, useEffect } from "react";

export default function HowCreateContent() {
  const t = useTranslations("HowCreateContent");
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDuration = 5 * 60 * 60 * 1000;
    const now = new Date().getTime();
    const savedTime = localStorage.getItem("countdownTime");
    const countdownStart = savedTime ? parseInt(savedTime, 10) : now;
    const countdownDate = countdownStart + countdownDuration;

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = countdownDate - currentTime;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        localStorage.removeItem("countdownTime");
      } else {
        setTimeLeft({
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    const handleBeforeUnload = () => {
      localStorage.setItem("countdownTime", countdownStart.toString());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(timer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="overflow-clip relative">
      {/* градієнти з sm */}
      <div className="hidden blackGrad absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 sm:block" />

      <Container>
        <div className="px-[10] py-[90px] md:py-[60px] mb-[76px] lg:mb-[200px] relative z-1 bg-img">
          {/* text */}
          <div className="mx-auto max-w-[280px] md:max-w-[447px]">
            <h2 className="mb-5 uppercase font-bold text-xl leading-[1.17] md:text-4xl md:leading-[1.17] text-center ">
              {t("title")}{" "}
              <span className="gradient-secondary-text whitespace-nowrap">
                {t("colorTitle")}
              </span>
            </h2>

            <p className="text-sm leading-[1.17] font-medium md:text-2xl md:leading-[1.17] mb-[62px] l:mb-[44px] text-center">
              {t("description")}
            </p>
          </div>
          {/* /text */}

          <div className="w-[268px] md:w-[534px] flex flex-col items-center gap-[10px]">
            <PurchaseBtn
              textColor="#fff"
              buttonVariant="largeGradient"
              discount={false}
              toTariff
              showPrice={false}
            />
          </div>

          <div className="mx-auto mt-4 md:mt-7 rounded-[18px] py-[26px] md:py-[33px] px-[22px] text-center md:max-w-[534px] bg-transparent border-t-[1.5px] md:border-[1.5px] border-textColorWhite">
            <h3 className="text-xl l:text-2xl leading-[1.17] l:leading-[1.17] uppercase font-bold text-textColorWhite mb-[18px]">
              {t("timer")}
            </h3>
            <div className="flex justify-center items-center gap-[10px] text-xl uppercase font-bold text-textColorWhite">
              <div className="w-[60px] l:w-[107px] h-[48px] l:h-[47px] flex items-center justify-center rounded-[10px] border-[1.5px] border-textColorWhite">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <span className="font-bold text-xl leading-[1.17]">:</span>
              <div className="w-[60px] l:w-[107px] h-[48px] l:h-[47px] flex items-center justify-center rounded-[10px] border-[1.5px] border-textColorWhite">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <span className="font-bold text-xl leading-[1.17]">:</span>
              <div className="w-[60px] l:w-[107px] h-[48px] l:h-[47px] flex items-center justify-center rounded-[10px] border-[1.5px] border-textColorWhite">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
        <hr className="absolute w-full h-[1px] border-0 gradient-to-right bottom-0 max-w-[1280px]"></hr>
      </Container>
    </div>
  );
}
