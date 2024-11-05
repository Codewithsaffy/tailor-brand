
import Revel from '@/lib/motion/reavel';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const testimonialsData = [
  {
    name: 'Aisha Khan',
    rating: 5,
    text_en: "Dilkush Design made my bridal dress exactly the way I envisioned it. The fitting was perfect, and every detail was beautifully crafted.",
    text_ur: "دلکش ڈیزائن نے میرے دلہن کے لباس کو بالکل ویسا ہی بنایا جیسا میں نے سوچا تھا۔ فٹنگ بہترین تھی، اور ہر تفصیل خوبصورتی سے تیار کی گئی تھی۔",
  },
  {
    name: 'Sara Ali',
    rating: 5,
    text_en: "Their tailoring for my daughter’s dress was excellent. She loved it, and it fit perfectly. Thank you, Dilkush Design!",
    text_ur: "میری بیٹی کے لباس کے لئے ان کی سلائی بہترین تھی۔ اسے یہ بہت پسند آیا، اور یہ بالکل فٹ آیا۔ شکریہ، دلکش ڈیزائن!",
  },
  {
    name: 'Fatima Ahmed',
    rating: 5,
    text_en: "I had a wonderful experience with their custom dressmaking service. The team helped me choose the right fabric and style.",
    text_ur: "ان کی حسب ضرورت سلائی کی خدمت کے ساتھ میرا تجربہ شاندار رہا۔ ٹیم نے مجھے صحیح کپڑا اور انداز منتخب کرنے میں مدد دی۔",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-0 py-20 flex flex-col items-center px-4 sm:px-24 bg-[#f3f4ed] text-[#2a4d00] overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2a4d00] via-[#3a5c10] to-[#2a4d00] opacity-20"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-[#1f3a93] to-transparent rounded-full opacity-40 blur-3xl"></div>
<Revel>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#2a4d00] mb-12 text-center">
        What Our Clients Say
      </h2>
</Revel>
<Revel>
      <p className="text-lg md:text-xl text-[#3a5c10] mb-8 text-center">
        ہمارے کلائنٹس کیا کہتے ہیں
      </p>
</Revel>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        {testimonialsData.map((testimonial, index) => (
          <Revel key={index}>
          <div
            key={index}
            className={`relative p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 ${
              index % 2 === 0 ? 'rotate-1' : '-rotate-1'
            }`}
          >
            {/* Star Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <AiFillStar key={i} className="text-[#D4AF37] text-lg" />
              ))}
            </div>
            {/* Testimonial Text */}
            <p className="text-gray-700 italic mb-2">
              {testimonial.text_en}
            </p>
            <p className="text-gray-700 italic text-right">
              {testimonial.text_ur}
            </p>
            {/* Client Name */}
            <p className="mt-4 font-semibold text-[#2a4d00]">
              - {testimonial.name}
            </p>
          </div>
        </Revel>
        ))}
      </div>
    </section>
  );
}
