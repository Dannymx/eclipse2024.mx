import type { MDXComponents } from "mdx/types";
import type { ImageProps } from "next/image";
import Image from "next/image";

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
  img: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image style={{ objectFit: "cover" }} {...(props as ImageProps)} fill />
  ),
};

export const PageComponents: MDXComponents = {
  p: ({ className, ...props }) => (
    <p className={cn("text-xl mb-4", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("text-4xl font-bebas-neue", className)} {...props} />
  ),
  img: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image style={{ objectFit: "cover" }} {...(props as ImageProps)} fill />
  ),
};
