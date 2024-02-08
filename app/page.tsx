import { allPages } from "@/.contentlayer/generated";
import { HomeComponents } from "@/components/ui/mdx-components";
import { Markdown } from "@/components/ui/mdx-markdown";
import { slugify } from "@/lib/utils";

export default function Home() {
  const markdown = allPages.find((page) => slugify(page.slug) === "home");

  if (!markdown) return <h1>Homepage not found</h1>;

  return (
    <div className="flex flex-col">
      <Markdown content={markdown.body.raw} components={HomeComponents} />
    </div>
  );
}
