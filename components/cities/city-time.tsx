import type { Row } from "@tanstack/react-table";
import type { City } from "./city-columns";

import { getLocalTime } from "@/lib/utils";

export const FormattedTime = ({
  row,
  value,
}: {
  row: Row<City>;
  value: string;
}) => (
  <div className="min-w-max">
    {getLocalTime({
      utcTime: value,
      dateTimezone: row.original.timezone,
      dateDst: row.original.dst,
    })}
  </div>
);
