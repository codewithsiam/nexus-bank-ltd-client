import React from 'react';
import Swal from 'sweetalert2';

const AddBeneficiary = () => {
    const handelAdd=()=>{
        Swal.fire(
            'Good job!',
            'Add BeneFiciary !',
            'success'
          )
    }
    return (
        <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-green-200'>
            <div className='p-4'>
                <h1 className='text-3xl font-bold text-green-600'>Add Beneficiary</h1>
                <div className='bg-slate-100 p-2 rounded-lg md:ps-16'>

                    <div className='flex gap-9 '>
                        <p>Nick Name</p>
                        <input className='rounded-lg px-2 py-1 w-full max-w-xs' type="text" />
                    </div>
                    <div className='flex gap-6 my-4'>
                        <p>Mobile Name</p>
                        <input className='rounded-lg px-2 py-1 w-full max-w-xs' type="text" />
                    </div>
                    <div className='flex gap-6 '>
                        <p>Mobile Operator</p>
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            <option disabled selected>Small</option>
                            <option>Small Apple</option>
                            <option>Small Orange</option>
                            <option>Small Tomato</option>
                        </select>
                    </div>
                    <div className='flex gap-14 my-4'>
                        <p>Mobile type</p>
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            <option disabled selected>Small</option>
                            <option>Small Apple</option>
                            <option>Small Orange</option>
                            <option>Small Tomato</option>
                        </select>
                    </div>
                    <button
                    onClick={handelAdd}
                    className='btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white md:ms-36 mt-4 px-10'>Add</button>
                </div>


            </div>
        </div>
    );
};

export default AddBeneficiary;