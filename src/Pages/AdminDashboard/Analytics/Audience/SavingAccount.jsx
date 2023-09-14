import React, { useEffect, useState } from 'react';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';

const SavingAccount = () => {

    const [savingAccounts, setSavingAccounts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/saving-user-account')
            .then(res => res.json())
            .then(data => {
                setSavingAccounts(data)
            })
    }, [])

    return (
        <div className='bg-white p-5 rounded-xl'>
            <div className='flex items-center justify-between'>
                <AnalyticsCardTitle cardTitle={`Total Saving Accounts`} total={savingAccounts.length} />
            </div>
        </div>
    );
};

export default SavingAccount;