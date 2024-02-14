import { allPages } from "@/.contentlayer/generated";
import { absoluteUrl } from "@/lib/OpenGraph";

export const PageCard = ({ slug }: { slug: string }) => {
  const page = allPages.find((item) => item.slug === slug);

  if (!page) return <h1>Page content not found</h1>;

  return (
    <div tw="relative flex h-full w-full items-end justify-center bg-black">
      <img
        style={{
          objectFit: "contain",
        }}
        tw="absolute top-0 w-1/2 h-2/5"
        src={`${absoluteUrl()}/img/eclipse-background.jpg`}
        alt=""
      />
      <div
        tw="flex py-2 flex-col items-center justify-start w-4/5 h-3/5 text-white"
        style={{
          fontFamily: "Inter",
          fontWeight: "bold",
        }}
      >
        <h1 tw="text-7xl text-center">{page.meta_title}</h1>
        <h3 tw="text-3xl text-center rounded-full px-4 py-2 border-4 border-zinc-200">
          eclipse2024.mx
        </h3>
      </div>
    </div>
  );
};
