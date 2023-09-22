import React from 'react';
import LeftSide from '../SavingAccount/LeftSide';
import CurrentForm from './CurrentForm';

const CurrentAccount = () => {
    return (
        <div className='mt-20 lg:flex px-4 gap-10 w-full max-w-screen-xl mx-auto'>
            <div className='w-full lg:w-2/5'>
                <LeftSide accountName={"Current Account"} accountImage={"https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2022/05/Shutterstock_2125411304.png"} description={"A Current Account, also known as a checking account, is a standard bank account that allows for frequent deposits, withdrawals, and easy access to funds. It's ideal for day-to-day transactions, bill payments, and managing your regular expenses. Current accounts often come with features like checks and debit cards."}/>
            </div>
            <div className='w-full lg:w-3/5'>
             <CurrentForm/>
            </div>
        </div>
    );
};

export default CurrentAccount;