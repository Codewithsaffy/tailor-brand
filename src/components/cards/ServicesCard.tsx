import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface ServicesCardType {
  title: string;
  des: string;
  image: string;
}

const ServicesCard = ({ service }: { service: ServicesCardType }) => {
  return (
    <div className="bg-[#ced6c1] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md p-6 mx-auto text-center flex flex-col items-center border border-gray-200">
      {/* Image Container */}
      <div className="relative w-full h-40 sm:h-48 md:h-52 mb-4 rounded-lg overflow-hidden">
        <Image
          src={service.image}
          alt="services"
          layout="fill"
          objectFit="cover"
          className="rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col items-center text-[#2a4d00]">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg px-3 mb-4 leading-relaxed">
          {service.des}
        </p>
        <button className="mt-4 flex items-center text-[#3d5f15] font-medium group text-sm md:text-base hover:text-blue-800 transition-colors">
          Learn More
          <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-1 duration-200" />
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
