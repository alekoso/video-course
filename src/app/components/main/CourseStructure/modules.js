import { useTranslations } from "next-intl";

export const useModules = () => {
  const t = useTranslations("CourseStructure");

  const modules = Object.values({
    module1: {
      title: t("module1.title"),
      num: t("module1.num"),
      free: false,
      tabs: [
        {
          name: t("module1.tabs.tab1.name"),
          url: t("module1.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module1.tabs.tab2.name"),
          url: t("module1.tabs.tab2.url"),
          pro: true,
          free: false,
        },
        {
          name: t("module1.tabs.tab3.name"),
          url: t("module1.tabs.tab3.url"),
          free: false,
        },
      ],
    },
    module2: {
      title: t("module2.title"),
      num: t("module2.num"),
      free: false,
      tabs: [
        {
          name: t("module2.tabs.tab1.name"),
          url: t("module2.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module2.tabs.tab2.name"),
          url: t("module2.tabs.tab2.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module2.tabs.tab3.name"),
          url: t("module2.tabs.tab3.url"),
          pro: false,
          free: false,
        },
      ],
    },
    module3: {
      title: t("module3.title"),
      num: t("module3.num"),
      free: false,
      tabs: [
        {
          name: t("module3.tabs.tab1.name"),
          url: t("module3.tabs.tab1.url"),
          free: false,
        },
        {
          name: t("module3.tabs.tab2.name"),
          url: t("module3.tabs.tab2.url"),
          free: false,
        },
      ],
    },
    module4: {
      title: t("module4.title"),
      num: t("module4.num"),
      free: false,
      tabs: [
        {
          name: t("module4.tabs.tab1.name"),
          url: t("module4.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab2.name"),
          url: t("module4.tabs.tab2.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab3.name"),
          url: t("module4.tabs.tab3.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab4.name"),
          url: t("module4.tabs.tab4.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab5.name"),
          url: t("module4.tabs.tab5.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab6.name"),
          url: t("module4.tabs.tab6.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab7.name"),
          url: t("module4.tabs.tab7.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab8.name"),
          url: t("module4.tabs.tab8.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab9.name"),
          url: t("module4.tabs.tab9.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab10.name"),
          url: t("module4.tabs.tab10.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab11.name"),
          url: t("module4.tabs.tab11.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab12.name"),
          url: t("module4.tabs.tab12.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab13.name"),
          url: t("module4.tabs.tab13.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab14.name"),
          url: t("module4.tabs.tab14.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module4.tabs.tab15.name"),
          url: t("module4.tabs.tab15.url"),
          pro: false,
          free: false,
        },
      ],
    },
    module5: {
      title: t("module5.title"),
      num: t("module5.num"),
      free: false,
      tabs: [
        {
          name: t("module5.tabs.tab1.name"),
          url: t("module5.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module5.tabs.tab2.name"),
          url: t("module5.tabs.tab2.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module5.tabs.tab3.name"),
          url: t("module5.tabs.tab3.url"),
          pro: false,
          free: false,
        },
      ],
    },
    module6: {
      title: t("module6.title"),
      num: t("module6.num"),
      free: false,
      tabs: [
        {
          name: t("module6.tabs.tab1.name"),
          url: t("module6.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module6.tabs.tab2.name"),
          url: t("module6.tabs.tab2.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module6.tabs.tab3.name"),
          url: t("module6.tabs.tab3.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module6.tabs.tab4.name"),
          url: t("module6.tabs.tab4.url"),
          pro: false,
          free: false,
        },
      ],
    },
    module7: {
      title: t("module7.title"),
      num: t("module7.num"),
      free: true,
      tabs: [
        {
          name: t("module7.tabs.tab1.name"),
          url: t("module7.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module7.tabs.tab2.name"),
          url: t("module7.tabs.tab2.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module7.tabs.tab3.name"),
          url: t("module7.tabs.tab3.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module7.tabs.tab4.name"),
          url: t("module7.tabs.tab4.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module7.tabs.tab5.name"),
          url: t("module7.tabs.tab5.url"),
          pro: false,
          free: true,
        },
      ],
    },
    module8: {
      title: t("module8.title"),
      num: t("module8.num"),
      free: false,
      tabs: [
        {
          name: t("module8.tabs.tab1.name"),
          url: t("module8.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module8.tabs.tab2.name"),
          url: t("module8.tabs.tab2.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module8.tabs.tab3.name"),
          url: t("module8.tabs.tab3.url"),
          pro: false,
          free: false,
        },
      ],
    },
    module9: {
      title: t("module9.title"),
      num: t("module9.num"),
      free: false,
      tabs: [
        {
          name: t("module9.tabs.tab1.name"),
          url: t("module9.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module9.tabs.tab2.name"),
          url: t("module9.tabs.tab2.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module9.tabs.tab3.name"),
          url: t("module9.tabs.tab3.url"),
          pro: false,
          free: false,
        },
      ],
    },
    module10: {
      title: t("module10.title"),
      num: t("module10.num"),
      free: false,
      tabs: [
        {
          name: t("module10.tabs.tab1.name"),
          url: t("module10.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module10.tabs.tab2.name"),
          url: t("module10.tabs.tab2.url"),
          pro: false,
          free: false,
        },
      ],
    },
    module11: {
      title: t("module11.title"),
      num: t("module11.num"),
      free: false,
      tabs: [
        {
          name: t("module11.tabs.tab1.name"),
          url: t("module11.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module11.tabs.tab2.name"),
          url: t("module11.tabs.tab2.url"),
          pro: false,
          free: false,
        },
      ],
    },
    module12: {
      title: t("module12.title"),
      num: t("module12.num"),
      free: false,
      tabs: [
        {
          name: t("module12.tabs.tab1.name"),
          url: t("module12.tabs.tab1.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module12.tabs.tab2.name"),
          url: t("module12.tabs.tab2.url"),
          pro: false,
          free: false,
        },
        {
          name: t("module12.tabs.tab3.name"),
          url: t("module12.tabs.tab3.url"),
          pro: false,
          free: false,
        },
      ],
    },
  });

  return modules;
};
