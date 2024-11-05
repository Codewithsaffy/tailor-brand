import { useTranslations } from "next-intl";
import React from "react";
import ServicesCard from "../cards/ServicesCard";
import Revel from "@/lib/motion/reavel";

const Services = () => {
  const t = useTranslations("ServiceSection");
  const card = t.raw("cards");

  return (
    <section id="services" className="bg-gradient-to-r min-h-[calc(100vh-56px)] from-[#2a4d00] to-[#1a2a00] flex flex-col items-center py-16 px-4 sm:px-24">
        <Revel>
      <div className="text-center mb-12">
        <h1 className="text-3xl mx-auto text-center md:text-4xl font-bold text-[#f2f2f2] mb-4">
          {t("heading")}
        </h1>
        <p className="text-[#9ba698] text-sm md:text-base max-w-2xl text-center mx-auto">
          We offer a wide range of services to help our clients create and
          manage their online presence effectively.
        </p>
      </div>
        </Revel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {card.map((item: any, index: number) => (
        <Revel key={index}>
        <ServicesCard key={index} service={item} />
        </Revel>
        ))}
      </div>
    </section>
  );
};

export default Services;
