import React from 'react';
import { MdAirlineStops } from 'react-icons/md';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import AnalyticsCardReach from '../../../../components/AnalyticsCardTitle/AnalyticsCardReach';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';


const data = [
    {
        name: 'Page A',
        uv: 10,
        pv: 2,
        amt: 2,
    },
    {
        name: 'Page B',
        uv: 8,
        pv: 1,
        amt: 2,
    },
    {
        name: 'Page B',
        uv: 6,
        pv: 2,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 7,
        pv: 9,
        amt: 2,
    },
    {
        name: 'Page C',
        uv: 9,
        pv: 4,
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
        uv: 4,
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

const VisitsCard = () => {
    return (
        <div>
            <div className='bg-[#FFFFFF] shadow-sm border rounded-xl' style={{ height: '250px' }}>
                <div className="p-5">
                    <div className='flex items-center justify-between'>
                        <AnalyticsCardTitle cardTitle='Visits' cardDays='30 Days'/>
                    </div>

                    <div className='flex items-center justify-between'>
                        <AnalyticsCardReach number='3,453' targetNumber='9%' subTitle='below target'/>
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
                        <Area type="monotone" className='border-8' dataKey="uv" strokeWidth={5} stroke="#EF4135" fill="#FDEAEC" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default VisitsCard;