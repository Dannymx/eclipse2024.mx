import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import { Navigation } from "@/components/ui/navigation";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Eclipse 2024",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-100 font-inter-tight ${fontVariables}`}>
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
                <Link href="/">Eclipse Solar 2024</Link>
              </h1>
              <Navigation />
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
