import React from 'react';

const UserProfile = () => {
    return (
        <div>
            <div  className='h-64 bg-gradient-to-r from-sky-500 to-indigo-500  '></div>
            <div className=" mt-0 pt-0 hero min-h-screen bg-base-200  border border-red-500 shadow-2xl " >

                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 '>
                        <div>
                            <img src="https://i.ibb.co/P1qpDmW/woman-3.jpg" className="w-96 h-96 rounded-full -mt-52 lg:-mt-[500px]  shadow-2xl shadow-blue-700 " />
                            <div className='w-full  font-bold text-slate-700 '>
                                <p className='mt-3 text-3xl text-center'>Name: michael johnson</p></div>
                            <div className='bg-white rounded-lg mt-4 border border-slate-400 p-4'>
                                <p className='text-slate-500'>users Details</p>
                                <p>Email: michael.johnson@example.com</p>
                                <p>Date Of Birth: 01/05/1989 </p>
                                <p>Phone Number: 01742542455 </p>
                                <p>NID No: 21542454465446354 </p>
                            </div>

                        </div>

                    </div>
                    <div className='bg-white border p-6 border-slate-400 rounded-lg'>
                        <h1 className='text-slate-500'> Account Details</h1>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
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

export default UserProfile;