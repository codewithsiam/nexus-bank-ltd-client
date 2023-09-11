import React from 'react';
import { MdAirlineStops } from 'react-icons/md';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import AnalyticsCardReach from '../../../../components/AnalyticsCardTitle/AnalyticsCardReach';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';
import TotalBlogs from './TotalBlogs';
import TotalLoan from './TotalLoan';
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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">

            <TotalUsers />

            {/* total loan */}
            <TotalLoan />


            {/* total employee */}
            {/* <TotalBlogs/> */}
        </div>
    );
};

export default AnalyticsCard;