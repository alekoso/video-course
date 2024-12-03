import { routes, footerLinks, socialLinks } from "../../utils/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SocLinks from "./main/common/SocLinks";

export default function Footer() {
  const t = useTranslations("Header");
  const f = useTranslations("Footer");
  return (
    <footer className="bg-background  relative z-1">
      <div className="max-w-[1280px] px-10 py-16 lg:pl-20 lg:pr-44 lg:py-[75px] mx-auto w-full flex flex-col gap-[60px] sm:flex-row sm:justify-between items-center">
        <div className="flex flex-col items-center gap-[18px]">
          {/* Логотип */}
          <Link
            href={"/"}
            className="font-bold text-inherit font-sansation uppercase text-[20px] leading-[1.19]"
          >
            Aleko<span className="gradient-text"> Sokurashvili</span>
          </Link>
          {/* соц мережі */}
          <SocLinks socialLinks={socialLinks} />
        </div>

        {/* Ссылки футера */}
        <div className="flex gap-24 md:gap-[116px] sm:justify-between ">
          <ul className="text-textColorWhite text-sm md:text-base leading-[1.17] flex flex-col gap-4">
            {routes.map((route, index) => (
              <li key={index}>
                <Link href={route.path} className="hover:underline">
                  {t(route.name)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Дополнительные ссылки */}
          <ul className="text-textColorWhite text-sm md:text-base leading-[1.17] flex flex-col gap-4">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="hover:underline transition-all duration-300 ease-in-out"
                >
                  {f(link.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
