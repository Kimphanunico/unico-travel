import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Unico Travel",
  description: "A look at the places and moments Unico Travel has visited.",
};

const PHOTOS = [
  { caption: "Ha Long Bay, Vietnam", gradient: "gradient-ocean", size: "row-span-2" },
  { caption: "Kyoto, Japan", gradient: "gradient-sunset", size: "" },
  { caption: "Zermatt, Switzerland", gradient: "gradient-snow", size: "" },
  { caption: "Serengeti, Tanzania", gradient: "gradient-sand", size: "" },
  { caption: "Ubud, Bali", gradient: "gradient-forest", size: "row-span-2" },
  { caption: "Jokulsarlon, Iceland", gradient: "gradient-dusk", size: "" },
  { caption: "Hoi An, Vietnam", gradient: "gradient-sunset", size: "" },
  { caption: "Lucerne, Switzerland", gradient: "gradient-snow", size: "" },
];

export default function GalleryPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          Gallery
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          Moments from the road
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">
          A small selection of places we've taken travelers over the years.
          Replace these placeholders with real trip photography in{" "}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 text-sm">
            /public/images
          </code>
          .
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.caption}
              className={`group relative overflow-hidden rounded-xl ${photo.gradient} ${photo.size}`}
            >
              <div className="absolute inset-0 flex items-end bg-black/0 p-4 opacity-0 transition-opacity group-hover:bg-black/30 group-hover:opacity-100">
                <span className="text-sm text-white">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
