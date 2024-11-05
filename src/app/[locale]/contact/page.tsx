import { FiPhone, FiMail, FiMapPin, FiLink } from "react-icons/fi";
import Form from "./Form";
import { Metadata } from "next";
import Revel from "@/lib/motion/reavel";
export default function ContactPage() {
  

  return (
    <div className="min-h-[calc(100vh-56px)] bg-gradient-to-b from-[#1a2a00] to-[#2a4d00] flex items-center justify-center px-4 py-8">
      <div className="bg-[#F2F2F2] text-[#1a2a00] w-full max-w-md p-6 rounded-lg shadow-lg space-y-6 fade-in">
        {/* Contact Heading */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
            <p className="text-sm text-[#2a4d00]">
              We&apos;d love to hear from you!
            </p>
          </div>
          {/* Contact Form */}
          <Form/>

        {/* Contact Info */}
          <div className="text-center text-[#2a4d00] mt-6 space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <FiMapPin className="hover:text-[#f9b53a] hover:scale-110 transition-all duration-300" />
              <p>Near Islamic City Model School, Orangi Town, Karachi</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FiPhone className="hover:text-[#f9b53a] hover:scale-110 transition-all duration-300" />
              <p>+92 345 3155319</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FiMail className="hover:text-[#f9b53a] hover:scale-110 transition-all duration-300" />
              <p>codewithsaffy@gmail.com</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FiLink className="hover:text-[#f9b53a] hover:scale-110 transition-all duration-300" />
              <a
                href="https://dilkushdesign.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f9b53a] hover:underline"
              >
                dilkushdesign.vercel.app
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}



export const metadata: Metadata = {
  title: "Dilkush Design - Rabta Karein, Karachi",
  description: "Dilkush Design se rabta karein aur Orangi Town, Karachi mein apne libas ke hawale se sawalat ya silai ke orders ka poochtaach karein. Hum khawateen ke liye mukhtalif silai aur design options faraham karte hain. Hamare friendly aur professional team se rabta mein rahein aur apne libas ke hawale se mukammal maloomat hasil karein.",
  keywords: "Dilkush Design rabta, Karachi silai, Orangi Town tailoring, khawateen silai, Karachi contact silai, custom tailoring Karachi",
};
