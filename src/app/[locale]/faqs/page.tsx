import type { Metadata } from "next";

import { useTranslations } from "next-intl";
import { Accordion } from "./Accordion";

export default function FAQPage() {
  const t = useTranslations("faq");
  const faqs = t.raw("questions");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12 px-6 sm:px-20 lg:px-40 text-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        {t("title")}
      </h1>

      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq: any, index: any) => (
          <Accordion key={index} question={faq.question}>
            {faq.answer}
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Dilkush Design FAQs - Karachi Tailoring & Custom Silai Sawalat",
  description:
    "Dilkush Design ke FAQs mein Karachi mein premium silai, khawateen ke liye custom tailoring, design options aur fitting ke hawale se aapke sawalat ke jawabat hain. Hamare silai aur designing services ke mutaliq tafseelat hasil karein.",
  keywords:
    "Dilkush Design FAQs, Karachi silai sawalat, tailoring questions, khawateen silai Karachi, custom silai, Karachi tailoring guide, premium tailoring Karachi, silai aur designing maloomat, Orangi Town tailoring services",
};
