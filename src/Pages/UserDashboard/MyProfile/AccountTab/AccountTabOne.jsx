import React from 'react';
import { FaUser } from 'react-icons/fa';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const AccountTabOne = ({user, amount, handleAmountChange, transactionType, handleChange}) => {
  const {accountType, accountNumber, balance}=user

  return (
    <div className='shadow-xl bg-slate-50 p-10'>
      <div className='flex justify-center'>
      <h4 className="font-bold text-violet-600 text-2xl flex gap-2 mb-7 items-center"><FaUser></FaUser> {accountType} Account Details</h4>
      </div>
      <div className='grid md:grid-cols-2 gap-10 md:gap-32'>
        <div>
          <table className="responsive-table bordered">
            <tbody>
              <tr className="text-xl">
                  <td className="font-semibold">Account Number</td>
                  <td className="py-1 pl-1 pr-2">:</td>
                  <td>{accountNumber}</td>
              </tr>
              <tr className="text-xl">
                  <td className="font-semibold">Total Balance</td>
                  <td className="py-1 pl-1 pr-2">:</td>
                  <td>{balance.toFixed(2)} tk</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-xl">
          <h1 className='text-xl font-bold mb-5'>Money Transaction</h1>
          <label htmlFor="amount" className="block font-semibold mb-1">Amount:</label>
          <input type="number" id="amount" value={amount} onChange={handleAmountChange}
            className="block w-full p-2 border border[#ccc] rounded mb-2"/>
          <label htmlFor="transactionType" className="block font-semibold mb-1">Transaction Type:</label>
          <Select
            className='w-full'
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={transactionType}
            // label="transaction"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Deposit</MenuItem>
            <MenuItem value={20}>Withdraw</MenuItem>
          </Select>
          <div className='flex justify-center'>
          <button
            style={{ transition: "background-color 0.3s" }}
            className="block mt-3 cursor-pointer nav-btn text-white px-4 py-2 rounded hover:bg-blue-600"
            // onClick={handleTransaction}
          > 
          Submit
            {/* {transactionType === 'deposit' ? 'Deposit' : 'Withdraw'} */}
          </button>
          </div>
          {/* {error && <p className="text-red-500 mt-2">{error}</p>} */}
          {/* {transactionSuccess && <p className="text-green-500 mt-2">Transaction successful!</p>} */}
        </div>
      </div>
    </div>
    );
};

export default AccountTabOne;