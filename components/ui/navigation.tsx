"use client";

import Link from "next/link";

import type { Page } from "@/.contentlayer/generated";
import { allPages } from "@/.contentlayer/generated";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { slugify } from "@/lib/utils";

export function Navigation() {
  // This grabs only the .mdx files that should go in the navigation
  const links = allPages
    .filter(
      (page): page is Page & { navOrder: number } =>
        typeof page.navOrder === "number",
    )
    .map((page) => ({
      title: page.title,
      href: `/${slugify(page.title)}` as __next_route_internal_types__.DynamicRoutes,
      order: page.navOrder,
    }))
    .sort((a, b) => a.order - b.order);

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col gap-4 sm:flex-row">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: "text-xl xs:text-xl md:text-2xl inline-block",
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
