import type { MetadataRoute } from "next";
import { tours } from "@/lib/tours";
import { destinations } from "@/lib/destinations";

const BASE_URL = "https://unicotravel.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/destinations",
    "/services",
    "/contact",
    "/partners",
    "/dental-tourism",
    "/blog",
    "/gallery",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${BASE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  const tourRoutes = tours.map((t) => ({
    url: `${BASE_URL}/services/${t.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes];
}
