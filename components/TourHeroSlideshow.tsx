"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Slow crossfade + gentle Ken Burns zoom, the same visual language cruise
// and luxury hotel brands use for hero photography -- calm motion instead
// of a static flat image, without ever fighting the text on top of it.
//
// The hero box is short and photos come in different aspect ratios, so a
// plain object-cover would crop into the subject. Each frame is built from
// two layers instead: a blurred, darkened object-cover copy that fills the
// whole box (so there's never an empty letterbox bar), and the real photo
// on top with object-contain, always shown whole and never cropped.
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
            className="animate-kenburns object-cover opacity-70 blur-2xl brightness-75"
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
