/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity, SatelliteDish } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import Googlemap from "@/components/Googlemap";

const cardData: CardProps[] = [
  {
    label: "Antenna Height",
    amount: "4 cm",
    discription: "NB-IOT Antenna",
    icon: SatelliteDish
  },
  {
    label: "Antenna Obstruction",
    amount: "157 cm",
    discription: "200% Increase from last reading",
    icon: SatelliteDish
  },
  {
    label: "Antenna Roll",
    amount: "212.68°",
    discription: "",
    icon: SatelliteDish
  },
  {
    label: "Antenna Tilt",
    amount: "264.85° ",
    discription: "20% decrease from last reading",
    icon: SatelliteDish
  },
  {
    label: "Antenna Azimuth",
    amount: "183.31°",
    discription: "30 deg off ideal",
    icon: SatelliteDish
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Antenna Obstruction",
    email: "New obstruction",
    saleAmount: "+200cm"
  },
  {
    name: "Antenna Azimuth Offset",
    email: "Azimuth change",
    saleAmount: "+150cm"
  },
  {
    name: "Antenna Tilt",
    email: "Offset",
    saleAmount: "+20cm"
  },
  {
    name: "Antenna Roll",
    email: "Offset",
    saleAmount: "-42cm"
  },
  {
    name: "Antenna Tilt",
    email: "Offset",
    saleAmount: "+200cm"
  },
  {
    name: "Antenna Obstruction",
    email: "New obstruction",
    saleAmount: "+200cm"
  },
];

export default function Home() {
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
          <p className="p-4 font-semibold">Overview</p>

          <Googlemap/>
        </CardContent>

        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Alarms</p>
            <p className="text-sm text-gray-400">
              There are 24 alarms today.
            </p>
          </section>

          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
