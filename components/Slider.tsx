"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "@/node_modules/next/image";

const images = [
  "/1.webp",
  "/2.webp",
  "/3.webp",
  "/4.webp",
  "/5.webp",
  "/6.webp",
  "/7.webp",
  "/8.webp",
  "/9.webp",
  "/11.webp",

];

const Slider = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <Carousel
          className="w-full"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              stopOnInteraction: false,
              stopOnFocusIn: false,
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="flex gap-4">
            {images.map((image, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className=" h-full">
                  <Image
                    src={image}
                    width={1000}
                    height={1000}
                    alt="trubaci"
                    className="object-cover aspect-square rounded-lg"
                    unoptimized
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
