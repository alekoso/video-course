"use client";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import PurchaseBtn from "./common/PurchaseBtn";
import { useRouter } from "next/navigation";

export default function Tariffs() {
  const router = useRouter();
  const t = useTranslations("Tariffs");

  const basePoints = Object.values({
    item1: t("base.point1"),
    item2: t("base.point2"),
  });

  const proPoints = Object.values({
    item1: t("pro.point1"),
    item2: t("pro.point2"),
    item3: t("pro.point3"),
    item4: t("pro.point4"),
  });

  const expertPoints = Object.values({
    item1: t("expert.point1"),
    item2: t("expert.point2"),
    item3: t("expert.point3"),
    item4: t("expert.point4"),
  });

  const handleClick = (plan) => {
    localStorage.setItem("selectedPlan", plan);
    router.push(`/payment`);
  };

  return (
    <Container>
      <div className="px-10 l:px-20 pb-[76px] l:pb-[200px]">
        <h2 className="mb-7 l:mb-[79px] uppercase font-bold text-2xl leading-[1.17] md:text-4xl md:leading-[1.17] l:text-5xl l:leading-[1.17] text-center mx-auto">
          {t("title")}
        </h2>

        <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center md:gap-[26px] l:gap-5">
          <li className="p-8 px-6 lg:px-9 lg:pt-9 rounded-[28px] w-[313px] h-[467px] l:h-[465px] lg:w-[360px] shadow-[4px_6px_10px_4px_rgba(167,93,243,0.20)_inset] relative overflow-hidden mb-[47px] md:mb-0 flex flex-col justify-between">
            {/* gradient */}
            <div className="w-[184.357px] h-[173.591px] radial-violet-gradient absolute top-[-67px] right-[-162px] " />

            <div className="w-[184.357px] h-[173.591px] radial-blue-gradient absolute bottom-[-133px]  left-[-46px]" />
            {/* /gradient */}

            <div>
              <h3 className="text-textColorWhite uppercase font-semibold text-base leading-[1.17] lg:text-xl lg:leading-[1.17] mb-[29px] lg:mb-[33px]">
                {t("base.title")}
              </h3>

              <div className="flex items-end gap-[22px] mb-[29px]">
                <p className="font-manrope text-[64px] font-bold uppercase leading-[1.17] lg:text-[74px] lg:leading-[1.17]">
                  99{"\u00A0"}$
                </p>
                <p className="font-manrope text-xl font-bold uppercase leading-[1.17] line-through">
                  {"\u00A0\u00A0"}200${"\u00A0\u00A0"}
                </p>
              </div>

              <ul className="flex flex-col gap-[14px]">
                {basePoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-[8px]">
                    <div className="w-5 h-5 bg-textColorWhite rounded-[50%] flex-shrink-0" />
                    <p className="uppercase font-semibold text-base leading-[1.17]">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <PurchaseBtn
              onClick={() => {
                handleClick("base");
              }}
              discount={false}
              buttonVariant="small"
              btnBg="#fff"
              textColor="#0C0117"
            />
          </li>

          <li className="p-8 px-6 lg:px-9 lg:pt-9 rounded-[28px] w-[313px] h-[467px] l:h-[465px] lg:w-[360px] shadow-[4px_6px_10px_4px_rgba(167,93,243,0.20)_inset] relative mb-[26px] md:mb-0 flex flex-col justify-between bg-textColorWhite text-textColorBlack gradient-background">
            {/* Best seller */}
            <div className="absolute top-[-21px] right-[50%] transform translate-x-1/2  h-[42px] w-[169px] gradient-diagonal flex justify-center items-center rounded-[18px] shadow-[0px_4px_16px_1px_rgba(0,0,0,0.25)]">
              <p className="text-textColorWhite uppercase text-base leading-[1.17] font-bold">
                Best seller
              </p>
            </div>
            {/* /Best seller */}
            <div>
              <div className="flex justify-between items-center mb-[29px] lg:mb-[18px]">
                <h3 className="uppercase font-semibold text-base leading-[1.17] lg:text-xl lg:leading-[1.17]">
                  {t("pro.title")}
                </h3>
                <div className="bg-textColorBlack rounded-[30px] py-[10px] px-[34px] lg:w-[119px]">
                  <p className="gradient-secondary-text text-base leading-[1.17] uppercase font-bold">
                    PRO
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-[22px]  mb-[29px]">
                <p className="font-manrope text-[64px] font-bold uppercase leading-[1.17] lg:text-[74px] lg:leading-[1.17]">
                  149{"\u00A0"}$
                </p>
                <p className="font-manrope text-xl font-bold uppercase leading-[1.17] line-through">
                  {"\u00A0\u00A0"}300${"\u00A0\u00A0"}
                </p>
              </div>

              <ul className="flex flex-col gap-[14px]">
                {proPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-[8px]">
                    <div className="w-5 h-5 bg-textColorBlack rounded-[50%] flex-shrink-0" />
                    <p className="uppercase font-semibold text-base leading-[1.17]">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <PurchaseBtn
              onClick={() => {
                handleClick("pro");
              }}
              discount={false}
              buttonVariant="small"
              btnBg="#0C0117"
              textColor="#fff"
              isBlicking={true}
            />
          </li>

          <li className="p-8 px-6 lg:px-9 lg:pt-9 rounded-[28px] w-[313px] h-[467px] l:h-[465px] lg:w-[360px] shadow-[4px_6px_10px_4px_rgba(167,93,243,0.20)_inset] gradient-tariff flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-[29px] lg:mb-[18px]">
                <h3 className="uppercase font-semibold text-base leading-[1.17] lg:text-xl lg:leading-[1.17] ">
                  {t("expert.title")}
                </h3>
                <div className="bg-textColorWhite rounded-[30px] py-[10px] px-[34px]">
                  <p className="gradient-secondary-text text-base leading-[1.17] uppercase font-bold">
                    expert
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-[22px]  mb-[29px]">
                <p className="font-manrope text-[64px] font-bold uppercase leading-[1.17] lg:text-[74px] lg:leading-[1.17]">
                  299{"\u00A0"}$
                </p>
                <p className="font-manrope text-xl font-bold uppercase leading-[1.17] line-through">
                  {"\u00A0\u00A0"}500${"\u00A0\u00A0"}
                </p>
              </div>

              <ul className="flex flex-col gap-[14px]">
                {expertPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-[8px]">
                    <div className="w-5 h-5 bg-textColorWhite rounded-[50%] flex-shrink-0" />
                    <p className="uppercase font-semibold text-base leading-[1.187]">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <PurchaseBtn
              onClick={() => {
                handleClick("expert");
              }}
              discount={false}
              buttonVariant="small"
            />
          </li>
        </ul>
      </div>
    </Container>
  );
}
