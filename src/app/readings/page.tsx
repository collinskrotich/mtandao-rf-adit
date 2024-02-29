/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  timestamp: string;
  height: string;
  obstruction: string;
  roll: string;
  tilt: string;
  azimuth: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Antenna Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">

          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "timestamp",
    header: "TimeStamp"
  },
  {
    accessorKey: "height",
    header: "Height"
  },
  {
    accessorKey: "obstruction",
    header: "Obstruction"
  },
  {
    accessorKey: "roll",
    header: "Roll"
  },
  {
    accessorKey: "tilt",
    header: "Tilt"
  },
  {
    accessorKey: "azimuth",
    header: "Azimuth"
  },
];

const timestampx = Date.now();
const date = new Date(timestampx).toLocaleString();

const data: Payment[] = [
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
  {
    name: "Arduino device",
    timestamp: date,
    height: "4cm",
    obstruction: "157cm",
    roll: "212.68°",
    tilt:"264.85°",
    azimuth:"183.31°",
  },
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Latest Readings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
