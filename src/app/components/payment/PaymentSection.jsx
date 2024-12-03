import { useTranslations } from "next-intl";

export default function PaymentSection() {
  const t = useTranslations("Form");
  return (
    <div className="mb-14 md:mb-[18px] w-[317px] mx-auto md:mx-0">
      <h2 className="text-2xl leading-[1.17] font-bold uppercase text-center md:text-start mb-9 md:mb-[25px]">
        {t("secondTitle")}
      </h2>
      <div className="bg-textColorWhite text-black px-[18px] py-[21px] border-gradient-large flex flex-col gap-5">
        <div className="flex justify-between ">
          <p className="text-[15px] leading-[1.17]">{t("price")}</p>
          <p className="line-through text-base leading-[1.17] font-semibold">
            2000 грн
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[15px] leading-[1.17] font-bold">{t("sale")}</p>
          <p className="text-base leading-[1.17] text-[#FF398B] font-bold">
            1000 грн
          </p>
        </div>
        <hr className="w-full h-[1px] bg-[#A0A0A0]" />
        <div className="flex justify-between">
          <p className="text-[15px] leading-[1.17]">{t("priceAfter")}</p>
          <p className="text-base leading-[1.17] font-semibold">1000 грн</p>
        </div>
      </div>
    </div>
  );
}
