import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

export const Markdown = ({
  content,
  components,
}: {
  content: string;
  components: MDXComponents;
}) => {
  const MDX = useMDXComponent(content);

  return <MDX components={components} />;
};
