import React from 'react';
import LeftSide from '../SavingAccount/LeftSide';
import CurrentForm from '../CurrentAccount/CurrentForm';
import DepositForm from './DepositForm';

const DepositAccount = () => {
    return (
        <div className='mt-20 flex gap-10 w-full max-w-screen-xl mx-auto'>
            <div className='w-2/5'>
                <LeftSide/>
            </div>
            <div className='w-full md:w-3/5'>
             <DepositForm/>
            </div>
        </div>
    );
};

export default DepositAccount;