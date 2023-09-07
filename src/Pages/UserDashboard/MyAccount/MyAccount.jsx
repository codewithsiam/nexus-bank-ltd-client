import React from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
    return (
        <div>
            <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-primary'>
                <div className='p-4'>
                    <h1 className='text-3xl font-bold text-primary'>My Account</h1>
                    <div className='bg-slate-100 p-2 rounded-lg'>
                        <p><Link className='text-primary '>Click Here</Link> to Add 'MY Account' </p>

                    </div>
                    <div className='bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid'>

                        <div className=''>
                            <div className="overflow-x-auto ">
                                <table className="table table-zebra border border-primary">
                                    {/* head */}
                                    <thead className='bg-primary text-white font-bold'>
                                        <tr>
                                            <th>Account</th>
                                            <th>Product</th>
                                            <th>Status</th>
                                            <th>Currency</th>
                                            <th>Balance </th>

                                        </tr>
                                    </thead>
                                    <tbody >
                                        {/* row 1 */}
                                        <tr>

                                            <td>6546434646546<br />Ruksana akter</td>
                                            <td >E-SERVER</td>
                                            <td>Operative</td>
                                            <td>BDT</td>
                                            <td>4,634</td>

                                        </tr>
                                        {/* row 2 */}
                                        <tr>

                                            <td>65464635464<br />Abdul Al Siam</td>
                                            <td >MTB Millionaire Plan</td>
                                            <td>Operative</td>
                                            <td>BDT</td>
                                            <td>65,546</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;