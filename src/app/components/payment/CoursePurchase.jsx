"use client";
import PaymentSection from "./PaymentSection";
import Container from "../../../utils/Container";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Input } from "@nextui-org/react";
import cardSvg from "../../../../public/icons/card.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CoursePurchase() {
  const t = useTranslations("Form");
  const router = useRouter();
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    email: "",
  });

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleChange = (field, value) => {
    if (field === "email") {
      validateEmail(value);
    }
    handleFormChange(field, value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Невірний формат email");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = () => {
    if (!formData.email || !validateEmail(formData.email)) {
      alert("Enter email");
      return;
    }

    console.log(formData);
    setFormData({
      name: "",
      telegram: "",
      email: "",
    });
    router.push("/successful-payment");
  };

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
        <div className="pt-8 pb-8 l:pt-[94px] l:pb-[200px] px-[38px] l:px-20 relative z-1 md:flex md:gap-20 l:gap-[136px]">
          <div className="w-[310px] mx-auto md:mx-0">
            <h2 className="text-2xl leading-[1.17] font-bold uppercase text-center mb-9">
              {t("title")}
            </h2>
            <div className="flex flex-col gap-[18px] mb-14">
              <Input
                radius="sm"
                placeholder={t("name")}
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                size="lg"
                className="text-base font-semibold custom-input"
              />

              <Input
                radius="sm"
                placeholder={t("telegram")}
                value={formData.telegram}
                onChange={(e) => handleChange("telegram", e.target.value)}
                size="lg"
                className="text-base font-semibold custom-input"
              />

              <Input
                radius="sm"
                isRequired
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                size="lg"
                className={`text-base font-semibold custom-input`}
                status={emailError ? "error" : "default"}
              />
            </div>
          </div>
          <div>
            <PaymentSection />

            <Button
              onClick={handleSubmit}
              className="mx-auto md:mx-0 w-[317px] h-[50px] border-gradient-large rounded-xl flex justify-center items-center gap-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-textColorWhite text-textColorBlack"
            >
              <Image src={cardSvg} alt="icon" width={20} height={20} />
              <p className="text-sm leading-[1.42] font-semibold">
                {t("card")}
              </p>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
