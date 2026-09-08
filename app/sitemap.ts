import type { MetadataRoute } from "next";
import { tours } from "@/lib/tours";
import { destinations } from "@/lib/destinations";
import { SITE_URL } from "@/lib/site";

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
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  const tourRoutes = tours.map((t) => ({
    url: `${SITE_URL}/services/${t.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes];
}
