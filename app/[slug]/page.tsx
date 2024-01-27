import { useMDXComponent } from "next-contentlayer/hooks";

import { allPages } from "@/.contentlayer/generated";
import { slugify } from "@/lib/utils";

export const dynamicParams = false;

type Props = {
  params: {
    slug: string;
  };
};

const PageMarkdown = ({ markdown }: { markdown: string }) => {
  const MDX = useMDXComponent(markdown);

  return <MDX />;
};

export default function Page({ params: { slug } }: Props) {
  const markdown = allPages.find((page) => slugify(page.title) === slug);

  if (!markdown) return <h1>Page not found.</h1>;

  return <PageMarkdown markdown={markdown.body.code} />;
}

export async function generateStaticParams() {
  const slugs = allPages.map((page) => ({ slug: slugify(page.title) }));

  return slugs;
}
