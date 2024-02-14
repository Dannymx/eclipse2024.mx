import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This is causing issues here, TODO: investigate
// import { allPages } from "@/.contentlayer/generated";
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

// export const getPageBySlug = (slug: string) =>
//   allPages.find((page) => slugify(page.title) === slug);

export const getStates = () => statesSchema.parse(states);

export const getCity = (slug: string) =>
  getStates()
    .flatMap((state) =>
      state.cities.find((item) => slugify(item.name) === slug),
    )
    .filter((item) => item)
    .shift();

export const getLocalTime = ({
  dateString = "2024-04-08",
  dateTimezone,
  dateDst,
  utcTime,
}: {
  dateString?: string;
  dateTimezone: string;
  dateDst: boolean;
  utcTime: string;
}) => {
  // Combine date and time into a single string

  // Create a Date object with the combined string in UTC format
  const utcDateTime = new Date(`${dateString}T${utcTime}Z`);

  // If DST is true, subtract one hour from the local time
  if (dateDst) {
    utcDateTime.setHours(utcDateTime.getHours() + 1);
  }

  // Format local time with AM/PM
  const localTimeString = utcDateTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: dateTimezone,
  });

  return localTimeString;
};
