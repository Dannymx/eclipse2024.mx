import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Bebas_Neue } from "next/font/google";

const Bebas = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: ["400"],
  subsets: ["latin"],
});

export const fontVariables = [
  GeistMono.variable,
  GeistSans.variable,
  Bebas.variable,
].join(" ");
