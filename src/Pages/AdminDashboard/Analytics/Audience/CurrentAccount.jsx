import React, { useEffect, useState } from 'react';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';
import { baseUrl } from '../../../../config/server';

const CurrentAccount = () => {

    const [currentAccounts, setCurrentAccounts] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/current-user-account`)
            .then(res => res.json())
            .then(data => {
                setCurrentAccounts(data)
            })
    }, [])

    return (
        <div className='bg-white p-5 rounded-xl'>
            <div className='flex items-center justify-between'>
                <AnalyticsCardTitle cardTitle={`Total Current Accounts`} total={currentAccounts.length} />
            </div>
        </div>
    );
};

export default CurrentAccount;