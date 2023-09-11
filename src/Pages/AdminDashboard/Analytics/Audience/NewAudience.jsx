import React from 'react';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import AudienceCardTitle from '../../../../components/AnalyticsCardTitle/AudienceCardTitle';
import { GoDotFill } from 'react-icons/go';
import CurrentAccount from './CurrentAccount';
import DepositAccount from './DepositAccount';



const visitors = [
    { name: 'Group A', value: 200 },
    { name: 'Group B', value: 900 },
];
const gender = [
    { name: 'Group A', value: 800 },
    { name: 'Group B', value: 700 },
];
const age = [
    { name: 'Group A', value: 600 },
    { name: 'Group B', value: 900 },
];
const language = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 900 },
];

const visitorsColors = ['#3182CE', '#63B3ED'];
const genderColors = ['#4FD1C5', '#489795'];
const ageColors = ['#F6AD55', '#DD6B20'];
const languageColors = ['#B794F4', '#805AD5'];

const NewAudience = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            
            <CurrentAccount/>

            {/* deposit account */}
            <DepositAccount/>
            

            {/* age */}
            <div className='bg-white p-5 rounded-xl'>
                <div className='flex items-center justify-between'>
                    <AnalyticsCardTitle cardTitle='Age' cardDays='30 Days' />
                </div>

                <ResponsiveContainer height={300}>
                    <PieChart>
                        <Tooltip />
                        <Pie
                            data={age}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {age.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={ageColors[index % ageColors.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <hr className='mt-7' />

                <div className='flex items-center justify-between py-5'>
                    <AudienceCardTitle newTitle="New" newNumber="3,231" newPercent="90%" />
                </div>
            </div>

            {/* language */}
            <div className='bg-white p-5 rounded-xl'>
                <div className='flex items-center justify-between'>
                    <AnalyticsCardTitle cardTitle='language' cardDays='30 Days' />
                </div>

                <ResponsiveContainer height={300}>
                    <PieChart>
                        <Tooltip />
                        <Pie
                            data={language}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {language.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={languageColors[index % languageColors.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>


                <hr className='mt-7' />

                <div className='flex items-center justify-between py-5'>
                    <AudienceCardTitle newTitle="New" newNumber="3,231" newPercent="90%" />
                </div>
            </div>
        </div>
    );
};

export default NewAudience;
