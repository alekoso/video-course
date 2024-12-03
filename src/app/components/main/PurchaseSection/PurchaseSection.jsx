import Container from "../../../../utils/Container";
import { useTranslations } from "next-intl";
import TimerBlock from "./TimerBlock";
import PurchaseBtn from "../common/PurchaseBtn";

export default function PurchaseSection() {
  const t = useTranslations("PurchaseSection");

  return (
    <div className="overflow-x-clip relative ">
      {/* градієнт mob */}
      <div className="w-[184.357px] h-[173.591px] radial-blue-gradient absolute top-[-61px] left-[-103px] md:hidden z-0" />
      {/* /градієнт mob */}

      {/* градієнти від sm */}
      <div className="hidden w-[368.221px] h-[346.719px] radial-violet-gradient-large absolute top-[50%] transform -translate-x-1/2 right-[-78px] z-0 md:block" />
      <div className="hidden w-[368.221px] h-[346.719px] radial-blue-gradient-large absolute top-[-111px] right-[-154px] z-0 md:block" />
      {/* /градієнти від sm */}

      <div className="overflow-y-clip relative pb-[76px] lg:pb-[200px]">
        {/* градієнти від sm прихований низ*/}
        <div className="hidden w-[368.221px] h-[346.719px] radial-violet-gradient-large absolute bottom-[-302px] left-[140px] z-0 md:block" />
        <div className="hidden w-[368.221px] h-[346.719px] radial-blue-gradient-large absolute bottom-[-430px] right-[289px] z-0 md:block" />
        {/* /градієнти від sm прихований низ*/}

        <Container>
          <div className="px-10 lg:px-20">
            <div className="pt-[44px] md:px-5 lg:px-0 pb-[26px] md:py-[60px] bg-textColorWhite rounded-[18px] relative z-1">
              <div className="px-[22px] md:px-0 max-w-[350px] md:max-w-[700px] mx-auto">
                <h2 className="text-textColorBlack text-center uppercase font-bold text-xl md:text-[32px] leading-[1.17] mb-[14px] l:mb-[18px] max-w-[608px] mx-auto">
                  {t("title")}
                </h2>
                <p className="text-textColorBlack text-center text-sm leading-[1.17] md:text-2xl md:leading-[1.17] mb-6 md:mb-[46px]">
                  {t("description")}
                </p>

                <div className="w-[268px] md:w-[534px] flex flex-col items-center gap-[10px] mx-auto">
                  <PurchaseBtn textColor="#fff" buttonVariant="largeGradient" />
                </div>
              </div>

              <TimerBlock text={t("timer")} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
