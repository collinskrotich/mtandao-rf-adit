'use client';

import { CSSProperties, useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import ClipLoader from "react-spinners/ClipLoader";
import useSWR from "swr";

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

export default function UsersPage() {
  const [payload, setPayload] = useState<Payload[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetcher = async (url: string) => {
    const response = await fetch(url);
    const data: Payload[] = await response.json();
    return data;
  };

  const { data, error } = useSWR('https://iot-temperature-tag.vercel.app/api/rfaudit', fetcher);

  useEffect(() => {
    if (data) {
      setLoading(false);
      setPayload(data.slice(0, 10)); // Load the first 10 records initially
    }
  }, [data]);

  if (error) return <div>Error loading data</div>;

  const handleLoadMore = () => {
    const currentLength = payload?.length;
    const nextChunk = data?.slice(currentLength, currentLength + 10);
    setPayload([...(payload || []), ...(nextChunk || [])]);
  };

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Latest Readings" />
      {loading ? (
        <ClipLoader
          color="#00FF00"
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <DataTable columns={columns} data={payload} />
          <button onClick={handleLoadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-40">
            Load More
          </button>
        </>
      )}
    </div>
  );
}


    // const { data: payload, error } = useSWR<Payload[]>('https://iot-temperature-tag.vercel.app/api/rfaudit', async (url:string) => {
    //   const response = await fetch(url);
    //   const data: Payload[] = await response.json();
    //   // Sort data by timestamp
    //   data.sort((a: Payload, b: Payload) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    //   // Limit data to the latest 50 records
    //   const latestData = data.slice(0, 200);
    //   return latestData;
    // });
  
    // if (error) return <div>Error loading data</div>;
    // if (!payload) return <div>Loading...</div>;
  
    // Rest of your component code using the payload data
