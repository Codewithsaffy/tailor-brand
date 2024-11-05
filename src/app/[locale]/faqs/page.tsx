"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useTranslations } from "next-intl";

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

function Accordion({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left text-gray-800 font-medium hover:bg-gray-100 transition-colors duration-300"
      >
        <span>{question}</span>
        <span className="text-gray-600">
          {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 text-sm text-gray-600">{children}</div>
      )}
    </div>
  );
}
