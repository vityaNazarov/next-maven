"use client";

// Usage: <BackgroundSlider images={["/img1.jpg", "/img2.jpg"]} interval={6000} />

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HERO_SLIDE_IMAGES } from "@/constants/heroSlides";

const FALLBACK_COLOR = "#a8a198";
const LOAD_TIMEOUT_MS = 8000;

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;

    const finish = (ok) => {
      if (settled) {
        return;
      }
      settled = true;
      resolve(ok);
    };

    const timer = setTimeout(() => finish(false), LOAD_TIMEOUT_MS);

    img.onload = () => {
      clearTimeout(timer);
      finish(true);
    };

    img.onerror = () => {
      clearTimeout(timer);
      finish(false);
    };

    img.src = src;
  });
}

function BackgroundSlider({ images, interval = 5000 }) {
  const slides = images?.length ? images : HERO_SLIDE_IMAGES;
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(() =>
    Array(slides.length).fill(false)
  );

  const indexRef = useRef(0);
  const intervalRef = useRef(interval);
  const loadedRef = useRef(loadedImages);
  const failedRef = useRef(Array(slides.length).fill(false));

  intervalRef.current = interval;
  loadedRef.current = loadedImages;

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    let aborted = false;
    let timeoutId;

    failedRef.current = Array(slides.length).fill(false);

    const promises = slides.map((src, i) =>
      loadImage(src).then((ok) => {
        if (aborted) {
          return ok;
        }

        if (ok) {
          loadedRef.current[i] = true;
          setLoadedImages((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        } else {
          failedRef.current[i] = true;
        }

        return ok;
      })
    );

    const sleep = (ms) =>
      new Promise((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });

    const nextPlayableIndex = (from) => {
      const count = slides.length;
      for (let step = 1; step <= count; step += 1) {
        const candidate = (from + step) % count;
        if (!failedRef.current[candidate]) {
          return candidate;
        }
      }
      return from;
    };

    const runCycle = async () => {
      await promises[0];
      if (aborted) {
        return;
      }

      if (failedRef.current[0]) {
        const firstReady = loadedRef.current.findIndex(Boolean);
        if (firstReady >= 0) {
          indexRef.current = firstReady;
          setIndex(firstReady);
        }
      }

      if (slides.length <= 1) {
        return;
      }

      while (!aborted) {
        await sleep(intervalRef.current);
        if (aborted) {
          return;
        }

        const next = nextPlayableIndex(indexRef.current);
        if (next === indexRef.current) {
          continue;
        }

        if (!loadedRef.current[next] && !failedRef.current[next]) {
          await promises[next];
          if (aborted) {
            return;
          }
        }

        if (failedRef.current[next]) {
          const fallback = nextPlayableIndex(indexRef.current);
          if (
            fallback !== indexRef.current &&
            loadedRef.current[fallback]
          ) {
            indexRef.current = fallback;
            setIndex(fallback);
          }
          continue;
        }

        if (loadedRef.current[next]) {
          indexRef.current = next;
          setIndex(next);
        }
      }
    };

    runCycle();

    return () => {
      aborted = true;
      clearTimeout(timeoutId);
    };
    // Load once on mount so every slide is tracked against the first slides list.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showSlide = loadedImages[index];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: FALLBACK_COLOR,
      }}
    >
      <AnimatePresence>
        {showSlide ? (
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
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default BackgroundSlider;
