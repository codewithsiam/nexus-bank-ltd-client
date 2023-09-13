import React from 'react';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import AudienceCardTitle from '../../../../components/AnalyticsCardTitle/AudienceCardTitle';
import { GoDotFill } from 'react-icons/go';
import CurrentAccount from './CurrentAccount';
import DepositAccount from './DepositAccount';
import SavingAccount from './SavingAccount';
import StudentAccount from './StudentAccount';

const NewAudience = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            <CurrentAccount />
            <DepositAccount />
            <SavingAccount />
            <StudentAccount />

        </div>
    );
};

export default NewAudience;
