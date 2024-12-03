import { useTranslations } from "next-intl";

export const useQuestions = () => {
  const t = useTranslations("Faq");

  const questions = Object.values({
    question1: {
      title: t("question1.title"),
      answer: t("question1.answer"),
    },
    question2: {
      title: t("question2.title"),
      answer: t("question2.answer"),
    },
    question3: {
      title: t("question3.title"),
      answer: t("question3.answer"),
    },
    question4: {
      title: t("question4.title"),
      answer: t("question4.answer"),
    },
    question5: {
      title: t("question5.title"),
      answer: t("question5.answer"),
    },
    question6: {
      title: t("question6.title"),
      answer: t("question6.answer"),
    },
    question7: {
      title: t("question7.title"),
      answer: t("question7.answer"),
    },
    question8: {
      title: t("question8.title"),
      answer: t("question8.answer"),
    },
    question9: {
      title: t("question9.title"),
      answer: t("question9.answer"),
    },
    question10: {
      title: t("question10.title"),
      answer: t("question10.answer"),
    },
    question11: {
      title: t("question11.title"),
      answer: t("question11.answer"),
    },
    question12: {
      title: t("question12.title"),
      answer: t("question12.answer"),
    },
    question13: {
      title: t("question13.title"),
      answer: t("question13.answer"),
    },
    question14: {
      title: t("question14.title"),
      answer: t("question14.answer"),
    },
  });

  return questions;
};
