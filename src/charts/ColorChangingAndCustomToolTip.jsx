// These are the codes from Recharts
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer
} from "recharts";
import CustomTooltip from "../components/UI/Customtooltip";



const data = [
  {
    name: "1 PM",
    mileStats: 6000,
  },
  {
    name: "2 PM",
    mileStats: 5000,
  },
  {
    name: "3 PM",
    mileStats: 7000,
  },
  {
    name: "4 PM",
    mileStats: 5780,
  },
  {
    name: "5 PM",
    mileStats: 4890,
  },
  {
    name: "6 PM",
    mileStats: 6390,
  },
  {
    name: "8 PM",
    mileStats: 5490,
  }, 
];


function ColorChangingAndCustomToolTip() {
  const [focusBar, setFocusBar] = useState(null);
  const [mouseLeave, setMouseLeave] = useState(true);
  return (
    <ResponsiveContainer>
    <BarChart data={data}
     
      onMouseMove={(state) => {
        if (state.isTooltipActive) {
          setFocusBar(state.activeTooltipIndex);
          setMouseLeave(false);
        } else {
          setFocusBar(null);
          setMouseLeave(true);
        }
      }}
    >
      
      <XAxis dataKey="name"  stroke="#808191"/>
     
      <Tooltip cursor={false} content={<CustomTooltip></CustomTooltip>} />
      <Legend />
      <Bar dataKey="mileStats" barSize={30} fill="#2B5CE7">
        {data.map((entry, index) => (
          <Cell
            fill={
              focusBar === index || mouseLeave
                ? "#2B5CE7"
                : "#f4f5f9"
            }
          />
        ))}
      </Bar>
    </BarChart>
  
    </ResponsiveContainer>
    );
}

export default ColorChangingAndCustomToolTip;
