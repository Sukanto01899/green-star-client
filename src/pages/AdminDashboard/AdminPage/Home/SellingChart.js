import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';


const SellingChart = ({orders}) => {
    const [data, setData] = useState([]);
    
      useEffect(()=>{
        const month_name = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nav', 'Dec']
        const date = new Date();
        const month_number = date.getMonth();
        const fullYearData = [];
        
        for(const month of month_name){
            let saleCount =0;
            for(const order of orders){
                if(month_name.indexOf(month) === parseInt(order.time.split('-')[1])){
                    saleCount++
                }
            }
            fullYearData.push({Month: month, Sales: saleCount})
        }

        const custom_data = [
            fullYearData[month_number + 7],
            fullYearData[month_number-4],
            fullYearData[month_number-3],
            fullYearData[month_number-2],
            fullYearData[month_number-1],
            fullYearData[month_number]
        ];
        setData(custom_data);
      }, [orders])
    
    return (
        
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="Month" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Sales" fill="#7BAF2F" background={{ fill: '#eee' }} />
        </BarChart>
      
    );
};

export default SellingChart;