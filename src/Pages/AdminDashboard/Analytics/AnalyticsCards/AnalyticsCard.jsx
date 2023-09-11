import React from 'react';
import { MdAirlineStops } from 'react-icons/md';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import AnalyticsCardReach from '../../../../components/AnalyticsCardTitle/AnalyticsCardReach';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';
import TotalUsers from './TotalTransferAmount';


const data = [
    {
        name: 'Page A',
        uv: 6,
        pv: 2,
        amt: 2,
    },
    {
        name: 'Page B',
        uv: 7,
        pv: 1,
        amt: 2,
    },
    {
        name: 'Page B',
        uv: 4,
        pv: 2,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 6,
        pv: 9,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 5,
        pv: 4,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 6,
        pv: 4,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 8,
        pv: 9,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 2,
        pv: 9,
        amt: 2,
    }
];


const AnalyticsCard = () => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
            
            <TotalUsers/>

            {/* Impression */}
            <div className='bg-[#FFFFFF] shadow-sm border rounded-xl' style={{ height: '250px' }}>
                <div className="p-5">
                    <div className='flex items-center justify-between'>
                        <AnalyticsCardTitle cardTitle='Total Transcation' cardDays='30 Days' />
                    </div>
                    
                    <div className='flex items-center justify-between'>
                        <AnalyticsCardReach number='1.9M' targetNumber='3%' subTitle='below target'/>
                    </div>
                </div>

                {/* chart */}
                <ResponsiveContainer height="50%">
                    <AreaChart
                        height={200}
                        data={data}
                        margin={{
                            top: 10,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <Tooltip />
                        <Area type="monotone" className='border-8' dataKey="uv" strokeWidth={5} stroke="#2F7D33" fill="#C4E3C5" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>


            {/* visits */}
            <div className='bg-[#FFFFFF] shadow-sm border rounded-xl' style={{ height: '250px' }}>
                <div className="p-5">
                    <div className='flex items-center justify-between'>
                        <AnalyticsCardTitle cardTitle='Visits' cardDays='30 Days' />
                    </div>
                    
                    <div className='flex items-center justify-between'>
                        <AnalyticsCardReach number='5.4M' targetNumber='2%' subTitle='below target'/>
                    </div>
                </div>

                {/* chart */}
                <ResponsiveContainer height="50%">
                    <AreaChart
                        height={200}
                        data={data}
                        margin={{
                            top: 10,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <Tooltip />
                        <Area type="monotone" className='border-8' dataKey="uv" strokeWidth={5} stroke="#EF4135" fill="#FDEAEC" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsCard;