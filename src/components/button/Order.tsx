"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Order = () => {
  const pathname = usePathname().slice(0, 3);
  console.log(pathname);
  return (
    <Button className="bg-[#f9b53a] hover:bg-[#f7a52c] text-[#2a4d00] transition duration-200">
      <Link href={`${pathname}/contact`}>Order Now</Link>
    </Button>
  );
};

export default Order;
