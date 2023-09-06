import React from 'react';
import { Link } from 'react-router-dom';

const Beneficiary = () => {
    return (
        <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-green-200'>
            <div className='p-4'>
                <h1 className='text-3xl font-bold text-green-600'>Credit Card Bill Payment Beneficiary List</h1>
                <div className='bg-slate-100 p-2 rounded-lg'>
                    <p><Link className='text-green-600 '>Click Here</Link> To Add Beneficiary Credit Card </p>

                </div>
                <div className='bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid'>
                    <p className='text-lg font-bold text-green-600'>MTB Cards</p>
                    <p className='text-center mt-4'>Total number of Beneficiary : 2</p>
                    <div className=''>
                        <div className="overflow-x-auto ">
                            <table className="table table-zebra border border-green-500">
                                {/* head */}
                                <thead className='bg-green-600 text-white font-bold'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {/* row 1 */}
                                    <tr>
                                        <td >rupa</td>
                                        <td>456664676xxxxx554 <br /> Rukshana Akter</td>
                                        <td>014742555447 <br />rupu@gmail.com</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Prince</td>
                                        <td>456664676xxxxx554 <br />Rukshana Akter</td>
                                        <td>014742555447 <br />rupu@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-100 p-2 rounded-lg mt-4'>
                <p className='text-lg font-bold text-green-600'>Other Bank Card</p>

                </div>
            </div>
        </div>
    );
};

export default Beneficiary;