import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Bebas_Neue, Inter_Tight, Lexend } from "next/font/google";

const Bebas = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: ["400"],
  subsets: ["latin"],
});

const InterTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const LexendFont = Lexend({
  variable: "--font-lexend",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const fontVariables = [
  GeistMono.variable,
  GeistSans.variable,
  Bebas.variable,
  InterTight.variable,
  LexendFont.variable,
].join(" ");
