import React from 'react';
import LeftSide from './LeftSide';
import Form from './Form';

const SavingAccountForm = () => {

    return (
        <div className='mt-20 flex gap-10 w-full max-w-screen-xl mx-auto'>
          <div className='w-2/5'>
                <LeftSide accountName={"Saving Account"} accountImage={"https://media.istockphoto.com/id/1295025460/vector/education-fund-collect-money-for-school-college-and-university-cost-or-student-scholarship.jpg?s=612x612&w=0&k=20&c=F1GxRdA0eo_qqEOHLOExZHrFBZzfE9rAIuqgAHOahBU="} description={"A Savings Account is a basic account designed for saving money over time. It usually offers a modest interest rate and easy access to your funds. Savings accounts are suitable for building an emergency fund, setting aside money for future goals, and earning a small return on your savings."} />
          </div>
          <div className='w-full md:w-3/5'>
            <Form/>
          </div>
        </div>
    );
};

export default SavingAccountForm;