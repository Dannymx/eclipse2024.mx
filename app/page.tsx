import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full bg-black">
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
      <div className="h-[900px] w-full bg-gradient-to-b from-black from-10%">
        <h1 className="text-center font-bebas-neue text-8xl font-bold text-zinc-400">
          Eclipse Solar 2024
        </h1>
      </div>
    </main>
  );
}
