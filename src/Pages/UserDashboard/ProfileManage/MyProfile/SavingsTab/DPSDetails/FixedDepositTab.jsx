import React from 'react';
import { FaUser } from 'react-icons/fa';

const FixedDepositTab = ({myAccountData}) => {
  const myAccounts = myAccountData.filter(account => account.account_type === 'DPS');
  console.log(myAccounts)
  
  return (
    <div className="">
    {
      myAccounts.length > 0 ? (
          myAccounts.map((myAccount, index) => (
              <DPSCard key={index} myAccount={myAccount} />
          ))
      ) : (
          <div className='shadow-md bg-slate-50 p-10 w-full font-bold text-2xl'>
              Please open an account.
          </div>
      )
    }
    </div>
  );
}

const DPSCard=({myAccount})=>{
  const { account_number, balance, account_type } = myAccount;
  return(
    <div className='shadow-md bg-slate-50 p-10 w-full'>
      <div className='flex justify-center'>
        <h4 className="font-bold text-blue-800 text-lg md:text-2xl flex gap-2 mb-7 items-center">
          <FaUser></FaUser> {account_type} Details</h4>
      </div>
      <div>
          <table className="responsive-table bordered">
          <tbody>
            <tr className="text-md md:text-lg lg:text-xl">
              <td className="font-semibold">Account Number</td>
              <td className="py-1 pl-1 pr-2">:</td>
              <td>{account_number}</td>
            </tr>
            <tr className="text-md md:text-lg lg:text-xl">
              <td className="font-semibold">Total Balance</td>
              <td className="py-1 pl-1 pr-2">:</td>
              <td>{balance.toFixed(2)} tk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FixedDepositTab;