import { AlertCircle } from "lucide-react";
import Image from "next/image";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getCity, getLocalTime, getStates, slugify } from "@/lib/utils";

export const dynamicParams = false;

export default function City({
  params: { city },
}: {
  params: { city: string };
}) {
  const cityQuery = getCity(city);

  if (!cityQuery) return <h1>City not found</h1>;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bebas-neue text-4xl">{cityQuery.name}</h3>

      <div className="text-xl">
        <p>
          Tipo de eclipse:{" "}
          <span
            className={
              cityQuery.type === "Total" ? "text-green-500" : "text-red-500"
            }
          >
            {cityQuery.type}
          </span>{" "}
        </p>
        <p className="mb-4">
          Duracion:{" "}
          {cityQuery.duration
            ? `${cityQuery.duration.split(":").at(0)} minutos con ${cityQuery.duration.split(":").at(1)} segundos`
            : "-"}
        </p>
        <p>
          Inicio de eclipse parcial (luna empieza a cubrir el sol):{" "}
          {getLocalTime({
            dateDst: cityQuery.dst,
            utcTime: cityQuery.partial_start,
            dateTimezone: cityQuery.timezone,
          })}
        </p>
        {cityQuery.totality_start && (
          <p>
            Inicio de eclipse total (luna cubre completamente el sol):{" "}
            {getLocalTime({
              dateDst: cityQuery.dst,
              utcTime: cityQuery.totality_start,
              dateTimezone: cityQuery.timezone,
            })}
          </p>
        )}
        <p className="font-bold underline underline-offset-2">
          Punto maximo:{" "}
          {getLocalTime({
            dateDst: cityQuery.dst,
            utcTime: cityQuery.maximum,
            dateTimezone: cityQuery.timezone,
          })}
        </p>
        {cityQuery.totality_end && (
          <p>
            Fin de eclipse total (luna empieza a decubrir el sol):{" "}
            {getLocalTime({
              dateDst: cityQuery.dst,
              utcTime: cityQuery.totality_end,
              dateTimezone: cityQuery.timezone,
            })}
          </p>
        )}
        <p className="mb-4">
          Fin de eclipse parcial (luna descubre el sol completamente):{" "}
          {getLocalTime({
            dateDst: cityQuery.dst,
            utcTime: cityQuery.partial_end,
            dateTimezone: cityQuery.timezone,
          })}
        </p>
        <small className="font-bold text-gray-400">
          *Todas las horas son en tiempo local de la ciudad
        </small>
      </div>
      {cityQuery.type === "Parcial" ? (
        <div>
          <Alert>
            <AlertCircle size={20} />
            <AlertTitle>Atencion!</AlertTitle>
            <AlertDescription>
              Los eclipses &quot;Parciales&quot; nunca se deben de ver sin
              proteccion en los ojos. Ya que la luna NO cubre el sol
              completamente, la luz solar puede afectar tus ojos.
            </AlertDescription>
          </Alert>
        </div>
      ) : null}
      {cityQuery.type === "Total" ? (
        <>
          <h3 className="font-bebas-neue text-4xl">Mapa del Eclipse</h3>
          <div className="relative flex aspect-square grow items-center justify-center">
            <div className="relative size-full overflow-hidden rounded-2xl shadow-md shadow-black">
              <Image
                src={`/img/maps/${slugify(cityQuery.name)}.png`}
                alt={`Mapa del eclipse en ${cityQuery.name}`}
                fill
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export async function generateStaticParams() {
  const cities = getStates().map((state) =>
    state.cities.map((city) => slugify(city.name)),
  );

  return cities;
}
