import React from 'react';
import { Link } from 'react-router-dom';

const CardBeneficiaryList = () => {
    return (
        <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-primary'>
            <div className='p-4'>
                <h1 className='text-3xl font-bold text-primary'>Credit Card Bill Payment Beneficiary List</h1>
                <div className='bg-slate-100 p-2 rounded-lg'>
                    <p><Link className='text-primary '>Click Here</Link> To Add Beneficiary Credit Card </p>

                </div>
                <div className='bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid'>
                    <p className='text-lg font-bold text-primary'>MTB Cards</p>
                    <p className='text-center mt-4'>Total number of Beneficiary : 2</p>
                    <div className=''>
                        <div className="overflow-x-auto ">
                            <table className="table table-zebra border border-primary">
                                {/* head */}
                                <thead className='bg-primary text-white font-bold'>
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
                <p className='text-lg font-bold text-primary'>Other Bank Card</p>

                </div>
            </div>
        </div>        
    );
};

export default CardBeneficiaryList;