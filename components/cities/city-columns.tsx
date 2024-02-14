import type { ColumnDef, Row } from "@tanstack/react-table";
import { ArrowUpDown, ArrowUpRightFromSquareIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { z } from "zod";
import { Button } from "../ui/button";
import { FormattedTime } from "./city-time";

import { slugify } from "@/lib/utils";
import type { citySchema } from "@/schemas/states";

export type City = z.infer<typeof citySchema>;

const LinkedCity = ({ city }: { city: Row<City> }) => {
  const params = useParams<{ slug: string }>();

  const url =
    `/${params.slug}/ciudad/${slugify(city.original.name)}` as __next_route_internal_types__.DynamicRoutes;

  return (
    <Link href={url} className="text-nowrap">
      {city.original.name}{" "}
      <ArrowUpRightFromSquareIcon size={16} className="inline-block" />
    </Link>
  );
};

export const columns: ColumnDef<City>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="font-bold"
      >
        Nombre
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => <LinkedCity city={row} />,
  },
  {
    accessorKey: "type",
    header: "Tipo de Eclipse",
    cell: ({ row }) => (
      <div
        className={
          row.getValue("type") === "Total" ? "text-green-500" : "text-red-500"
        }
      >
        {row.getValue("type")}
      </div>
    ),
  },
  {
    accessorKey: "duration",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="font-bold"
      >
        Duracion
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("duration") ?? "-"}</div>
    ),
  },
  {
    accessorKey: "partial_start",
    header: "Inicio Parcial",
    cell: ({ row }) => (
      <FormattedTime row={row} value={row.original.partial_start} />
    ),
  },
  {
    accessorKey: "totality_start",
    header: "Inicio Totalidad",
    cell: ({ row }) =>
      row.original.totality_start ? (
        <FormattedTime row={row} value={row.original.partial_start} />
      ) : (
        "-"
      ),
  },
  {
    accessorKey: "maximum",
    header: "Maximo",
    cell: ({ row }) => <FormattedTime row={row} value={row.original.maximum} />,
  },
  {
    accessorKey: "totality_end",
    header: "Totalidad Fin",
    cell: ({ row }) =>
      row.original.totality_end ? (
        <FormattedTime row={row} value={row.original.totality_end} />
      ) : (
        "-"
      ),
  },
  {
    accessorKey: "partial_end",
    header: "Parcial Fin",
    cell: ({ row }) => (
      <FormattedTime row={row} value={row.original.partial_end} />
    ),
  },
];
