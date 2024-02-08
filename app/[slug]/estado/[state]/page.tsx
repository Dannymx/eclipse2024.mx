import { notFound } from "next/navigation";

import states from "@/content/json/states.json";
import { slugify } from "@/lib/utils";
import { statesSchema } from "@/schemas/states";

export const dynamicParams = false;

export default function State({
  params: { state },
}: {
  params: { state: string };
}) {
  const stateQuery = statesSchema
    .parse(states)
    .find((item) => slugify(item.name) === state);

  if (!stateQuery) {
    notFound();
  }

  return <h1>{state}</h1>;
}

export async function generateStaticParams() {
  const stateNames = statesSchema
    .parse(states)
    .map((item) => slugify(item.name));

  return stateNames;
}
