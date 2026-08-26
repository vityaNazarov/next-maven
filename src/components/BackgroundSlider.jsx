"use client";

// Usage: <BackgroundSlider images={["/img1.jpg", "/img2.jpg"]} interval={6000} />

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DEFAULT_IMAGES = [
  "/images/img/overlay/overlay-desktop.jpg",
  "/images/img/overlay/IMG-1.jpg",
  "/images/img/overlay/IMG-2.jpg",
  "/images/img/overlay/IMG-3.jpg",
  "/images/img/overlay/IMG-4.jpg",
  "/images/img/overlay/IMG-5.jpg",
  "/images/img/overlay/IMG-6.jpg",
  "/images/img/overlay/IMG-7.jpg",
];

function BackgroundSlider({ images, interval = 5000 }) {
  const slides = images?.length ? images : DEFAULT_IMAGES;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, slides.length]);

  useEffect(() => {
    setIndex(0);
  }, [slides.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slides[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default BackgroundSlider;
