import React from 'react';
import CustomerServiceForm from './CustomerServiceForm';

const CustomerService = () => {
    return (
        <div className="mt-11">
            <div>
                <img className="h-[300px] w-full" src='https://i.ibb.co/3p3Xc0H/customer.png' alt="" />
            </div>

            <CustomerServiceForm/>
        </div>
    );
};

export default CustomerService;