import React from 'react';
import { useEffect } from 'react';
import { baseUrl } from '../../../config/server';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import moment from 'moment/moment';

const RecentTransactions = () => {
    const { user } = useContext(AuthContext)
    const [type, setType] = useState('cash-in')
    const [transactionData,setTransactionData]=useState([])
   


    useEffect(() => {

        fetch(`${baseUrl}/${type}?username=${user?.username}`)
        .then(res => res.json()).then(data => setTransactionData(data))
    },[type])

const handleFilter=(e)=>{
   setType(e.target.value)
}
    return (
        <div className="block w-full overflow-x-auto bg-white mt-11 rounded-2xl p-7">
            <select onChange={handleFilter}  className="select select-bordered w-full max-w-xs">
                <option disabled selected>Sort by transaction type</option>
                <option value='cash-in'>cash In</option>
                <option value='transfer-history'>Transfer</option>
            </select>
            <h1 className="text-xl">Recent transaction</h1>


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
                            Account
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
                        transactionData?.map(transaction => {
                            return <tr>
                                <th className="border-t-0 border-b-1 align-middle border-l-0 border-r-0 text-base whitespace-nowrap py-5 text-left text-[#6F7A83]">
                                {transaction?.transactionId?transaction.transactionId:transaction?._id}
                                </th>
                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap py-5 ">
                                {moment(transaction?.date?transaction.date:transaction?.time).format("MMM Do YY")}
                                </td>
                                <td className="border-t-0 align-center border-l-0 border-r-0 text-base whitespace-nowrap py-5">
                                    {transaction?.accountNumber?transaction.accountNumber:transaction?.receiverAccountNumber}
                                </td>
                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap py-5">
                                {transaction?.transferAmount?transaction.transferAmount:transaction?.amount} 
                                </td>
                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-5">
                                    <p className="bg-[#E8F5E9] py-2 px-2 w-2/4 text-center text-[#337D70] font-bold rounded-lg cursor-pointer">   {transaction?.transactionType}</p>
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