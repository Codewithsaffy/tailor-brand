// components/Testimonials.js

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
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        What Our Clients Say
      </h2>
      <p className="text-lg font-medium text-gray-600 mb-12">
        ہمارے کلائنٹس کیا کہتے ہیں
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 bg-white shadow-lg rounded-lg transform transition duration-500 ${
              index % 2 === 0 ? 'rotate-1' : '-rotate-1'
            }`}
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <AiFillStar key={i} className="text-yellow-500 text-xl" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-2">
              {testimonial.text_en}
            </p>
            <p className="text-gray-700 italic text-right">
              {testimonial.text_ur}
            </p>
            <p className="mt-4 font-semibold text-gray-800">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
