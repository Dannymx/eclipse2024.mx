import { absoluteUrl } from "@/lib/OpenGraph";
import { getCity } from "@/lib/utils";

export const CityCard = ({ slug }: { slug: string }) => {
  const city = getCity(slug);

  if (!city) return <h1>City not found</h1>;

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
          fontWeight: "bold",
        }}
      >
        <h1 tw="text-7xl text-center mb-0">{city.name}</h1>
        <div tw="flex flex-col">
          <p tw="text-3xl text-center mb-0">
            La ciudad de {city.name} tendra un eclipse:{" "}
            <span
              tw={city.type === "Total" ? "text-green-500" : "text-red-500"}
            >
              {city.type}
            </span>
          </p>
          {city.duration && (
            <p tw="text-3xl text-center mb-0">
              Duración: {city.duration.split(":").at(0)} minutos con{" "}
              {city.duration.split(":").at(1)} segundos
            </p>
          )}
        </div>

        <h3 tw="text-3xl text-center rounded-full px-4 py-2 border-4 border-zinc-200">
          eclipse2024.mx
        </h3>
      </div>
    </div>
  );
};
