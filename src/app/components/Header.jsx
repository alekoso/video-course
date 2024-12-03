"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { routes } from "../../utils/routes";
import SelectLang from "./main/common/SelectLang";
import { useTranslations } from "next-intl";
import close from "../../../public/icons/close.svg";
import menu from "../../../public/icons/menu.svg";
import Image from "next/image";
import PurchaseBtn from "./main/common/PurchaseBtn";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations("Header");

  return (
    <Navbar
      maxWidth="xl"
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="px-10 py-7 lg:px-20 md:py-10 custom-navbar max-w-[1280px] mx-auto"
    >
      {/* Брендинг */}
      <NavbarContent>
        <NavbarBrand>
          <Link
            href="/"
            className="font-bold text-inherit font-sansation uppercase text-base l:text-[18px] leading-normal"
          >
            <p>
              Aleko <span className="gradient-text"> Sokurashvili</span>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Навигационные ссылки для десктопа */}

      <NavbarContent
        className="justify-between gap-[20px] sm:gap-5 l:gap-12 lg:gap-[60px]"
        justify="end"
      >
        <NavbarContent
          className="hidden sm:flex gap-4 lg:gap-7 font-medium"
          justify="end"
        >
          {routes.map((route) => (
            <NavbarItem key={route.path}>
              <Link
                color="foreground"
                className="text-sm md:text-base"
                href={route.path}
              >
                {t(route.name)}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Компонент перемикача мов */}
        <NavbarItem>
          <SelectLang />
        </NavbarItem>
        <NavbarItem className="hidden l:flex">
          <PurchaseBtn textColor="#fff" />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden w-[35px] h-[35px]"
          icon={
            isMenuOpen ? (
              <Image
                src={close}
                alt="close icon"
                className="w-[32px] h-[32px]"
              />
            ) : (
              <Image src={menu} alt="menu icon" className="w-[35px] h-[35px]" />
            )
          }
        />
      </NavbarContent>

      {/* Бургер-меню */}
      <NavbarMenu className="bg-background mt-[-9px] pt-[58.75px] px-10 flex flex-col gap-[30px] overflow-hidden mb-7 h-[100vh]">
        {routes.map((route) => (
          <NavbarMenuItem key={route.path}>
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="w-full flex flex-col gap-[18px] items-start text-textColorWhite text-xl leading-normal font-medium"
              href={route.path}
              size="lg"
            >
              {t(route.name)}
              <hr className="w-full h-[1.5px] border-0 gradient-to-right" />
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="w-[184.357px] h-[173.591px] radial-blue-gradient absolute bottom-24 left-[-164px]" />

        <div className="w-[184.357px] h-[173.591px] radial-violet-gradient absolute bottom-[-101px] right-[-64px]" />
      </NavbarMenu>
    </Navbar>
  );
}
