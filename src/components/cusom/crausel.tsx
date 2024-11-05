"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  // const images = ["image/"];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="rounded-xl bg-green-600 border-none h-full w-screen overflow-hidden sm:h-[400px] sm:w-[400px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-0 border-none">
              <Card className="p-0 border-none">
                <CardContent className="flex border-none p-0 items-center justify-center">
                  <Image
                    src={`/images/herosection/${index + 1}.webp`}
                    alt={`image ${index + 1}`}
                    className="h-full w-full rounded-none sm:rounded-xl z-10  object-contain "
                    width={400}
                    height={400}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
