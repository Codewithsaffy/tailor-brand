import HeroSection from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Testinomial from "@/components/sections/Testinomial";
import { Metadata } from "next";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutUs />
      <Services />
      <Testinomial />
    </main>
  );
}


export const metadata: Metadata = {
  title: "Dilkush Design - Khawateen ke liye Premium Silai, Karachi",
  description: "Orangi Town, Karachi mein Dilkush Design par premium aur custom silai ka tajurba hasil karein. Hum khawateen ke libas mein mahir hain, jahan aapko modern aur riwayati designs ke sath mukhtalif aur personal fitting bhi di jati hai. Hamare paas aayein, jahan style aur comfort ka behtareen sangam milta hai.",
  keywords: "Dilkush Design, khawateen silai, Karachi silai, Orangi Town tailoring, premium silai Karachi, khawateen fashion, modern aur riwayati designs",
};
