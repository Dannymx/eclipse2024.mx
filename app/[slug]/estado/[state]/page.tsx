import Image from "next/image";
import { notFound } from "next/navigation";

import { allStates } from "@/.contentlayer/generated";
import { CitiesSummary } from "@/components/cities/cities-summary";
import { PageComponents } from "@/components/ui/mdx-components";
import { Markdown } from "@/components/ui/mdx-markdown";
import { getStates, slugify } from "@/lib/utils";

export const dynamicParams = false;

export default function State({
  params: { state },
}: {
  params: { state: string };
}) {
  const stateQuery = getStates().find((item) => slugify(item.name) === state);

  if (!stateQuery) {
    notFound();
  }

  const markdown = allStates.find(
    (page) => page.slug === slugify(stateQuery.name),
  );

  if (!markdown) return <h1>Please define page content</h1>;

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex h-[200px] w-full items-center justify-center sm:w-1/4">
          <div className="relative flex aspect-square h-full items-center justify-center">
            <Image
              src={`/img/${state}.svg`}
              className="object-contain"
              alt={`${stateQuery.name} coat of arms`}
              fill
            />
          </div>
        </div>
        <div className="w-full sm:w-3/4">
          <Markdown
            content={markdown.body.raw}
            components={{ ...PageComponents, CitiesSummary }}
          />
        </div>
      </div>

      <div className="w-full">
        <CitiesSummary />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const stateNames = getStates().map((item) => slugify(item.name));

  return stateNames;
}
