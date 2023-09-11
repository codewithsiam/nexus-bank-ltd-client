import React, { useEffect, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import AnalyticsCardReach from '../../../../components/AnalyticsCardTitle/AnalyticsCardReach';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';

const TotalUsers = () => {
    const [transactions, setTransactions] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/money-transfer')
            .then(res => res.json())
            .then(data => {
                const money = data;
                const totalAmount = money.reduce((acc, transaction) => {
                    return acc + transaction.transferAmount;
                }, 0);
                setTransactions(totalAmount);
                setData(data);
            })
    }, []);

    return (
        <div className='bg-[#FFFFFF] shadow-sm border rounded-xl' style={{ height: '250px' }}>
            <div className="p-5">
                <div className='flex items-center justify-between'>
                    <AnalyticsCardTitle cardTitle='Total Transfer Amount'/>
                </div>

                <div className='flex items-center justify-between'>
                    <AnalyticsCardReach number={`${transactions} BDT`} />
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
                    <Area type="monotone" dataKey="transferAmount" strokeWidth={5} stroke="#4F46E3" fill="#CED2FA" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TotalUsers;
