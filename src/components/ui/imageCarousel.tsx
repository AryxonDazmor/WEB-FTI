"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/fti5.jpg",
  "/fti-ser.png",
  "/aksang.jpeg",
  "/ftijamal.jpg",
  "/gtk.jpeg",
  "/fti2.jpeg",
  "/pulang.jpeg",
  "/farewell.jpeg",
  "/fti6.jpeg",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl h-[400px] mx-auto overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute text-5xl left-4 top-1/2 z-10 text-white -translate-y-1/2 hover:text-black hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white hover:text-black hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronRight/>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`block h-1 rounded-2xl content-[' '] transition-all ${
              current === index ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
