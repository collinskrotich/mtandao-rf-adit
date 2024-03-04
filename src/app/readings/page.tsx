'use client';

import { CSSProperties, useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import ClipLoader from "react-spinners/ClipLoader";


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

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "limegreen",
};

type Props = {};
export default function UsersPage({}: Props) {
  const [payload, setPayload] = useState<Payload[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  let [color, setColor] = useState("#00FF00");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching data
      try {
        const response = await fetch('https://iot-temperature-tag.vercel.app/api/rfaudit');
        const data: Payload[] = await response.json();

        // Sort data by timestamp
        data.sort((a: Payload, b: Payload) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

        // Limit data to the latest 50 records
        const latestData = data.slice(0, 200);

        console.log("#######", latestData);
        setPayload(latestData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
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
      {loading ? (
        
                <ClipLoader
        color="#00FF00"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        
        
      ) : (
        <DataTable columns={columns} data={payload} />
      )}
    </div>
  );
}

