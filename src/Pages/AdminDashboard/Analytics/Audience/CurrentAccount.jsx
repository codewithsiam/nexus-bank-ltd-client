import React, { useEffect, useState } from 'react';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';

const CurrentAccount = () => {

    const [currentAccounts, setCurrentAccounts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/current-user-account')
            .then(res => res.json())
            .then(data => {
                setCurrentAccounts(data)
            })
    }, [])

    return (
        <div className='bg-white p-5 rounded-xl'>
            <div className='flex items-center justify-between'>
                <AnalyticsCardTitle cardTitle={`Total Current Accounts ${currentAccounts.length}`} />
            </div>
        </div>
    );
};

export default CurrentAccount;