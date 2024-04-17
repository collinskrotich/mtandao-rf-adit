'use client';

import { CSSProperties, useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import ClipLoader from "react-spinners/ClipLoader";
import useSWR from "swr";
import pri_data from "../data"

type Payload = {
    SiteName: string;
    LATITUDE: number;
    LONGITUDE: number;
    Priority: number;
    'Proposed Action': string;
    Sum_of_Devices: number;
    'SUM of Customer Complaints': number;
    '3G_PS_Traffic(GB)': number;
    'DLLoad(%)': number;
    'VS_AMR_Erlang_BestCell': number;
    'VS_MaxTCP(dBm)': number;
    'VS_MeanRTWP(dBm)': number;
    MeanRTWP: number;
    '4G_PS_traffic_Volume(GB)': number;
    'DL_PRB_Usage_Rate(%)': number;
    PS_Traffic: number;
    Weighted_Value: number;
  };
  

const columns: ColumnDef<Payload>[] = [

    {
      accessorKey: "SiteName",
      header: "Site Name"
    },
    {
      accessorKey: "LATITUDE",
      header: "Latitude"
    },
    {
      accessorKey: "LONGITUDE",
      header: "Longitude"
    },
    {
      accessorKey: "Priority",
      header: "Computed Priority"
    },
    {
      accessorKey: "Proposed Action",
      header: "Proposed Solution"
    },
    {
      accessorKey: "Sum_of_Devices",
      header: "No of Customers"
    },
    {
      accessorKey: "SUM of Customer Complaints",
      header: "No of Customer Complaints"
    },
    // {
    //   accessorKey: "3G_PS_Traffic(GB)",
    //   header: "3G Traffic (GB)"
    // },
    {
      accessorKey: "DLLoad(%)",
      header: "3G Utilization(%)"
    },
    {
      accessorKey: "VS_AMR_Erlang_BestCell",
      header: "Voice Traffic"
    },
    {
      accessorKey: "VS_MeanRTWP(dBm)",
      header: "Interference (dBm)"
    },
    // {
    //   accessorKey: "4G_PS_traffic_Volume(GB)",
    //   header: "4G Traffic(GB)"
    // },
    {
      accessorKey: "DL_PRB_Usage_Rate(%)",
      header: "4G Utilization(%)"
    },
    {
      accessorKey: "PS_Traffic",
      header: "Data Traffic"
    },
    {
      accessorKey: "Weighted_Value",
      header: "Score"
    }
];

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "limegreen",
};

export default function UsersPage() {
    const [payload, setPayload] = useState<Payload[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      if (pri_data) {
        setLoading(false);
        setPayload(pri_data); // Load the first 10 records initially
      }
    }, []);
  
    if (loading) return <ClipLoader color="#00FF00" loading={loading} size={50} aria-label="Loading Spinner" />;
  
    return (
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Site Prioritization" />
        <DataTable columns={columns} data={payload} />
      </div>
    );
  }