import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import { Navigation } from "@/components/ui/navigation";
import { AppConfig } from "@/lib/AppConfig";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-100 font-inter ${fontVariables}`}>
        <main className="flex min-h-screen flex-col">
          <div className="w-full bg-black">
            {/* Hero container */}
            <div className="container max-w-screen-sm">
              <Link href="/" className="relative block h-[200px]">
                <Image
                  src="/img/eclipse-background.jpg"
                  alt="Total Solar Eclipse image background"
                  quality={100}
                  fill
                  sizes="50vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="min-h-[900px] w-full bg-zinc-400 bg-gradient-to-b from-black from-50% to-zinc-400">
            {/* Main content container */}
            <div className="container flex max-w-screen-lg flex-col gap-8">
              <div className="text-center">
                <h1 className="inline-block animate-text bg-gradient-to-r from-gray-200 to-gray-900 bg-clip-text font-bebas-neue font-bold text-transparent">
                  <Link href="/">
                    <span className="block text-nowrap text-7xl sm:inline sm:text-8xl">
                      Eclipse Solar{" "}
                    </span>
                    <span className="text-7xl sm:text-8xl">2024</span>
                  </Link>
                </h1>
              </div>
              <div className="self-center">
                <Navigation />
              </div>
              <div className="mb-10 text-gray-200">
                {children}
                <Analytics />
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
