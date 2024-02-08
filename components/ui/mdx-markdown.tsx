import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";

export const Markdown = ({
  content,
  components,
}: {
  content: string;
  components: MDXComponents;
}) => <MDXRemote source={content} components={components} />;
