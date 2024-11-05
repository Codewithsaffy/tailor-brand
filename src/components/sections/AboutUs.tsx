import Revel from "@/lib/motion/reavel";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  const t = useTranslations("AboutSection");

  return (
    <section
      id="about"
      className="relative z-0 h-full min-h-[calc(100vh-56px)] flex py-20 flex-col lg:flex-row items-center px-4 sm:px-24 bg-[#f3f4ed] text-[#2a4d00] overflow-hidden justify-between"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2a4d00] via-[#3a5c10] to-[#2a4d00] opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-[#1f3a93] to-transparent rounded-full opacity-40 blur-3xl"></div>

      {/* Image Section */}
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg lg:mr-12 mb-8 lg:mb-0 flex justify-center lg:justify-end animate-fadeInLeft">
        <Revel>

        <div className="relative z-10">
          <Image
            src="/images/about.png"
            alt="About Dilkush Design"
            width={450}
            height={450}
            className="rounded-xl  transform transition-transform duration-500 hover:scale-110 object-cover"
            priority
            />
          {/* <div className="absolute inset-0 border-4 border-dashed border-[#f0f4e3] rounded-xl -z-10 transform scale-110"></div> */}
        </div>
            </Revel>
      </div>

      {/* Text Content Section */}
      <div className="relative z-10 max-w-lg text-center lg:text-left space-y-8 animate-fadeInRight">
        <Revel>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2a4d00]">
          {t("title")}
        </h2>
        </Revel>
        <Revel>
        
        <p className="text-lg md:text-xl text-[#3a5c10] leading-relaxed">
          {t("content")}
        </p>
        </Revel>

        {/* Key Points */}
        <div className="flex justify-center lg:justify-start space-x-4">
        <Revel>
          <div className="flex items-center space-x-2 text-[#2a4d00]">
            <FaCheckCircle className="text-[#D4AF37] text-lg" />
            <span>Quality Tailoring</span>
          </div>
        </Revel>
        <Revel>
          <div className="flex items-center space-x-2 text-[#2a4d00]">
            <FaCheckCircle className="text-[#D4AF37] text-lg" />
            <span>Modern Designs</span>
          </div>
        </Revel>
        </div>

        {/* Learn More Button */}
        <Revel>
        <Link href="/services" className="inline-block mt-6 px-8 py-3 bg-[#1F3A93] text-white font-bold rounded-lg shadow-lg hover:bg-[#12316e] transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            Learn More
        </Link>
        </Revel>
      </div>
    </section>
  );
};

export default AboutUs;
