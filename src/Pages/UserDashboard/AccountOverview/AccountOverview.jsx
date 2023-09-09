import React from 'react';

const accounts = [
    {
      "Account Type": "Savings",
      "Account No": "1234567890",
      "Status": "Active",
      "Balance": 5000
    },
    {
      "Account Type": "Checking",
      "Account No": "9876543210",
      "Status": "Active",
      "Balance": 2500
    },
    {
      "Account Type": "Credit Card",
      "Account No": "5432109876",
      "Status": "Active",
      "Balance": -1000
    }
];
const cards = [
    {
      "Card_Type": "Credit Card",
      "Card_Number": "1234 5678 9012 3456",
      "Cardholder_Name": "John Doe",
      "Status": "Active",
      "Available_Amount": 5000.00
    },
    {
      "Card_Type": "Payroll Card",
      "Card_Number": "9876 5432 1098 7654",
      "Cardholder_Name": "Jane Smith",
      "Status": "Active",
      "Available_Amount": 2500.00
    }
]
  

const AccountOverview = () => {
    const totalBalance = accounts.reduce((total, account) => total + account.Balance, 0);
    return (
        <div className='mt-16 border border-blue-200 p-10 rounded border-spacing-1' style={{ boxShadow: '1px 1px 5px lightblue' }}>
            <h1 className='text-3xl font-semibold text-primary '>Summary of Accounts</h1>
            <div className='h-[1px] w-full my-3 border border-dashed bg-primary'></div>
            <div className=''>
                <h2 className='text-xl text-primary mb-3'>Accounts Details</h2>
                <div className="overflow-x-auto rounded border border-primary">
                    <table className="table">
                        <thead className='bg-primary text-lg text-white'>
                            <tr>
                                <th>Account Type</th>
                                <th>Account No</th>
                                <th>Status</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <tr key={index}>
                                <td>{account["Account Type"]}</td>
                                <td>{account["Account No"]}</td>
                                <td>{account["Status"]}</td>
                                <td>{account["Balance"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='border border-primary'>
                    <h1 className='p-2 text-lg text-right'>Total Balance: <span className='font-bold'>{totalBalance}</span></h1>
                </div>
            </div>
            <div className='h-[1px] w-full mt-6 mb-10 border border-dashed bg-primary'></div>
            <div className=''>
                <h2 className='text-xl text-primary mb-3'>Cards Details</h2>
                <div className="overflow-x-auto rounded border border-primary">
                    <table className="table">
                        <thead className='bg-primary text-lg text-white'>
                            <tr>
                                <th>Card Type</th>
                                <th>Card Number</th>
                                <th>Cardholder Name</th>
                                <th>Status</th>
                                <th>Available Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards?.map((card, index) => (
                                <tr key={index}>
                                <td>{card["Card_Type"]}</td>
                                <td>{card["Card_Number"]}</td>
                                <td>{card["Cardholder_Name"]}</td>
                                <td>{card["Status"]}</td>
                                <td>{card["Available_Amount"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AccountOverview;