import { getStates, slugify } from "@/lib/utils";

export default function City({
  params: { city },
}: {
  params: { city: string };
}) {
  return <h1>{city}</h1>;
}

export async function generateStaticParams() {
  const cities = getStates().map((state) =>
    state.cities.map((city) => slugify(city.name)),
  );

  return cities;
}
