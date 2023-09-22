import React, { useEffect, useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { baseUrl } from '../../../config/server';

const VisitorsChart = () => {
    const [visitors, setVisitors] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/users`)
            .then((res) => res.json())
            .then((data) => {
                setVisitors(data);
            });
    }, []); 

    const chartData = [{ length: visitors.length }];

    return (
        <ResponsiveContainer width='100%' height={250}>
            <AreaChart
                width='100%'
                data={chartData}
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis className='text-white' dataKey="length" />
                <Tooltip />
                <Area type="monotone" dataKey="length" strokeWidth={2} stroke="#818CF8" fill="#2D3167" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default VisitorsChart;
