import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const transferInfo=[
    {
        transferFrom:"555362801479",
        transferTo: "565556640713",
        balance: 3580
    },
    {
        transferFrom:"565556640713",
        transferTo: "143680631566",
        balance: 555
    },
    {
        transferFrom:"566461071357",
        transferTo: "611436806315",
        balance: 1480
    }
]
const FundTransfer = () => {
    const [selectedAccount, setSelectedAccount] = useState("");
    const [balance, setBalance] = useState("");

    const handleAccountChange = (event) => {
      const selectedAccount = event.target.value;
      setSelectedAccount(selectedAccount); 
      console.log(selectedAccount)
      const selectedBalance = transferInfo.find((info) => info.transferFrom === selectedAccount)?.balance;
      setBalance(selectedBalance || "");
    };

    const handelCancel=()=>{
        Swal.fire('Your Transaction is Cancel !')
    }
    const handelTransfer=()=>{
        Swal.fire(
            'Good job!',
            'Your Transaction is successful'
        )
    }

    return (
        <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-blue-200'>
            <div className='p-4'>
                <h1 className='text-3xl font-bold text-primary mb-5'> Fund Transfer</h1>
                <div className='md:flex bg-slate-100 p-2'>
                <div className='  w-2/3'>
                    <div className='mb-5'>
                        <h3 className='font-bold text-lg text-primary'>From Account</h3>
                        <div className='md:flex items-center md:gap-10 ms-2 py-6'>
                            <p className='md:w-1/4'>Transfer from</p>
                            <select
                            value={selectedAccount}
                            onChange={handleAccountChange}
                            className="select select-bordered md:w-2/4">
                                {/* <option value="">Select an account</option> */}
                            {
                                transferInfo?.map((info, index) => (
                                    <option key={index} value={info.transferFrom}>
                                    {info.transferFrom}
                                    </option>
                                )) 
                                }
                            </select>
                            {balance && <p className='md:w-1/4'>Drawable (BDT): {balance}</p>}
                        </div>
                        <div className='border border-dashed border-blue-200 mb-5'></div>
                    </div>
                    <div className='mb-5'>
                        <h3 className='font-bold text-lg text-primary'>Beneficiary Details</h3>
                        <div className='md:flex items-center md:gap-10 ms-2 py-6'>
                            <p className='md:w-1/4'>Transfer to</p>
                            <select className="select select-bordered md:w-3/4">
                                {/* <option value="">Select an account</option> */}
                                {
                                    transferInfo?.map((info, index) => (
                                        <option key={index} value={info.transferTo}>
                                            {info.transferTo}
                                        </option>
                                    )) 
                                }
                            </select>
                        </div>
                        <div className='border border-dashed border-blue-200 mb-5'></div>
                    </div>
                    <div className='mb-5'>
                        <p className='font-bold text-lg text-primary'> Transfer</p>
                        <div className='md:flex items-center md:gap-10 ms-2 py-6'>
                            <p className='md:w-1/4'>Transfer amount</p>
                            <div className='md:w-3/4'>
                                <input className='required border p-2 mt-2 border-black rounded-lg md:w-3/4' type="number" name="" id="" required/> BDT
                            </div>
                        </div>
                        <div className='md:flex items-center md:gap-10 ms-2 py-6'>
                            <p className='md:w-1/4'>Reason for transfer</p>
                            <textarea
                            className='border p-2 mt-2 border-black rounded-lg md:w-3/4'
                            name="" id="" cols="30" rows="3"></textarea>
                        </div>
                    </div>
                    <div>
                        <Link

                        to="/dashboard/fund-transfer-pin-verification"
                        className='btn bg-gradient-to-b from-primary to-blue-700 rounded-md text-white ms-10 mt-4'>transfer</Link>
                        <button 
                        onClick={handelCancel}
                        className='btn bg-gradient-to-b from-red-500 to-red-700 rounded-md text-white ms-10 mt-4'>cancel</button>
                    </div>
                </div>
                <div></div>
                </div>
            </div>
        </div>
    );
};

export default FundTransfer;