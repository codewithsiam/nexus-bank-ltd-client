import React, { useEffect, useState } from 'react';
import CustomerSupportTable from './CustomerSupportTable';
import axios from 'axios'

const CustomerSupport = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/support-customers')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div className='mt-11'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map((detail,index) => <CustomerSupportTable
                                key={detail._id}
                                detail={detail}
                                index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerSupport;