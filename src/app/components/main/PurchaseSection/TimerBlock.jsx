"use client";
import { useState, useEffect } from "react";

export default function TimerBlock({ text }) {
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
        localStorage.removeItem("countdownTime"); // Видаляємо, якщо таймер завершився
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

    // Зберігаємо час початку при закритті сторінки
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
    <div className="mx-auto mt-4 md:mt-7 rounded-[18px] py-[26px] md:py-[33px] px-[22px] text-center md:max-w-[534px] border-t-[1.5px] md:border-[1.5px] border-textColorBlack">
      <h3 className="text-xl l:text-2xl leading-[1.17] l:leading-[1.17] uppercase font-bold text-textColorBlack mb-[18px]">
        {text}
      </h3>
      <div className="flex justify-center items-center gap-[10px] text-xl uppercase font-bold text-textColorBlack">
        <div className="w-[60px] l:w-[107px] h-[48px] l:h-[47px] flex items-center justify-center rounded-[10px] border-[1.5px] border-black">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <span className="font-bold text-xl leading-[1.17]">:</span>
        <div className="w-[60px] l:w-[107px] h-[48px] l:h-[47px] flex items-center justify-center rounded-[10px] border-[1.5px] border-black">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span className="font-bold text-xl leading-[1.17]">:</span>
        <div className="w-[60px] l:w-[107px] h-[48px] l:h-[47px] flex items-center justify-center  rounded-[10px] border-[1.5px] border-black">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
