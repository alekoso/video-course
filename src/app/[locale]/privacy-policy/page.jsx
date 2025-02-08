import { useTranslations } from "next-intl";
import Container from "../../../utils/Container";
import Link from "next/link";

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");
  return (
    <Container>
      <div className="px-10 lg:pl-20 pt-6 lg:pt-10 pb-[76px] lg:pb-[200px] ">
        <p
          dangerouslySetInnerHTML={{ __html: t("paragraph") }}
          className="inline mr-1"
        />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.alekocourse.com/"}
          className="underline inline"
        >
          {t("link")} (https://www.alekocourse.com/)
        </Link>
        <p
          dangerouslySetInnerHTML={{ __html: t("paragraph2") }}
          className="inline mr-1"
        />
        <p
          dangerouslySetInnerHTML={{ __html: t("paragraph3") }}
          className="inline mr-1"
        />
        <Link href={"mailto:aleko.you@gmail.com"} className="underline inline">
          {t("mail")}
        </Link>
        <p
          dangerouslySetInnerHTML={{ __html: t("txtAfterMail") }}
          className="inline mr-1"
        />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://t.me/aleko_ua"}
          className="underline inline"
        >
          {t("telegram")}
        </Link>
        <p
          dangerouslySetInnerHTML={{ __html: t("txtAfterTelegram") }}
          className="inline mr-1"
        />
        <p dangerouslySetInnerHTML={{ __html: t("paragraph4") }} />
      </div>
    </Container>
  );
}
