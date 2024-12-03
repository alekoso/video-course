"use client";
import Image from "next/image";
import marker from "../../../../../public/icons/gradient-circle.svg";

export default function CardWithBorderGradientAndMarker({
  index,
  text,
  variant = "default",
}) {
  const widthClasses =
    variant === "variableWidth"
      ? `${index >= 6 ? "sm:w-[83%]" : "sm:w-[40%]"} ${
          index === 6 ? "l:w-[100%]" : "l:w-[32%]"
        } ${index >= 4 ? "lg:w-[32.12%]" : "lg:w-[23.66%]"}`
      : "lg:max-w-[360px]";

  return (
    <li
      className={`gradient-to-right rounded-xl p-[1px] flex justify-center items-center ${widthClasses} lg:h-[113px]`}
    >
      <div className="w-full h-full rounded-xl bg-background p-8 sm:p-5 flex items-center gap-3 md:gap-5">
        <Image src={marker} alt="icon" width={28} height={28} />
        <p className="text-sm leading-[1.17] l:text-base l:leading-[1.17]">
          {text}
        </p>
      </div>
    </li>
  );
}
