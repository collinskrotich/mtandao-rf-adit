/** @format */
'use client';

import PageTitle from "@/components/PageTitle";
import { SatelliteDish } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import DataPoint from "@/components/LineChart";
import Googlemap from "@/components/Googlemap";
import { useEffect, useRef, useState } from "react";
import LineChartX from "@/components/LineChart";
import useSWR from 'swr';

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

interface MapProps {
  latitude: number;
  longitude: number;
  antennaHeight: number;
  antennaObstruction: number;
  antennaRoll: number;
  antennaTilt: number;
  antennaAzimuth: number;
}

interface DataPoint {
  name: string;
  traffic: number;
  obstr: number;
  amt: number;
}

export default function Home() {
  const { data: payload, error } = useSWR('https://iot-temperature-tag.vercel.app/api/rfaudit', async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // Sort data by timestamp
    data.sort((a:Payload, b:Payload) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    return data;
  });

  if (error) return <div>Error loading data</div>;
  if (!payload) return <div>Loading...</div>;
  
  const formatDate = (timestamp: string): string => {
    const date = new Date(timestamp);
    date.setHours(date.getHours() + 3); // Add 3 hours for GMT+3
  
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Africa/Nairobi', // Set the timezone to GMT+3
    };
  
    return date.toLocaleString('en-US', options);
  };
  
  const mapData: MapProps[] = [
    {
    latitude: payload[0]?.Latitude,
    longitude: payload[0]?.Longitude,
    antennaHeight: payload[0]?.Height,
    antennaObstruction: payload[0]?.['Distance to Obstruction'],
    antennaRoll: payload[0]?.Roll,
    antennaTilt: payload[0]?.Tilt,
    antennaAzimuth: payload[0]?.Azimuth,
  }
]

  const cardData: CardProps[] = [
    {
      label: 'Antenna Height',
      amount: `${payload[0]?.Height || 0} cm`,
      discription: formatDate(payload[0]?.timestamp || 'Mon, Mar 04, 2024, 06:00:00'),
      icon: SatelliteDish,
    },
    {
      label: 'Antenna Obstruction',
      amount: `${payload[0]?.['Distance to Obstruction'] || 0} cm`,
      discription: formatDate(payload[0]?.timestamp || 'Mon, Mar 04, 2024, 06:00:00'),
      icon: SatelliteDish,
    },
    {
      label: 'Antenna Roll',
      amount: `${payload[0]?.Roll || 0}°`,
      discription: formatDate(payload[0]?.timestamp || 'Mon, Mar 04, 2024, 06:00:00'),
      icon: SatelliteDish,
    },
    {
      label: 'Antenna Tilt',
      amount: `${payload[0]?.Tilt || 0}°`,
      discription: formatDate(payload[0]?.timestamp || 'Mon, Mar 04, 2024, 06:00:00'),
      icon: SatelliteDish,
    },
    {
      label: 'Antenna Azimuth',
      amount: `${payload[0]?.Azimuth || 0}°`,
      discription: formatDate(payload[0]?.timestamp || 'Mon, Mar 04, 2024, 06:00:00'),
      icon: SatelliteDish,
    },
  ];
  
  const obstructionData = payload.filter(item => item['Distance to Obstruction'] < 10).slice(0, 3);
  //Difference between previous and current
  const heightData = payload.filter(item => item.Height < 4).slice(0,3); 

  let prevAzimuth: number | null = null;

const azimuthData = payload.filter(item => {
  if (prevAzimuth !== null && Math.abs(item.Azimuth - prevAzimuth) > 120) {
    return false; // Skip this item
  }

  prevAzimuth = item.Azimuth;
  return true; // Include this item
}).slice(0, 3);

const azimuthSalesCardData = azimuthData.map((item, index) => {
  const diff = prevAzimuth !== null ? Math.abs(item.Azimuth - prevAzimuth) : 0;
  prevAzimuth = item.Azimuth;
  return {
    name: "Azimuth Alarm!",
    email: item.timestamp,
    saleAmount: `Difference: ${diff}`
  };
});

  const obstructionSalesCardData = obstructionData.map((item, index) => ({
    name: "Obstruction Alarm",
    email: item.timestamp,
    saleAmount: `Obstruction: +${item['Distance to Obstruction']}cm`
  }));

  const heightCardData = heightData.map((item, index) => ({
    name: "Antenna Recovery.",
    email: item.timestamp,
    saleAmount: `Height to ground +${item.Height} cm`
  }));

  const data: DataPoint[] = payload.slice(0, 10).map((item, index) => ({
    name: index.toString(),
    traffic: item?.['Distance to Obstruction'] * 77, // Calculate traffic as 77 times the obstruction value
    obstr: item?.['Distance to Obstruction'],
    amt: item?.['Distance to Obstruction']// Use obstruction value for amt as an example
  }));
  

  return (
   
    <div className="flex flex-col gap-5  w-full">

      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-5">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
          ))}
      </section>

      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2 sm:grid-cols-1">
        <CardContent>
          
          <p className="px-4 font-semibold">Map View</p>
          <p className="px-4 text-xs">{formatDate(payload[0]?.timestamp|| 'Mon, Mar 04, 2024, 06:00:00')}</p>

          {mapData.map((data, index) => (
            <Googlemap key={index} {...data} />
          ))}

        </CardContent>

        <CardContent>
        <p className="px-4 font-semibold">Traffic-Obstruction Analysis</p>
        <p className="px-4 text-xs">{formatDate(payload[0]?.timestamp|| 'Mon, Mar 04, 2024, 06:00:00')}</p>
        <LineChartX data={data} />


        </CardContent>
        </section>

        <CardContent className="flex justify-between gap-4 text-xs">
          <section>
          <p className="px-4 font-semibold">Recent Alarms</p>
            <p className="px-4 text-sm text-gray-400">
            Showing the last {obstructionSalesCardData.length +heightCardData.length+ azimuthSalesCardData.length} alarms today.
          </p>
          </section>

          {[...obstructionSalesCardData, ...heightCardData, ...azimuthSalesCardData].map((d, i) => (
          <SalesCard
            key={i}
            name={d.name}
            email={d.email}
            saleAmount={d.saleAmount}
            
          />
        ))}
      </CardContent>

      
    </div>
  );
}
