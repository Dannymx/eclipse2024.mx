import type { Metadata } from "next";
import { AppConfig } from "./AppConfig";

export const absoluteUrl = (path?: string) =>
  process.env.NEXT_PUBLIC_APP_URL
    ? `${process.env.NEXT_PUBLIC_APP_URL}${path ?? ""}`
    : "https://eclipse2024-mx.vercel.app";

type PageMetadata = {
  slug: string;
  title: string;
  card: string;
};

export const getMetadata = ({ slug, title, card }: PageMetadata): Metadata => ({
  metadataBase: new URL(absoluteUrl()),
  openGraph: {
    locale: "en_US",
    url: slug,
    title: title ? `${title} | ${AppConfig.title}` : AppConfig.title,
    description: AppConfig.description,
    siteName: AppConfig.title,
    images: [
      {
        url: card,
        width: 1200,
        height: 630,
        alt: title ? `${title} | ${AppConfig.title}` : AppConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title ? `${title} | ${AppConfig.title}` : AppConfig.title,
    description: AppConfig.description,
    images: [card],
  },
});
