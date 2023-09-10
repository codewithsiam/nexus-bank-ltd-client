import React from 'react';
import LeftSide from '../SavingAccount/LeftSide';
import CurrentForm from '../CurrentAccount/CurrentForm';
import DepositForm from './DepositForm';

const DepositAccount = () => {
    return (
        <div className='mt-20 flex gap-10 w-full max-w-screen-xl mx-auto'>
            <div className='w-2/5'>
                <LeftSide accountName={"Deposit Account"} accountImage={"https://img.freepik.com/premium-vector/personal-banking-deposit-account-financial-management_88272-4465.jpg?w=2000"} description={"A Deposit Account is a type of savings account where you can deposit a lump sum of money for a fixed period, known as the deposit term. During this period, the money typically earns a higher interest rate compared to a regular savings account. It's a secure way to save money for a specific goal or timeframe."}/>
            </div>
            <div className='w-full md:w-3/5'>
             <DepositForm/>
            </div>
        </div>
    );
};

export default DepositAccount;