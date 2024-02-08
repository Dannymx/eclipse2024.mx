"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useParams } from "next/navigation";
import type { z } from "zod";
import { Button } from "../ui/button";
import { DataTable } from "../ui/data-table";

import { getStates, slugify } from "@/lib/utils";
import type { citySchema } from "@/schemas/states";

export type City = z.infer<typeof citySchema>;

export const columns: ColumnDef<City>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Nombre
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
  },
  {
    accessorKey: "type",
    header: "Tipo de Eclipse",
  },
  {
    accessorKey: "duration",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Duracion
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
  },
  {
    accessorKey: "partial_start",
    header: "Inicio Parcial",
  },
  {
    accessorKey: "totality_start",
    header: "Inicio Totalidad",
  },
  {
    accessorKey: "maximum",
    header: "Maximo",
  },
  {
    accessorKey: "totality_end",
    header: "Totalidad Fin",
  },
  {
    accessorKey: "partial_end",
    header: "Parcial Fin",
  },
];

export const CitiesSummary = () => {
  const params = useParams<{ state: string }>();

  const stateQuery = getStates().find(
    (state) => slugify(state.name) === params.state,
  );

  if (!stateQuery) return <h1>Please define cities for this state</h1>;

  return <DataTable columns={columns} data={stateQuery.cities} />;
};
