import React from 'react';
import { Link } from 'react-router-dom';

const MobilTopUpHistory = () => {
    return (
        <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-green-200'>
        <div className='p-4'>
            <h1 className='text-3xl font-bold text-green-600'>Mobile Top-up History</h1>
            <div className='bg-slate-100 p-2 rounded-lg'>
                    <p className='text-lg font-bold text-red-500'> No Transaction Found</p>

                </div>
            <div className=' flex gap-16 bg-slate-100 p-2 rounded-lg ps-6 mt-6'>
                 <div className='flex gap-6 '> <p>From</p> <input className='rounded-lg px-2' type="date" /></div>
                 <div className='flex gap-6 '> <p>To</p> <input className='rounded-lg px-2' type="date" /></div>
                 <button className='btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white '>View</button>
                </div>
            <div className='bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid'>
               
                <div className=''>
                    <div className="overflow-x-auto ">
                        <table className="table table-zebra border border-green-500">
                            {/* head */}
                            <thead className='bg-green-600 text-white font-bold'>
                                <tr>
                                    <th>Time</th>
                                    <th>From</th>
                                    <th>Beneficiary</th>
                                    <th>Chanel</th>
                                    <th>Amount </th>
                                    <th>Transaction Id</th>
                                </tr>
                            </thead>
                            <tbody >
                                {/* row 1 */}
                                <tr>
                                    <td>12-Feb-2023<br />07:30 pm</td>
                                    <td>646469464966751 <br />(app) </td>
                                    <td>01745562568 <br />Grameen <br />prepaid</td>
                                    <td>App</td>
                                    <td>140</td>
                                    <td>MTB464766464646464566</td>
                                  
                                    
                                </tr>
                                <tr>
                                    <td>12-Feb-2023<br />07:30 pm</td>
                                    <td>646469464966751 <br />(app) </td>
                                    <td>01745562568 <br />Grameen <br />prepaid</td>
                                    <td>App</td>
                                    <td>140</td>
                                    <td>MTB464766464646464566</td>
                                  
                                    
                                </tr>
                                <tr>
                                    <td>12-Feb-2023<br />07:30 pm</td>
                                    <td>646469464966751 <br />(app) </td>
                                    <td>01745562568 <br />Grameen <br />prepaid</td>
                                    <td>App</td>
                                    <td>140</td>
                                    <td>MTB464766464646464566</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MobilTopUpHistory;