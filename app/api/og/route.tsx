import { ImageResponse } from "next/og";

import { CityCard } from "@/components/open-graph/city-card";
import { PageCard } from "@/components/open-graph/page-card";
import { StateCard } from "@/components/open-graph/state-card";

export const runtime = "edge";

const getCardContent = ({ searchParams }: URL) => {
  const slug = searchParams.get("slug");
  const card = searchParams.get("card");

  if (!card || !slug) {
    return <h1>Provide values for the card</h1>;
  }

  switch (card) {
    case "page":
      return <PageCard slug={slug} />;

    case "state":
      return <StateCard slug={slug} />;

    case "city":
      return <CityCard slug={slug} />;

    default:
      return <h1>Card type not found</h1>;
  }
};

export async function GET(request: Request) {
  const url = new URL(request.url);

  const inter = await fetch(
    new URL("/assets/fonts/Inter-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const bebas = await fetch(
    new URL("/assets/fonts/BebasNeue-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(getCardContent(url), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: inter,
        style: "normal",
      },
      {
        name: "Bebas",
        data: bebas,
        style: "normal",
      },
    ],
  });
}
