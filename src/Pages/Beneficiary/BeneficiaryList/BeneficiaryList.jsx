import React from 'react';
import { Link } from 'react-router-dom';

const BeneficiaryList = () => {
    const handelEdit=()=>{
        alert('Are You Ready For Edit')
    }
    return (
      
             <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-green-200'>
            <div className='p-4'>
                <h1 className='text-3xl font-bold text-green-600'>Beneficiary List</h1>
                <div className='bg-slate-100 p-2 rounded-lg'>
                    <p><Link className='text-green-600 '>Click Here</Link> To Add Beneficiary Credit Card </p>

                </div>
                <div className='bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid'>
                   
                    <p className='text-center mt-4'>Total number of Beneficiary : 5</p>
                    <div className=''>
                        <div className="overflow-x-auto ">
                            <table className="table table-zebra border border-green-500">
                                {/* head */}
                                <thead className='bg-green-600 text-white font-bold'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Mobile Operator</th>
                                        <th>Mobile Type</th>
                                        <th>Mobile No</th>
                                        <th>Status </th>
                                        <th>Transfer</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {/* row 1 */}
                                    <tr>
                                        <td >rupa</td>
                                        <td>Grameen<br />Phone(017)</td>
                                        <td>Prepaid</td>
                                        <td>01745562568</td>
                                        <td>active</td>
                                        <td> <button
                                        onClick={()=>{handelEdit()}}
                                        className='btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white ms-10 mt-4'>Edit</button></td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td >Prince</td>
                                        <td>Grameen<br />Phone(017)</td>
                                        <td>Prepaid</td>
                                        <td>01745562568</td>
                                        <td>active</td>
                                        <td> <button className='btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white ms-10 mt-4'>Edit</button></td>
                                    </tr>
                                    {/* row 3*/}
                                    <tr>
                                        <td >Prince</td>
                                        <td>Grameen<br />Phone(017)</td>
                                        <td>Prepaid</td>
                                        <td>01745562568</td>
                                        <td>active</td>
                                        <td> <button className='btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white ms-10 mt-4'>Edit</button></td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <td >Prince</td>
                                        <td>Grameen<br />Phone(017)</td>
                                        <td>Prepaid</td>
                                        <td>01745562568</td>
                                        <td>active</td>
                                        <td> <button className='btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white ms-10 mt-4'>Edit</button></td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr>
                                        <td >Prince</td>
                                        <td>Grameen<br />Phone(017)</td>
                                        <td>Prepaid</td>
                                        <td>01745562568</td>
                                        <td>active</td>
                                        <td> <button className='btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white ms-10 mt-4'>Edit</button></td>
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

export default BeneficiaryList;