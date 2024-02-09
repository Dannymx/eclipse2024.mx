"use client";

import { useParams } from "next/navigation";
import { DataTable } from "../ui/data-table";
import { columns } from "./city-columns";

import { getStates, slugify } from "@/lib/utils";

export const CitiesSummary = () => {
  const params = useParams<{ state: string }>();

  const stateQuery = getStates().find(
    (state) => slugify(state.name) === params.state,
  );

  if (!stateQuery) return <h1>Please define cities for this state</h1>;

  return <DataTable columns={columns} data={stateQuery.cities} />;
};
