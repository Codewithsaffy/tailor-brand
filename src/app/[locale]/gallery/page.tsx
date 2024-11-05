import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/images/services/ser1.jpeg",
      alt: "Gallery Image 1",
    },
    {
      id: 2,
      type: "image",
      src: "/images/services/ser1.jpeg",
      alt: "Gallery Image 2",
    },
    {
      id: 3,
      type: "video",
      src: "/video.mp4",
      alt: "Gallery Video 1",
    },
    {
      id: 4,
      type: "image",
      src: "/images/services/ser1.jpeg",
      alt: "Gallery Image 3",
    },
    {
      id: 5,
      type: "video",
      src: "/video.mp4",
      alt: "Gallery Video 2",
    },
    {
      id: 6,
      type: "image",
      src: "/images/services/ser1.jpeg",
      alt: "Gallery Image 4",
    },
  ];

  return (
    <section className="min-h-[calc(100vh-56px)] bg-gradient-to-b from-[#2a4d00] to-[#1a2a00] py-12 px-4 sm:px-8 text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold">Gallery</h1>
          <p className="mt-2 text-lg">
            Explore our work through images and videos
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-lg font-semibold">
                  View {item.type === "image" ? "Image" : "Video"}
                </p>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}



export const metadata: Metadata = {
  title: "Dilkush Design Gallery - Karachi ki Khawateen ke liye Silai aur Designs",
  description: "Dilkush Design ki gallery mein Karachi mein khawateen ke liye tayar kiye gaye premium silai aur custom designs dekhain. Hamare modern aur riwayati designs ke samples aur mukhtalif fitting styles ko dekhein aur apne libas ka style select karein.",
  keywords: "Dilkush Design gallery, Karachi tailoring gallery, khawateen designs, custom silai Karachi, modern aur riwayati libas, Karachi silai examples, tailoring designs Karachi, premium silai samples",
}