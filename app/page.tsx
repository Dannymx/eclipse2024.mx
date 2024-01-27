import Image from "next/image";

import { Navigation } from "@/components/ui/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full bg-black">
        {/* Hero container */}
        <div className="container relative h-[200px] max-w-screen-sm">
          <Image
            src="/img/eclipse-background.jpg"
            alt="Total Solar Eclipse image background"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div className="min-h-[900px] w-full bg-zinc-400 bg-gradient-to-b from-black from-50% to-zinc-400">
        {/* Main content container */}
        <div className="container flex max-w-screen-lg flex-col items-center gap-8 text-center text-gray-200">
          <h1 className="text-center font-bebas-neue text-8xl font-bold">
            Eclipse Solar 2024
          </h1>
          <Navigation />
          <div className="mb-10 flex flex-col gap-4 text-left text-xl">
            <p>
              El 8 de abril de 2024, millones de personas en América del Norte
              tendrán la oportunidad de presenciar un evento celestial
              extraordinario: un eclipse total de sol.
            </p>
            <p>
              Este eclipse será especialmente notable en México y los Estados
              Unidos, ya que cruzará gran parte de estos países. México, en
              particular, será el lugar privilegiado donde se podrá disfrutar de
              la máxima duración de este fenómeno astronómico.
            </p>
            <h3 className="text-center text-3xl">
              ¿Por qué es importante este eclipse?
            </h3>
            <p>
              Este eclipse es de suma importancia en México debido a varias
              razones. En primer lugar, es el único eclipse total de sol del
              siglo 21 en el que México podrá disfrutar de su mayor totalidad.
              Esto significa que será una oportunidad única para presenciar un
              fenómeno astronómico impresionante.
            </p>
            <p>
              Además, es importante destacar que el próximo eclipse total de sol
              no ocurrirá hasta el año 2044. Esto significa que después de este
              evento, los mexicanos tendrán que esperar más de dos décadas para
              volver a experimentar algo similar. Y aunque habrá otros eclipses
              solares en el futuro, ninguno será tan grande y espectacular como
              este en el 2024.
            </p>
            <p>
              Por lo tanto, es fundamental aprovechar esta oportunidad única
              para disfrutar y aprender más sobre los eclipses solares. No solo
              será un evento memorable, sino que también permitirá a las
              personas expandir sus conocimientos sobre el universo y despertar
              su interés por la astronomía.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
