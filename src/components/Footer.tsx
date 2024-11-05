"use client";
import { FiPhone, FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im"; // Spinner icon
import axios from "axios";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Revel from "@/lib/motion/reavel";

export default function Footer() {
  const { toast } = useToast();
  const t = useTranslations("Footer");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send a POST request with just the message
      const response = await axios.post("/api/contact", { message });

      if (response.status === 200) {
        toast({
          description: "Your message has been sent.",
        });
      } else {
        toast({
          description: "Failed to send message.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        description: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setMessage(""); // Clear the message input after submission
    }
  };

  return (
    <Revel>
      <footer className="w-full bg-[#143600] text-[#FAD4C0] py-10 px-6 md:px-20 lg:px-28">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-start space-y-4 fade-in">
            <Image
              src="/images/logo.png"
              className="h-10 w-10 mb-2"
              width={40}
              height={40}
              alt={t("logoTitle")}
            />
            <p className="text-[#D4AF37] font-logo tracking-tight text-lg font-bold">
              {t("logoTitle")}
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Send a Message */}
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-lg font-semibold text-[#D4AF37] fade-in">
              {t("sendMessageTitle")}
            </h2>
            <form onSubmit={handleSubmit} className="relative w-full">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#143600] text-lg" />
              <input
                type="text"
                placeholder={t("sendMessagePlaceholder")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-[#FAD4C0] text-[#143600] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] placeholder-[#143600] placeholder-opacity-75 slide-in"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#143600] hover:text-[#D4AF37] transition-all duration-300"
              >
                {isSubmitting ? (
                  <ImSpinner2 className="text-xl animate-spin" /> // Spinner effect
                ) : (
                  <FiSend className="text-xl" />
                )}
              </button>
            </form>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col items-start space-y-4 fade-in">
            <h2 className="text-lg font-semibold text-[#D4AF37]">
              {t("stayConnectedTitle")}
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#FAD4C0] hover:text-[#D4AF37] transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                <span>{t("whatsapp")}</span>
              </a>
              {/* Phone */}
              <a
                href="tel:+923001234567"
                className="flex items-center space-x-2 text-[#FAD4C0] hover:text-[#D4AF37] transition-all duration-300 hover:scale-105"
              >
                <FiPhone className="text-xl" />
                <span>{t("phone")}</span>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/yourInstagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#FAD4C0] hover:text-[#D4AF37] transition-all duration-300 hover:scale-105"
              >
                <FiInstagram className="text-xl" />
                <span>{t("instagram")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 border-t border-[#FAD4C0] pt-4 text-center text-sm text-[#FAD4C0] fade-in">
          <p>{t("footerBottomText1")}</p>
          <p className="mt-2">{t("footerBottomText2")}</p>
        </div>
      </footer>
    </Revel>
  );
}
