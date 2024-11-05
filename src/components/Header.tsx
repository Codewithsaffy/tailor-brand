"use client";
import { FiAlignRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LangChange from "./button/LangChange";

export default function Header({ lang }: { lang: string }) {
  const t = useTranslations("Navigation");
  const navLinks = t.raw("navlink");
  const pathname = usePathname(); // Get the current path
  console.log(pathname);
  console.log(navLinks);
  return (
    <header className="flex sticky top-0 z-10 justify-between  items-center w-full h-14 px-4 sm:px-24 bg-[#143600]">
      <nav className="flex items-center space-x-4 sm:space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            className="h-8 w-8 sm:h-10 sm:w-10"
            width={40}
            height={40}
            alt="Dilkush Design"
          />
          <p className="text-[#D4AF37] font-logo tracking-tight text-base sm:text-lg font-bold">
            Dilkush Design
          </p>
        </Link>
        <ul className="hidden md:flex items-center space-x-4">
          {navLinks.map((item: any, index: any) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`text-[#FAD4C0] hover:underline transition duration-200 ${
                  pathname === item.link ? "font-bold underline" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2 sm:gap-6">
        <LangChange ln={lang} />
        <Link href={"https://wa.me/923453155319"} target="_blank">
          <Button className="hidden md:inline-block bg-[#FAD4C0] text-[#143600] hover:bg-[#D4AF37] transition duration-200 px-3 py-1">
            Book Now
          </Button>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <FiAlignRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#FAD4C0]" />
            </SheetTrigger>
            <SheetContent className="p-4 bg-[#143600] text-[#FAD4C0]">
              <SheetHeader>
                <SheetTitle className="text-[#D4AF37] text-lg font-semibold">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col mt-4 space-y-4">
                <ul className="space-y-3">
                  {navLinks.map((item: any, index: any) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className={`hover:underline transition duration-200 ${
                          pathname === item.link ? "font-bold underline" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#FAD4C0] text-[#143600] hover:bg-[#D4AF37] transition duration-200 px-4 py-2">
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
