import React from 'react';
import {Link} from 'react-router-dom';
import creditCard from '../../../assets/images/Home/personalized.png';


const CreditCardPayment = () => {
    return (
        <div className='bg-[#F7F9FA] py-10'>
            <div className="container mx-auto px-3 ">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 items-center'>
                    <div className=''>
                        <h1 className="text-3xl lg:text-5xl my-2 lg:mt-3 lg:mb-5 text-blue-950 font-semibold">Need a Personalized Solution?</h1>
                        <p className="paragraph mb-8">
                        Get in touch with us, and we will help you to create the right one for your business or personal needs.
                        </p>
                        <Link to="/dashboard/apply-loan" 
                        className='my-btn mt-5 text-white px-5 py-3 rounded-lg'>Apply for Loan</Link>
                    </div>
                    <div className='mx-auto'>
                        <img className='mx-auto w-5/6' src={creditCard} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCardPayment;