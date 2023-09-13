import React from 'react';

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
            </tr>
        </>
    );
};

export default CustomerSupportTable;