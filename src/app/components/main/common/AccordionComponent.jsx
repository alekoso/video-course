"use client";

import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import indicator from "../../../../../public/icons/arrow-circle-right.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AccordionComponent({
  data,
  variant,
  defaultExpandedKeys = [],
}) {
  const f = useTranslations("Free");

  return (
    <Accordion className="accordion" defaultExpandedKeys={defaultExpandedKeys}>
      {data.map((item, index) => (
        <AccordionItem
          className="accordion-item p-[20px] md:px-[22px] md:py-8 rounded-xl mb-4 md:mb-[26px] border-gradient-rounded xs:min-w-[313px] relative
              "
          indicator={
            <Image
              src={indicator}
              alt="icon"
              width={20}
              height={20}
              className="l:w-[38px] l:h-[38px]"
            />
          }
          textValue={item.title}
          title={
            <div className="flex gap-4 justify-between sm:mr-[24px]">
              <p className="text-sm leading-[1.17] md:text-xl md:leading-[1.17] l:text-2xl l:leading-[1.17] font-bold uppercase">
                {item.title}
              </p>
              {item.num && (
                <p className="hidden sm:block text-sm leading-[1.17] md:text-xl md:leading-[1.17] l:text-2xl l:leading-[1.17] font-bold uppercase">
                  {item.num}
                </p>
              )}

              {item.free && (
                <div className="absolute top-[-6px] right-[-10px] rounded-[18419.209px] bg-textColorWhite shadow-[0_2px_4px_rgba(0, 0, 0, 0.25)_inset] px-[10px] py-[5px] md:py-[6px] md:px-[14.5px]">
                  <p className="text-[8px] md:text-[10px] leadibg-[1.17] md:leadibg-[1.17] font-bold uppercase gradient-secondary-text">
                    {f("text")}
                  </p>
                </div>
              )}
            </div>
          }
          key={index}
        >
          {variant === "simple" ? (
            <p className="mt-8">{item.answer}</p>
          ) : (
            <Tabs
              defaultSelectedKey={
                index === 6 ? String(item.tabs.length - 1) : "0"
              }
              className="mt-[8px] md:mt-[32px] md:mb-[37px] tabs"
              variant="light"
              aria-label="Tabs"
            >
              {item.tabs.map(({ name, url, pro, free }, index) => (
                <Tab
                  className="tab"
                  key={index}
                  textValue={name}
                  title={
                    <div>
                      <p>{name}</p>

                      {pro && (
                        <div className="absolute top-[-100%] -translate-y-1/2   right-[-9%] l:right-[-18%] rounded-[18419.209px] bg-textColorWhite shadow-[0_2px_4px_rgba(0, 0, 0, 0.25)] w-[42px] md:w-[83px] h-[18px] md:h-[35px] border border-[#7375ff]">
                          <p className="text-[8px] md:text-base leadibg-[1.17] md:leadibg-[1.17] m-auto font-bold uppercase gradient-secondary-text text-center">
                            pro
                          </p>
                        </div>
                      )}

                      {free && (
                        <mark className="absolute top-[-70%] md:top-[-100%] -translate-y-1/2   left-[5%] l:right-[-94%] rounded-[18419.209px] bg-textColorWhite shadow-[0_2px_4px_rgba(0, 0, 0, 0.25)_inset] border border-[#7375ff] py-1 px-2 l:py-[6px] l:px-[14.5px]">
                          <div className="text-[6px] md:text-[10px] leadibg-[1.17] md:leadibg-[1.17] m-auto font-bold uppercase gradient-secondary-text text-center">
                            {f("text")}
                          </div>
                        </mark>
                      )}
                    </div>
                  }
                >
                  {url && (
                    <div className="w-full h-[162px] xs:h-[260px] sm:h-[360px] md:h-[420px] l:h-[535px] rounded-[18px] overflow-hidden mx-auto">
                      <ReactPlayer
                        url={url}
                        light="/image/preview2.png"
                        width="100%"
                        height="100%"
                        controls
                      />
                    </div>
                  )}
                </Tab>
              ))}
            </Tabs>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
