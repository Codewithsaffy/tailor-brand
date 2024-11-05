import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WatsappButton = () => {
  return (
    <Link
      href={"https://wa.me/923453155319"}
      target="_blank"
      className="h-10 w-10 rounded-full  hover:scale-105 flex fixed z-10 bottom-4 right-4 justify-center bg-green-500/50 backdrop-blur-sm items-center"
    >
      <FaWhatsapp className="text-white h-8 w-8" />
    </Link>
  );
};

export default WatsappButton;
