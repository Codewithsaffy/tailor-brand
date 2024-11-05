import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import "../globals.css";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import WatsappButton from "@/components/button/WatsappButton";
import { Toaster } from "@/components/ui/toaster";

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
        <Toaster/>
      </body>
    </html>
  );
}
