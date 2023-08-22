import React from 'react';

const RecentTransactions = () => {
    const recentTransaction = [
        {
            transactionID: '528651571NT',
            date: 'Oct 08, 2019',
            name: 'Shuvo Deb',
            amount: '20,000.29 BDT',
            status: 'Completed'
        },
        {
            transactionID: '421436904YT',
            date: 'Oct 08, 2021',
            name: 'Shuvo Deb',
            amount: '2736.29 BDT',
            status: 'Completed'
        },
    ]

    return (
        <div className="block w-full overflow-x-auto bg-white mt-11 rounded-2xl p-7">
            <h1 className="text-xl">Recent transaction</h1>
            <p className='text-sm font-bold text-[#6F7A83] mb-11'>
                1 Pending, 4 Completed
            </p>

            <table className="table-responsive w-full">
                <thead>
                    <tr>
                        <th className="py-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-t-0 border-r-0 whitespace-nowrap font-semibold text-left text-[#6F7A83]">
                            Transaction ID
                        </th>
                        <th className="py-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-t-0 border-r-0 whitespace-nowrap font-semibold text-left text-[#6F7A83]">
                            Date
                        </th>
                        <th className="py-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-t-0 border-r-0 whitespace-nowrap font-semibold text-left text-[#6F7A83]">
                            Name
                        </th>
                        <th className="py-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-t-0 border-r-0 whitespace-nowrap font-semibold text-left text-[#6F7A83]">
                            Amount
                        </th>
                        <th className="py-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-t-0 border-r-0 whitespace-nowrap font-semibold text-left text-[#6F7A83]">
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        recentTransaction.map(transaction => {
                            return <tr>
                                <th className="border-t-0 border-b-1 align-middle border-l-0 border-r-0 text-base whitespace-nowrap py-5 text-left text-[#6F7A83]">
                                    {transaction.transactionID}
                                </th>
                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap py-5 ">
                                    {transaction.date}
                                </td>
                                <td className="border-t-0 align-center border-l-0 border-r-0 text-base whitespace-nowrap py-5">
                                    {transaction.name}
                                </td>
                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap py-5">
                                    {transaction.amount}
                                </td>
                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-5">
                                    <p className="bg-[#E8F5E9] py-1 w-2/4 text-center text-[#337D70] font-bold rounded-lg cursor-pointer"> {transaction.status}</p>
                                </td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    );
};

export default RecentTransactions;