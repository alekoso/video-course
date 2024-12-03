import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import PurchaseBtn from "./common/PurchaseBtn";

export default function HowCreateContent() {
  const t = useTranslations("HowCreateContent");

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
              <span className="gradient-secondary-text">{t("colorTitle")}</span>
            </h2>

            <p className="text-sm leading-[1.17] font-medium md:text-2xl md:leading-[1.17] mb-[62px] l:mb-[44px] text-center">
              {t("description")}
            </p>
          </div>
          {/* /text */}

          <div className="w-[268px] md:w-[534px] flex flex-col items-center gap-[10px]">
            <PurchaseBtn textColor="#fff" buttonVariant="largeGradient" />
          </div>
        </div>
        <hr className="absolute w-full h-[1px] border-0 gradient-to-right bottom-0 max-w-[1280px]"></hr>
      </Container>
    </div>
  );
}
