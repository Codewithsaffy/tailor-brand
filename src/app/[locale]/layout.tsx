import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import "../globals.css";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import WatsappButton from "@/components/button/WatsappButton";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Dilkush Design - Khawateen ke liye Premium Silai, Karachi",
    description: "Orangi Town, Karachi mein Dilkush Design par premium aur custom silai ka tajurba hasil karein. Hum khawateen ke libas mein mahir hain, jahan aapko modern aur riwayati designs ke sath mukhtalif aur personal fitting bhi di jati hai. Hamare paas aayein, jahan style aur comfort ka behtareen sangam milta hai."
};
const logo = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-logo",
});
const popins = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${popins.variable} ${logo.variable} relative`}>
        <NextIntlClientProvider messages={messages}>
          <Header lang={locale} />
          <WatsappButton />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}

