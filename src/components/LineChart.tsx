import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  traffic: number;
  obstr: number;
  amt: number;
}

interface LineChartProps {
  data: DataPoint[];
}

const CustomLineChart: React.FC<LineChartProps> = ({ data }) => {
    const chartData = data.slice(data.length - 10).map((point, index) => ({
      ...point,
      traffic: point.obstr * 2.3, // Calculate traffic value
      name: `${index * 2}`,
      amt:point.obstr // Update name if needed
    })).reverse(); 

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: 'Time(sec)', position: 'insideBottom', offset: -9 }} />
          <YAxis yAxisId="left" label={{ value: 'Obstruction(cm)', angle: -90, position: 'insideLeft', offset: 0 }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Traffic(MB/s)', angle: -90, position: 'insideRight', offset: 0 }} />
          <Tooltip labelStyle={{ color: 'blue'}}/>
          <Legend  />
          <Line yAxisId="left" type="monotone" dataKey="obstr" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="traffic" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  );
};

export default CustomLineChart;
