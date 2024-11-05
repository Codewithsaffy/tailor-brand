import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "../ui/button";
import { ImageCarousel } from "../cusom/crausel";
import Link from "next/link";
import Revel from "@/lib/motion/reavel";

const Hero = () => {
  const t = useTranslations("HeroSection");
  return (
    <section className="min-h-[calc(100vh-56px)] overflow-hidden  bg-gradient-to-r from-[#2a4d00] to-[#1a2a00] relative px-4 sm:px-24 w-screen text-white  gap-6  pb-12 flex flex-col-reverse sm:flex-row justify-between items-center">
      <div className="space-y-4 w-full sm:w-1/2 ">
        <Revel>
          <h1 className="text-3xl sm:text-5xl text-[#F2F2F2] font-bold">
            {t("title")}
          </h1>
        </Revel>
        <Revel>
        <p className="text-[#D1D5DB] text-lg">{t("para")}</p>
        </Revel>
        <Revel>
        <Button className="bg-[#f9b53a] hover:bg-[#f7a52c] text-[#2a4d00] transition duration-200">
          <Link href={"/contact"} className="">
            Order Now
          </Link>
        </Button>
        </Revel>
      </div>

        <Revel>
      <div className="relative h-1/2 flex justify-center ">
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
