import { allPages } from "@/.contentlayer/generated";
import { StatesSummary } from "@/components/states/states-summary";
import { PageComponents } from "@/components/ui/mdx-components";
import { Markdown } from "@/components/ui/mdx-markdown";
import { slugify } from "@/lib/utils";

export const dynamicParams = false;

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params: { slug } }: Props) {
  const markdown = allPages.find((page) => slugify(page.title) === slug);

  if (!markdown) return <h1>Page not found.</h1>;

  return (
    <Markdown
      content={markdown.body.raw}
      components={{ ...PageComponents, StatesSummary }}
    />
  );
}

export async function generateStaticParams() {
  const slugs = allPages.map((page) => ({ slug: slugify(page.title) }));

  return slugs;
}
