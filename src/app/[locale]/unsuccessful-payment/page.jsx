import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import like from "../../../../public/icons/like-icon.svg";
import Image from "next/image";
import Link from "next/link";

export default function UnsuccessfulPayment() {
  const t = useTranslations("Unsuccess");

  return (
    <div className="overflow-clip relative bg-black text-white">
      {/* Градієнти mob */}
      <div className="w-[184.357px] h-[173.591px] radial-blue-gradient absolute top-[50%] left-[-131px] transform -translate-y-3/4 md:hidden z-0" />
      <div className="w-[184.357px] h-[173.591px] radial-violet-gradient absolute bottom-[41px] right-[-101px] z-0 md:hidden" />
      {/* /Градієнти mob */}
      {/* Градієнти md */}
      <div className="hidden w-[368.221px] h-[346.719px] radial-violet-gradient-large absolute bottom-[-280px] left-[140px] z-0 md:block" />
      <div className="hidden w-[368.221px] h-[346.719px] radial-blue-gradient-large absolute bottom-[-408px] right-[290px] z-0 md:block" />
      {/* /Градієнти md */}

      <Container>
        <div className="pt-8 pb-8 l:pt-[94px] l:pb-[200px] px-[38px] md:px-0 relative z-1 flex flex-col gap-12 justify-center min-h-[80vh] items-center mx-auto">
          <div>
            <h2 className="text-2xl md:text-[32px] leading-[1.17] font-bold uppercase text-center mb-5">
              {t("title")}
            </h2>
            <p className="text-[18px] leading-[1.17] text-center max-w-[380px] mx-auto">
              {t("description")}
            </p>
          </div>

          <div>
            {/* <p className="text-base leading-[1.17] font-semibold mb-[35px] md:mb-6 text-center">
              {t("info")}
            </p> */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.t.me/aleko_help"}
              className="gradient-to-right rounded-[9999px] w-[317px] h-[50px] flex justify-center items-center mx-auto"
            >
              {t("btn")}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
