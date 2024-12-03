import Container from "../../../../utils/Container";
import { useTranslations } from "next-intl";
import { useQuestions } from "./questions";
import AccordionComponent from "../../main/common/AccordionComponent";

export default function Faq() {
  const t = useTranslations("Faq");

  const questions = useQuestions();

  return (
    <Container>
      <div
        id="faq"
        className="px-10 md:px-20 pb-[76px] lg:pb-[200px] overflow-x-clip relative"
      >
        {/* gradient mob */}
        <div className="w-[184.357px] h-[173.591px] radial-violet-gradient absolute bottom-[30%] right-[-102px] md:hidden" />
        {/* /gradient mob */}

        <h2 className="mb-7 l:mb-[50px] uppercase font-bold text-2xl leading-[1.17] md:text-4xl md:leading-[1.17] l:text-5xl l:leading-[1.17] text-center mx-auto">
          {t("title")}
        </h2>

        <AccordionComponent data={questions} variant="simple" />
      </div>
    </Container>
  );
}
