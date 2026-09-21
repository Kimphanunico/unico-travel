"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Slow crossfade between real photos. The hero box is short and wide while
// the photos are closer to landscape/portrait, so object-contain is used to
// always show the whole photo intact -- any leftover space on the sides is
// filled with a softly blurred, darkened copy of the same photo so the box
// still reads as full, rather than empty bars.
export default function TourHeroSlideshow({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 6000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            aria-hidden="true"
            className="scale-110 object-cover opacity-70 blur-2xl brightness-75"
          />
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
