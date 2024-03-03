'use client';

import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";

type Payload = {
  Longitude: number;
  Latitude: number;
  timestamp: string;
  'Distance to Obstruction': number;
  Azimuth: number;
  Height: number;
  Tilt: number;
  Roll: number;
};

const columns: ColumnDef<Payload>[] = [
  {
    accessorKey: "no",
    header: "Row Number",
    cell: ({ row }) => row.index + 1, // Increment the row number starting from 1
  },
  {
    accessorKey: "timestamp",
    header: "TimeStamp"
  },
  {
    accessorKey: "Height",
    header: "Height"
  },
  {
    accessorKey: 'Distance to Obstruction',
    header: "Obstruction"
  },
  {
    accessorKey: "Roll",
    header: "Roll"
  },
  {
    accessorKey: "Tilt",
    header: "Tilt"
  },
  {
    accessorKey: "Azimuth",
    header: "Azimuth"
  },
];

type Props = {};

export default function UsersPage({}: Props) {
  const [payload, setPayload] = useState<Payload[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://iot-temperature-tag.vercel.app/api/rfaudit');
      const data: Payload[] = await response.json();

      // Sort data by timestamp
      data.sort((a: Payload, b: Payload) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

      // Limit data to the latest 50 records
      const latestData = data.slice(0, 200);

      console.log("#######", latestData);
      setPayload(latestData);
    };

    // Fetch data initially
    fetchData();

    // Fetch data every 2 seconds
    const interval = setInterval(fetchData, 60000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Latest Readings" />
      <DataTable columns={columns} data={payload} />
    </div>
  );
}
