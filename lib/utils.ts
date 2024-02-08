import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import states from "@/content/json/states.json";
import { statesSchema } from "@/schemas/states";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugify = (string: string) =>
  string
    .toLowerCase()
    .trim()
    .normalize("NFD") // separate accent from letter
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getStates = () => statesSchema.parse(states);
