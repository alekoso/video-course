"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function SuccessModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Ваша заявка отправлена
        </ModalHeader>
        <ModalBody>
          <p>Я свяжусь с вами в ближайшее время :)</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" variant="flat" onPress={onClose}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
