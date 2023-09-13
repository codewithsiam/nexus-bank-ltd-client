import React, { useState, useEffect } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import AnalyticsCardReach from '../../../../components/AnalyticsCardTitle/AnalyticsCardReach';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';


const TotalLoan = () => {
    const [totalLoanAmount, setTotalLoanAmount] = useState([]);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/loans')
            .then(res => res.json())
            .then(data => {
                const allData = data;
                const totalAmount = allData.reduce((acc, loan) => {
                    return acc + parseInt(loan.loanAmount);
                }, 0);

                setTotalLoanAmount(totalAmount);
                setData(data);
            });
    }, []);

    return (
        <div className='bg-[#FFFFFF] shadow-sm border rounded-xl' style={{ height: '250px' }}>
            <div className="p-5">
                <div className='flex items-center justify-between'>
                    <AnalyticsCardTitle cardTitle='Total Loan' />
                </div>

                <div className='flex items-center justify-between'>
                    <AnalyticsCardReach number={`${totalLoanAmount} BDT`} targetNumber='3%' subTitle='below target' />
                </div>
            </div>

            {/* chart */}
            <ResponsiveContainer height="45%">
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
                    <Area type="monotone" dataKey="loanAmount" strokeWidth={5} stroke="#4F46E3" fill="#CED2FA" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TotalLoan;
