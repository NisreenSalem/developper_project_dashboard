import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Area,
} from "recharts";

import carStaticsData from "../assets/dummy-data/carStatics";

const CarStatsChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={carStaticsData}
        margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#FF764C"
             
             stopOpacity={0.6} />
            <stop offset="80%" stopColor="#FF764C" stopOpacity={0.2} />
          </linearGradient>

          
        </defs>
        <XAxis dataKey="name" stroke="#808191" />
        
        <Area
          type="monotone"
          dataKey="week"
          stroke="#FF764C"
          fillOpacity={.8}
          fill="url(#color)"
        />
        
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CarStatsChart;
