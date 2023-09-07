import React from 'react';
import Swal from 'sweetalert2';

const FundTransfer = () => {
    const handelCancel=()=>{
        Swal.fire(
          
            'Your Transaction Cancel !',
            
          )
    }
    const handelTransfer=()=>{
        Swal.fire(
            'Good job!',
            'Your Transaction success'
           
          )
    }

    return (
        <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-green-200'>
            <div className='p-4'>
                <h1 className='text-3xl font-bold text-green-600'> Fund Transfer</h1>
                <div className='bg-slate-100 p-2 divide-y-2 divide-solid'>
                    <h3 className='font-bold text-green-600 '>From Account</h3>

                    <div className='md:flex items-center md:gap-10 ms-2 py-6'>
                        <p>Transfer from</p>
                        <input
                            placeholder='543456434634646'
                            className='border p-2 border-black rounded-lg' type="number" name="" id="" />
                        <p>Drawable (BDT)  557.65</p>
                    </div>
                    <div>
                        <h3 className='font-bold text-green-600 '>Beneficiary Details</h3>
                        <div className='flex  md:gap-10 ms-2 py-6'>
                            <p>transfer to</p>
                            <div>
                                <input className='border p-2 border-black rounded-lg' type="number" name="" id="" /> <br />
                                <input className='border p-2 mt-2 border-black rounded-lg' type="number" name="" id="" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='font-bold text-green-600 '> transfer</p>
                        <div className='flex items-center  md:gap-10 ms-2 py-6'>
                            <p>transfer amount</p>
                            <div>
                                <input className='border p-2 mt-2 border-black rounded-lg' type="number" name="" id="" /> BDT
                            </div>
                        </div>
                        <div className='md:flex items-center  md:gap-10 ms-2 py-6'>
                            <p>Reason for transfer</p>
                            <textarea
                            className='border p-2 mt-2 border-black rounded-lg'
                            name="" id="" cols="30" rows="3"></textarea>
                        </div>
                    </div>
                    <div>
                        <button
                        onClick={handelTransfer}
                        className='btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white ms-10 mt-4'>transfer</button>
                        <button 
                        onClick={handelCancel}
                        className='btn bg-gradient-to-b from-red-500 to-red-700 rounded-md text-white ms-10 mt-4'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FundTransfer;