import { ArrowUpRightFromSquareIcon } from "lucide-react";
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
  img: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className={cn("object-cover", className)}
      {...(props as ImageProps)}
      fill
    />
  ),
};

export const PageComponents: MDXComponents = {
  a: ({ className, children, ...props }) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      className={cn("text-xl mb-4 inline-block hover:underline", className)}
      {...props}
    >
      {children}
      <ArrowUpRightFromSquareIcon size={20} className="mx-1 inline-block" />
    </a>
  ),
  p: ({ className, ...props }) => (
    <p className={cn("text-xl mb-4", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("text-4xl font-bebas-neue", className)} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={cn("text-3xl font-bebas-neue", className)} {...props} />
  ),
  img: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className={cn("object-cover", className)}
      {...(props as ImageProps)}
      fill
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn("text-xl list-decimal list-inside mb-4", className)}
      {...props}
    />
  ),
};
