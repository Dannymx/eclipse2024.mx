import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

import { allPages } from "@/.contentlayer/generated";
import { cn, slugify } from "@/lib/utils";

const components: MDXComponents = {
  h3: ({ className, ...props }) => (
    <p className={cn("text-center text-3xl", className)} {...props} />
  ),
};

const HomepageMarkdown = ({ content }: { content: string }) => {
  const MDX = useMDXComponent(content);

  return <MDX components={components} />;
};

export default function Home() {
  const markdown = allPages.find((page) => slugify(page.title) === "homepage");

  if (!markdown) return <h1>Homepage not found</h1>;

  return (
    <div className="mb-10 flex flex-col gap-4 text-left text-xl">
      <HomepageMarkdown content={markdown.body.code} />
    </div>
  );
}
