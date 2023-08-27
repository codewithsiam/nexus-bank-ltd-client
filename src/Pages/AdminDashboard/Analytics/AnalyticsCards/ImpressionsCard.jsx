import React from 'react';
import { MdAirlineStops } from 'react-icons/md';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import AnalyticsCardReach from '../../../../components/AnalyticsCardTitle/AnalyticsCardReach';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';


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


const ImpressionsCard = () => {
    return (
        <div>
            <div className='bg-[#FFFFFF] shadow-sm border rounded-xl' style={{ height: '250px' }}>
                <div className="p-5">
                    <div className='flex items-center justify-between'>
                        <AnalyticsCardTitle cardTitle='Impressions' cardDays='30 Days' />
                    </div>
                    
                    <div className='flex items-center justify-between'>
                        <AnalyticsCardReach number='1.1M' targetNumber='7%' subTitle='below target'/>
                    </div>
                </div>

                {/* chart */}
                <ResponsiveContainer width="100%" height="50%">
                    <AreaChart
                        width={500}
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
        </div>
    );
};

export default ImpressionsCard;