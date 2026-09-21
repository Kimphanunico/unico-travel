"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Slow crossfade + gentle Ken Burns zoom, the same visual language cruise
// and luxury hotel brands use for hero photography -- calm motion instead
// of a static flat image, without ever fighting the text on top of it.
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
            className="animate-kenburns object-cover"
          />
        </div>
      ))}
    </div>
  );
}
