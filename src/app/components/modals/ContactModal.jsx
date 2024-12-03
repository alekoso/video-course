"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import SuccessModal from "./SuccessModal";
import { sendMessage } from "../../../utils/sendMessage";
import { useTranslations } from "next-intl";

export default function ContactModal({
  buttonVariant = "default",
  btnBg = "#fff",
  textColor = "#0C0117",
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const t = useTranslations("ModalBtn");
  const f = useTranslations("Tariffs");
  const btnText = t("btnText");
  const btnTextSmall = f("button");

  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      setStatus("Введите сообщение!");
      return;
    }

    try {
      const result = await sendMessage(`Сообщение: ${inputValue}`);
      if (result.success) {
        setIsModalOpen(true);
        onClose();
        setInputValue("");
      } else {
        setStatus(`Ошибка: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Ошибка отправки: ${error.message}`);
    }
  };

  const buttonClasses =
    buttonVariant === "large"
      ? "w-[313px] md:w-full h-[60px] lg:h-[74px] rounded-[18419.209px] bg-textColorWhite text-black text-sm lg:text-[22px]  font-semibold shadow-[4px_6px_10px_4px_rgba(167,93,243,0.20)_inset] relative"
      : buttonVariant === "largeGradient"
      ? "w-full h-[60px] lg:h-[74px] rounded-[40px] btnGradient text-sm lg:text-[22px] font-semibold relative"
      : buttonVariant === "small"
      ? "w-full rounded-[52.321px] h-[47px] lg:h-[57px] md:text-base font-semibold"
      : "lg:w-[190px] h-10 px-4 py-[10px] rounded-[9999px] gradient-to-right text-textColorWhite text-xs font-semibold leading-relaxed";

  return (
    <>
      <Button
        onClick={onOpen}
        style={{ backgroundColor: btnBg, color: textColor }}
        className={buttonClasses}
      >
        {buttonVariant === "small" ? btnTextSmall : btnText}

        {(buttonVariant === "large" || buttonVariant === "largeGradient") && (
          <div className="absolute w-[59px] h-[60px] lg:w-[74px] lg:h-[74px] rounded-[37px] bg-[#FF4A77] top-0 right-0 flex justify-center items-center">
            <p className="text-textColorWhite text-xl font-semibold leading-tight lg:text-2xl lg:leading-normal">
              -50%
            </p>
          </div>
        )}
      </Button>
      {buttonVariant === "largeGradient" && (
        <div className="flex items-center gap-4">
          <p className="text-[#FF4A77] text-xl font-semibold leading-[1.84] lg:text-2xl lg:leading-[1.53]">
            1000 грн
          </p>
          <p className="text-[#959595] font-semibold text-sm line-through leading-[2.63] md:text-base md:leading-[2.3]">
            2000грн
          </p>
        </div>
      )}
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <ModalHeader>Форма связи</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Введите сообщение"
              variant="bordered"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {status && <p className="text-red-500 text-sm mt-2">{status}</p>}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onClick={onClose}>
              Закрыть
            </Button>
            <Button color="primary" onClick={handleSendMessage}>
              Отправить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
