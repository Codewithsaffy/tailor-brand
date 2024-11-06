import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "../ui/button";
import { ImageCarousel } from "../cusom/crausel";
import Link from "next/link";
import Revel from "@/lib/motion/reavel";
import Order from "../button/Order";

const Hero = () => {
  const t = useTranslations("HeroSection");

  return (
    <section className="min-h-[calc(100vh-56px)] overflow-hidden bg-gradient-to-r from-[#2a4d00] to-[#1a2a00] relative px-4 sm:px-8 md:px-16 lg:px-24 w-full text-white gap-8 pb-6 sm:pb-8 lg:pb-12 flex flex-col-reverse lg:flex-row  md:justify-between justify-end  items-center">
      {/* Text Container */}
      <div className="space-y-6 h-1/2 sm:h-auto w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <Revel>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-[#F2F2F2] font-bold">
            {t("title")}
          </h1>
        </Revel>
        <Revel>
          <p className="text-[#D1D5DB] text-base sm:text-lg">{t("para")}</p>
        </Revel>
        <Revel>
          <div className="flex justify-center lg:justify-start">
            <Order />
          </div>
        </Revel>
      </div>

      {/* Image/Carousel Container */}
      <Revel>
        <div className="relative h-[60%] sm:h-full lg:h-full w-full flex justify-center items-center">
          {/* Uncomment and adjust the Image component if needed */}
          {/* <Image
            className="rounded-xl shadow-lg"
            src={"/images/herosection/1.webp"}
            alt="hero"
            width={400}
            height={400}
          /> */}
          <ImageCarousel />
        </div>
      </Revel>
    </section>
  );
};

export default Hero;
