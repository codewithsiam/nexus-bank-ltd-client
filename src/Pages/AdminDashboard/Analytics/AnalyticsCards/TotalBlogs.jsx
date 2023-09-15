import React, { useEffect, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import AnalyticsCardReach from '../../../../components/AnalyticsCardTitle/AnalyticsCardReach';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';
import { baseUrl } from '../../../../config/server';

const TotalBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [data,setData] = useState([]);
    const [single,setSingle] = useState([]);
    console.log(single)

    useEffect(() => {
        fetch(`${baseUrl}/getBlogs`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setData(data);
                data.map(blogs => {
                    setSingle(blogs)
                })
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log(blogs.length); // Check the fetched data in the console

    return (
        <div className='bg-[#FFFFFF] shadow-sm border rounded-xl' style={{ height: '250px' }}>
            <div className="p-5">
                <div className='flex items-center justify-between'>
                    <AnalyticsCardTitle cardTitle='Visits' cardDays='30 Days' />
                </div>

                <div className='flex items-center justify-between'>
                    <AnalyticsCardReach number={blogs.length} targetNumber='2%' subTitle='below target' />
                </div>
            </div>

            {/* chart */}
            <ResponsiveContainer height="45%">
                <AreaChart
                    height={200}
                    data={single} // Use the fetched data
                    margin={{
                        top: 10,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <Tooltip />
                    <Area type="monotone" dataKey="title" strokeWidth={5} stroke="#EF4135" fill="#FDEAEC" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TotalBlogs;
