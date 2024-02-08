import states from "@/content/json/states.json";
import { slugify } from "@/lib/utils";
import { statesSchema } from "@/schemas/states";

export default function City({
  params: { city },
}: {
  params: { city: string };
}) {
  return <h1>{city}</h1>;
}

export async function generateStaticParams() {
  const cities = statesSchema
    .parse(states)
    .flatMap((state) => state.cities.map((city) => slugify(city.name)));

  return cities;
}
