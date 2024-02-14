import type { Metadata } from "next";

import { allPages } from "@/.contentlayer/generated";
import { HomeComponents } from "@/components/ui/mdx-components";
import { Markdown } from "@/components/ui/mdx-markdown";
import { getMetadata } from "@/lib/OpenGraph";
import { getPageBySlug, slugify } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageBySlug("home");
  if (!page) return {};

  return {
    title: page.meta_title,
    ...getMetadata({
      title: page.meta_title,
      slug: "/",
      card: `/api/og?card=page&slug=home`,
    }),
  };
}

export default function Home() {
  const markdown = allPages.find((page) => slugify(page.slug) === "home");

  if (!markdown) return <h1>Homepage not found</h1>;

  return (
    <div className="flex flex-col">
      <Markdown content={markdown.body.raw} components={HomeComponents} />
    </div>
  );
}
