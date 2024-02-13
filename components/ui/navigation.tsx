"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import type { Page } from "@/.contentlayer/generated";
import { allPages } from "@/.contentlayer/generated";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, slugify } from "@/lib/utils";

export function Navigation() {
  const params = useParams<{ slug: string }>();

  // This grabs only the .mdx files that should go in the navigation
  const links = allPages
    .filter(
      (page): page is Page & { navOrder: number } =>
        typeof page.navOrder === "number",
    )
    .map((page) => ({
      title: page.title,
      href: slugify(page.title),
      order: page.navOrder,
    }))
    .sort((a, b) => a.order - b.order);

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row flex-wrap gap-4 sm:flex-row">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <Link href={`/${link.href}`} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: cn(
                    "text-xl xs:text-xl md:text-2xl inline-block",
                    params.slug === link.href &&
                      "bg-primary-foreground text-zinc-800",
                  ),
                  variant: "nav",
                })}
              >
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
