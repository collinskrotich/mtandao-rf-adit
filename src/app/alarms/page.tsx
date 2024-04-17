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
        accessorKey: "Priority",
        header: "Priority"
      },
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
      accessorKey: "Proposed Action",
      header: "Proposed Action"
    },
    {
      accessorKey: "Sum_of_Devices",
      header: "Sum of Devices"
    },
    {
      accessorKey: "SUM of Customer Complaints",
      header: "SUM of Customer Complaints"
    },
    {
      accessorKey: "3G_PS_Traffic(GB)",
      header: "3G PS Traffic (GB)"
    },
    {
      accessorKey: "DLLoad(%)",
      header: "DL Load (%)"
    },
    {
      accessorKey: "VS_AMR_Erlang_BestCell",
      header: "VS AMR Erlang Best Cell"
    },
    {
      accessorKey: "VS_MaxTCP(dBm)",
      header: "VS Max TCP (dBm)"
    },
    {
      accessorKey: "VS_MeanRTWP(dBm)",
      header: "VS Mean RTWP (dBm)"
    },
    {
      accessorKey: "MeanRTWP",
      header: "Mean RTWP"
    },
    {
      accessorKey: "4G_PS_traffic_Volume(GB)",
      header: "4G PS Traffic Volume (GB)"
    },
    {
      accessorKey: "DL_PRB_Usage_Rate(%)",
      header: "DL PRB Usage Rate (%)"
    },
    {
      accessorKey: "PS_Traffic",
      header: "PS Traffic"
    },
    {
      accessorKey: "Weighted_Value",
      header: "Weighted Value"
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
        <PageTitle title="Alarms" />
        <DataTable columns={columns} data={payload} />
      </div>
    );
  }