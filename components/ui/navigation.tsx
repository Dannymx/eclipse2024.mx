"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const links = [
  { title: "Donde?", href: "/donde-ver-el-eclipse-2024" },
  { title: "Que necesito?", href: "/que-necesito" },
  { title: "Fotos", href: "/fotos" },
];

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({ variant: "nav" })}
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
