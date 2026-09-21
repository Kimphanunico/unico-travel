"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Slow crossfade between real photos. The hero box is short and wide while
// the photos are closer to landscape/portrait, so object-contain is used to
// always show the whole photo -- any leftover space on the sides shows the
// tour's own brand-gradient background (set on the parent <section>) rather
// than a blurred copy of the photo, which read as a rendering glitch.
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
    <div className="absolute inset-0 overflow-hidden">
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
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
