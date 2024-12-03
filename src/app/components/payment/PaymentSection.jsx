import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function PaymentSection() {
  const [plan, setPlan] = useState(null);
  const [oldPrice, setOldPrice] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [sale, setSale] = useState(0);

  useEffect(() => {
    const savedPlan = localStorage.getItem("selectedPlan");
    if (savedPlan) {
      setPlan(savedPlan);
      calculatePrices(savedPlan);
    }
  }, []);

  const calculatePrices = (plan) => {
    let oldPrice = 0;
    let newPrice = 0;
    let sale = 0;

    switch (plan) {
      case "base":
        oldPrice = 200;
        newPrice = 99;
        sale = 50;
        break;
      case "pro":
        oldPrice = 300;
        newPrice = 149;
        sale = 50;
        break;
      case "expert":
        oldPrice = 500;
        newPrice = 299;
        sale = 40;
        break;
      default:
        break;
    }

    setOldPrice(oldPrice);
    setNewPrice(newPrice);
    setSale(sale);
  };

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
            {oldPrice} $
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[15px] leading-[1.17] font-bold">{t("sale")}</p>
          <p className="text-base leading-[1.17] text-[#FF398B] font-bold">
            {sale} %
          </p>
        </div>
        <hr className="w-full h-[1px] bg-[#A0A0A0]" />
        <div className="flex justify-between">
          <p className="text-[15px] leading-[1.17]">{t("priceAfter")}</p>
          <p className="text-base leading-[1.17] font-semibold">{newPrice} $</p>
        </div>
      </div>
    </div>
  );
}
