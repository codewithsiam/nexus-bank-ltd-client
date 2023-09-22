import React, { useEffect, useState } from 'react';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';
import { baseUrl } from '../../../../config/server';

const DepositAccount = () => {

    const [depositAccounts, setDepositAccounts] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/deposit-user-account`)
            .then(res => res.json())
            .then(data => {
                setDepositAccounts(data)
            })
    }, [])

    return (
        <div className='bg-white p-5 rounded-xl'>
            <div className='flex items-center justify-between'>
                <AnalyticsCardTitle cardTitle={`Total Deposit Accounts`} total={depositAccounts.length} />
            </div>
        </div>
    );
};

export default DepositAccount;