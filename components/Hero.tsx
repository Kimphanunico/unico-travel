"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Some in-app browsers (Zalo, Messenger, etc.) don't reliably respect
    // the muted/playsInline JSX attributes on mount, which can cause the
    // video to either not autoplay or pop into the native fullscreen
    // player instead of playing inline. Setting these explicitly via the
    // DOM before calling play() fixes it across those browsers.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked by the browser — the gradient/poster stays
        // visible instead, which is an acceptable fallback.
      });
    }
  }, []);

  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-end overflow-hidden">
      {/* Placeholder gradient — shows if no video file is present */}
      <div className="absolute inset-0 z-0 gradient-ocean" />

      {/* Background video — replace /public/videos/hero.mp4 with real footage */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        poster="/videos/hero-poster.jpg"
        webkit-playsinline="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

      <div className="relative z-30 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-white/80">
          Travel, designed with intention
        </p>
        <h1 className="font-serif mt-6 max-w-3xl text-balance text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
          Journeys worth remembering
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-white/85">
          Unico Travel plans small-group and private trips across the world's
          most striking landscapes, built around real people, real places,
          and time well spent.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="rounded-full bg-terracotta px-7 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-terracotta-dark"
          >
            Explore Tours
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white px-7 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-ink"
          >
            Plan a Trip
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/60" />
      </div>
    </section>
  );
}
