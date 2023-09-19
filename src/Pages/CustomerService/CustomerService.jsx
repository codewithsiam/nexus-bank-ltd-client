import React from 'react';
import CustomerServiceForm from './CustomerServiceForm';
import './CustomerService.css'

const CustomerService = () => {
    return (
        <div className="mt-11">
            <div className="cover-image">
                <h3 className="text-xl ml-3">Nexus</h3>
                <h1 className='text-3xl ml-3 font-bold'>Customer Service Portal</h1>
            </div>

            <CustomerServiceForm/>
        </div>
    );
};

export default CustomerService;