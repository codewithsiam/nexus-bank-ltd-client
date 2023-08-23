import React from 'react';
import LeftSide from './LeftSide';
import Form from './Form';

const SavingAccountForm = () => {
    return (
        <div className='mt-28 flex gap-10 w-full max-w-screen-xl mx-auto'>
          <div className='w-2/5'>
                <LeftSide/>
          </div>
          <div className='w-3/5'>
            <Form/>
          </div>
        </div>
    );
};

export default SavingAccountForm;