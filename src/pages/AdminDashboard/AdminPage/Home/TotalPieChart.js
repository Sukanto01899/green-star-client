import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const TotalPieChart = ({orderStatus}) => {
  const {pending, paid, shipped, canceled}  = orderStatus
  const data = [
    { name: "Pending", value: pending },
    { name: "Paid", value: paid },
    { name: "Shipped", value: shipped },
    { name: "Canceled", value: canceled }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
      <PieChart width={500} height={330}>
      <Pie
        data={data}
        cx={200}
        cy={170}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        
      </Pie>
      <Tooltip/>
      <Legend/>
    </PieChart>
    );
};

export default TotalPieChart;