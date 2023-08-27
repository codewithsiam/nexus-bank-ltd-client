import React from 'react';
import { MdAirlineStops } from 'react-icons/md';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import AnalyticsCardReach from '../../../../components/AnalyticsCardTitle/AnalyticsCardReach';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';


const data = [
    {
        name: 'Page A',
        uv: 4,
        pv: 2,
        amt: 2,
    },
    {
        name: 'Page B',
        uv: 3,
        pv: 1,
        amt: 2,
    },
    {
        name: 'Page B',
        uv: 10,
        pv: 2,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 2,
        pv: 9,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 8,
        pv: 4,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 7,
        pv: 4,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 2,
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

const ConversionsCard = () => {
    return (
        <div>
            <div className='bg-[#FFFFFF] shadow-sm border rounded-xl' style={{ height: '250px' }}>
                <div className="p-5">
                    <div className='flex items-center justify-between'>
                        <AnalyticsCardTitle cardTitle='Conversions' cardDays='30 Days' />
                    </div>

                    <div className='flex items-center justify-between'>
                        <AnalyticsCardReach number='2.1M' targetNumber='2%' subTitle='below target'/>
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
                        <Area type="monotone" className='border-8' dataKey="uv" strokeWidth={5} stroke="#4F46E5" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ConversionsCard;