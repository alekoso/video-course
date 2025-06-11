import Container from "../../../../utils/Container";
import { useTranslations } from "next-intl";
import { useModules } from "./modules";
import AccordionComponent from "../../main/common/AccordionComponent";

export default function CourseStructure() {
  const t = useTranslations("CourseStructure");

  const modules = useModules();
  const defaultExpandedKeys = ["0"];

  return (
    <Container>
      <div id="structure" className="px-10 md:px-20 pb-[60px] lg:pb-[174px]">
        <h2 className="mb-7 l:mb-[50px] uppercase font-bold text-2xl leading-[1.17] md:text-4xl md:leading-[1.17] l:text-5xl l:leading-[1.17] text-center mx-auto">
          {t("title")}
        </h2>

        <AccordionComponent
          data={modules}
          defaultExpandedKeys={defaultExpandedKeys}
        />
      </div>
    </Container>
  );
}
