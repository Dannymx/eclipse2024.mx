import type { Metadata } from "next";

import { allPages } from "@/.contentlayer/generated";
import { StatesSummary } from "@/components/states/states-summary";
import { PageComponents } from "@/components/ui/mdx-components";
import { Markdown } from "@/components/ui/mdx-markdown";
import { getMetadata } from "@/lib/OpenGraph";
import { slugify } from "@/lib/utils";

export const dynamicParams = false;

type Props = {
  params: {
    slug: string;
  };
};

const getPageBySlug = (slug: string) =>
  allPages.find((item) => slugify(item.title) === slug);

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const page = getPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.meta_title,
    ...getMetadata({
      title: page.meta_title,
      slug: page.slug,
      card: `/api/og?card=page&slug=${page.slug}`,
    }),
  };
}

export default function Page({ params: { slug } }: Props) {
  const page = getPageBySlug(slug);

  if (!page) return <h1>Page not found.</h1>;

  return (
    <Markdown
      content={page.body.raw}
      components={{ ...PageComponents, StatesSummary }}
    />
  );
}

export async function generateStaticParams() {
  const slugs = allPages.map((page) => ({ slug: slugify(page.title) }));

  return slugs;
}
