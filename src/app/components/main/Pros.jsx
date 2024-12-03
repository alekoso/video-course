import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";

import CardWithBorderGradientAndMarker from "../main/common/CardWithBorderGradientAndMarker";

export default function Pros() {
  const t = useTranslations("Pros");

  const items = Object.values({
    item1: t("item1"),
    item2: t("item2"),
    item3: t("item3"),
    item4: t("item4"),
    item5: t("item5"),
    item6: t("item6"),
  });
  return (
    <Container>
      <div id="advantages" className="px-10 lg:px-20 pb-[76px] lg:pb-[200px]">
        <h2 className="mb-7 l:mb-[50px] uppercase font-bold text-2xl leading-[1.17] md:text-4xl md:leading-[1.17] l:text-5xl l:leading-[1.17] text-center">
          {t("title")}
        </h2>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 l:grid-cols-3 sm:flex-wrap justify-center md:gap-5">
          {items.map((pros, index) => (
            <CardWithBorderGradientAndMarker text={pros} key={index} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
