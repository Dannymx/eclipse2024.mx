import type { MDXComponents } from "mdx/types";

import { cn } from "@/lib/utils";

/* eslint-disable jsx-a11y/heading-has-content */
export const HomeComponents: MDXComponents = {
  p: ({ className, ...props }) => (
    <p className={cn("text-xl mb-4", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "text-center font-bebas-neue text-4xl my-4 [&:not(:first-child)]:mt-0",
        className,
      )}
      {...props}
    />
  ),
};

export const PageComponents: MDXComponents = {
  p: ({ className, ...props }) => (
    <p className={cn("text-xl mb-4", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("text-4xl font-bebas-neue", className)} {...props} />
  ),
};
