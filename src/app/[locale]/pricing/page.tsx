"use client";

import { useTranslations } from "next-intl";
import { FiCheckCircle } from "react-icons/fi";

export default function PricingPage() {
  // const pricingPlans = [
  //   {
  //     title: "Basic",
  //     price: "Rs 1,500",
  //     description: "Ideal for basic tailoring needs.",
  //     features: [
  //       "Standard stitching",
  //       "1-week delivery",
  //       "Free alterations within 7 days",
  //     ],
  //     isPopular: false,
  //   },
  //   {
  //     title: "Premium",
  //     price: "Rs 3,500",
  //     description: "Perfect for custom designs.",
  //     features: [
  //       "Custom designs",
  //       "5-day delivery",
  //       "Priority support",
  //       "Free alterations within 14 days",
  //     ],
  //     isPopular: true,
  //   },
  //   {
  //     title: "Luxury",
  //     price: "Rs 6,000",
  //     description: "Exclusive tailoring experience.",
  //     features: [
  //       "Premium fabrics",
  //       "3-day delivery",
  //       "Dedicated tailor consultation",
  //       "Unlimited free alterations within 30 days",
  //     ],
  //     isPopular: false,
  //   },
  // ];
  const t = useTranslations("PricingPage");
  const pricingPlans = t.raw("plans");

  return (
    <section className="min-h-[calc(100vh-56px)] bg-gradient-to-b from-[#2a4d00] to-[#1a2a00] py-12 px-4 sm:px-8">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-semibold">{t("header")}</h1>
          <p className="mt-2 text-lg">{t("subheader")}</p>
        </div>

      <div className="flex flex-wrap justify-center gap-6">
        {pricingPlans.map((plan: any, index: any) => (
            <div
              key={index}
              className={`w-full max-w-sm p-6 rounded-lg shadow-lg bg-[#F2F2F2] text-[#1a2a00] transform transition-all duration-300 ${
                plan.isPopular ? "scale-105 border-4 border-[#f9b53a]" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="text-center text-sm font-semibold bg-[#f9b53a] text-[#1a2a00] rounded-full px-4 py-1 mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold text-center mb-2">
                {plan.title}
              </h2>
              <p className="text-center text-lg font-semibold mb-4">
                {plan.price}
              </p>
              <p className="text-center text-sm text-[#2a4d00] mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature: any, idx: any) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-[#2a4d00]"
                  >
                    <FiCheckCircle className="text-[#f9b53a] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 bg-[#f9b53a] text-[#1a2a00] font-semibold rounded-lg hover:bg-[#f7a52c] transition-colors duration-300">
                Choose Plan
              </button>
            </div>
        ))}
      </div>
    </section>
  );
}
