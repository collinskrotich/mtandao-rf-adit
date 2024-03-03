'use client'

import { useEffect, useState } from 'react';
import PageTitle from '@/components/PageTitle';
import { SatelliteDish } from 'lucide-react';
import Card, { CardContent, CardProps } from '@/components/Card';
import SalesCard, { SalesProps } from '@/components/SalesCard';
import Googlemap from '@/components/Googlemap';

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

const Home = () => {
  const [payload, setPayload] = useState<Payload[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://iot-temperature-tag.vercel.app/api/rfaudit');
      const data = await response.json();
      console.log("#######", data);
      setPayload(data);
    };

    fetchData();
  }, []);

  

  const cardData: CardProps[] = [
    {
      label: 'Antenna Height',
      amount: `${payload[0]?.Height || 0} cm`,
      discription: 'NB-IOT Antenna',
      icon: SatelliteDish,
    },
    {
      label: 'Antenna Obstruction',
      amount: `${payload[0]?.['Distance to Obstruction'] || 0} cm`,
      discription: '200% Increase from last reading',
      icon: SatelliteDish,
    },
    {
      label: 'Antenna Roll',
      amount: `${payload[0]?.Roll || 0}°`,
      discription: '',
      icon: SatelliteDish,
    },
    {
      label: 'Antenna Tilt',
      amount: `${payload[0]?.Tilt || 0}°`,
      discription: '20% decrease from last reading',
      icon: SatelliteDish,
    },
    {
      label: 'Antenna Azimuth',
      amount: `${payload[0]?.Azimuth || 0}°`,
      discription: '30 deg off ideal',
      icon: SatelliteDish,
    },
  ];

  const uesrSalesData: SalesProps[] = [
    {
      name: 'Antenna Obstruction',
      email: 'New obstruction',
      saleAmount: `+${payload[0]?.['Distance to Obstruction'] || 0} cm`,
    },
    {
      name: 'Antenna Azimuth Offset',
      email: 'Azimuth change',
      saleAmount: '+150cm',
    },
    {
      name: 'Antenna Tilt',
      email: 'Offset',
      saleAmount: '+20cm',
    },
    {
      name: 'Antenna Roll',
      email: 'Offset',
      saleAmount: '-42cm',
    },
    {
      name: 'Antenna Tilt',
      email: 'Offset',
      saleAmount: '+200cm',
    },
    {
      name: 'Antenna Obstruction',
      email: 'New obstruction',
      saleAmount: '+200cm',
    },
  ];

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

      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Map View</p>
          <Googlemap
  latitude={-1.49}
  longitude={36.97}
  antennaHeight={4}
  antennaObstruction={157}
  antennaRoll={212.68}
  antennaTilt={264.85}
  antennaAzimuth={183.31}
/>

        </CardContent>
      

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <p>Recent Alarms</p>
        <p className="text-sm text-gray-400">There are 24 alarms today.</p>
        </section>

        {uesrSalesData.map((d, i) => (
          <SalesCard key={i} email={d.email} name={d.name} saleAmount={d.saleAmount} />
        ))}
      </section>
    </div>
  );
};

export default Home;
