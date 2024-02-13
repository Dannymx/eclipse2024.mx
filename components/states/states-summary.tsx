"use client";

import { LucideArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import states from "@/content/json/states.json";
import { slugify } from "@/lib/utils";

export const StatesSummary = () => {
  const params = useParams<{ slug: string }>();

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3">
      {states.map((state) => (
        <div key={state.name} className="flex flex-col gap-4 pt-4">
          <div className="flex h-[200px] items-center justify-center">
            <Link
              href={`/${params.slug}/estado/${slugify(state.name)}`}
              className="relative aspect-square h-full"
            >
              <Image
                src={`/img/${slugify(state.name)}.svg`}
                className="object-contain"
                alt={`${state.name} coat of arms`}
                fill
              />
            </Link>
          </div>
          <h3 className="inline-block text-center font-bebas-neue text-4xl hover:underline">
            <Link href={`/${params.slug}/estado/${slugify(state.name)}`}>
              {state.name}
            </Link>
          </h3>
          <div className="flex items-center justify-center">
            <ul className="flex grow-0 list-none flex-col gap-2">
              {state.cities.map((city) => (
                <li key={slugify(city.name)}>
                  <Link
                    className="inline-block"
                    href={`/${params.slug}/ciudad/${slugify(city.name)}`}
                  >
                    <span className="hover:underline">{city.name}</span>{" "}
                    <LucideArrowRightCircle
                      size={16}
                      className="inline-block"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
