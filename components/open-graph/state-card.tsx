import { allStates } from "@/.contentlayer/generated";
import { absoluteUrl } from "@/lib/OpenGraph";

export const StateCard = ({ slug }: { slug: string }) => {
  const page = allStates.find((item) => item.slug === slug);

  if (!page) return <h1>Page content not found</h1>;

  return (
    <div tw="relative flex h-full w-full items-end justify-center bg-black">
      <div tw="flex flex-row">
        <div
          tw="flex w-2/5 "
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            tw="flex"
            style={{
              width: "100%",
              height: "380px",
            }}
          >
            <img
              tw="h-auto w-full"
              style={{
                objectFit: "contain",
              }}
              src={`${absoluteUrl()}/img/${page.slug}.svg`}
              alt=""
            />
          </div>
        </div>

        <div tw="flex flex-col w-3/5">
          <div tw="flex relative h-2/5">
            <img
              style={{
                objectFit: "contain",
              }}
              tw="absolute h-full w-full"
              src={`${absoluteUrl()}/img/eclipse-background.jpg`}
              alt=""
            />
          </div>
          <div tw="flex h-3/5">
            <div
              tw="flex px-4 flex-col items-center justify-start w-full text-white"
              style={{
                fontFamily: "Inter",
              }}
            >
              <h1
                tw="text-9xl text-center"
                style={{
                  fontFamily: "Bebas",
                }}
              >
                {page.name}
              </h1>
              <p tw="text-2xl text-center">
                Todas las ciudades donde se podra ver el eclipse
              </p>
              <h3 tw="text-3xl text-center rounded-full px-4 py-2 border-4 border-zinc-200">
                eclipse2024.mx
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
