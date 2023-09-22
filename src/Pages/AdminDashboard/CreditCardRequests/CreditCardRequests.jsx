import React from 'react';
import CardRequestTable from './CardRequestTable';

const CreditCardRequests = () => {
    return (
        <div>
            <h1 className='mt-24 font-semibold text-2xl border-b-2 pb-3 border-black'>Credit Card Request</h1>
            <CardRequestTable/>
        </div>
    );
};

export default CreditCardRequests;