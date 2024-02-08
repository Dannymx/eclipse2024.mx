"use client";

import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import states from "@/content/json/states.json";
import { slugify } from "@/lib/utils";

export const StatesSummary = () => {
  const params = useParams<{ slug: string }>();

  return (
    <div className="grid grid-cols-3">
      {states.map((state) => (
        <div key={state.name} className="flex flex-col gap-4 pt-4">
          <div className="relative flex aspect-video items-center justify-center">
            <Image
              src={`/img/${state.name}.svg`}
              className="object-contain"
              alt={`${state.name} coat of arms`}
              fill
            />
          </div>
          <h3 className="text-center font-bebas-neue text-4xl hover:underline">
            <Link href={`/${params.slug}/estado/${slugify(state.name)}`}>
              {state.name}
            </Link>
          </h3>
          <ul className="flex grow list-none flex-col items-center justify-start gap-2">
            {state.cities.map((city) => (
              <li key={slugify(city.name)}>
                <Link
                  className="inline-block hover:underline"
                  href={`/${params.slug}/ciudad/${slugify(city.name)}`}
                >
                  {city.name}{" "}
                  <ArrowUpRightFromSquare size={14} className="inline-block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
