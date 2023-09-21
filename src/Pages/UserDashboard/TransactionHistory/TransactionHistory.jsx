import React from 'react';
import RecentTransactions from './RecentTransactions';
import Statement from './Statement';

const TransactionHistory = () => {
    return (
        <div className='mt-7 py-11'>
            <h1 className='text-2xl font-bold'>Transaction History</h1>
            <p className='text-[#6F7A83]'>Keep track of your financial status</p>


            {/* Transaction table */}
            <RecentTransactions />

        </div>
    );
};

export default TransactionHistory;