import type { MetadataRoute } from "next";

import { allPages } from "@/.contentlayer/generated";
import { getStates, slugify } from "@/lib/utils";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://eclipse2024.mx";

type SitemapEntry = Omit<MetadataRoute.Sitemap[number], "url"> & {
  url: __next_route_internal_types__.DynamicRoutes;
};

const generateConfig = (entry: SitemapEntry[]) =>
  entry.map((item) => ({ ...item, url: `${baseUrl}${item.url}` }));

const locationPage = allPages.find((page) => page.location);
const locationPath = locationPage ? locationPage.slug : "donde-puedo-verlo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Main page
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Main sub-pages
    ...generateConfig(
      allPages.map<SitemapEntry>((page) => ({
        url: `/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      })),
    ),
    // State pages
    ...generateConfig(
      getStates().map<SitemapEntry>((state) => ({
        url: `/${locationPath}/estado/${slugify(state.name)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      })),
    ),
    // City pages
    ...generateConfig(
      getStates().flatMap((state) =>
        state.cities.map<SitemapEntry>((city) => ({
          url: `/${locationPath}/ciudad/${slugify(city.name)}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        })),
      ),
    ),
  ];
}
