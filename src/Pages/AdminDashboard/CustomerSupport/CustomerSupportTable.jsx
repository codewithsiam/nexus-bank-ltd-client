import React from 'react';
import { Link } from 'react-router-dom';

const CustomerSupportTable = ({ detail, index }) => {
    const { customerName, mobileNo, emailAddress, accountType, details } = detail;
    console.log(customerName)
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{customerName}</td>
                <td>{mobileNo}</td>
                <td>{emailAddress}</td>
                <td>{accountType}</td>
                <td>{details}</td>
                <Link className='bg-[#3E639F] px-3 py-2 rounded text-white'>
                    <button>Details</button>
                </Link>
            </tr>
        </>
    );
};

export default CustomerSupportTable;