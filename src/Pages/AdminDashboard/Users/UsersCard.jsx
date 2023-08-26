import React from 'react';
import { FiUser, FiUserCheck, FiUserPlus } from "react-icons/fi";
import { GrUserNew } from "react-icons/gr";


const UsersCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-16 px-4 md:px-8'>
            <div className="item border border-gray-300 mx-auto p-8 rounded">
                <div className="card">
                    <h3 className="title text-gray-400">Session</h3>
                    <div className='flex justify-between gap-3 rounded'>
                        <h4 className='text-green-500 py-1'><span className='text-2xl text-gray-700'>21,459</span>  ( + 29%)</h4>
                        <div className="icon py-2 px-2">
                            <FiUser className='text-blue-400 text-lg'></FiUser>
                        </div>
                    </div>
                    <p className='sub-title text-gray-400'>Total Users</p>
                </div>

            </div>
            <div className="item border border-gray-300 mx-auto p-8 rounded ">
                <div className="card">
                    <h3 className="title text-gray-400">Paid Users</h3>
                    <div className='flex justify-between gap-3 rounded'>
                        <h4 className='text-green-500 py-1'><span className='text-2xl text-gray-700'>21,459</span>  ( + 29%)</h4>
                        <div className="icon py-2 px-2">
                            <FiUserPlus className='text-red-400 text-lg'></FiUserPlus>
                        </div>
                    </div>
                    <p className='sub-title text-gray-400'>Total Users</p>
                </div>

            </div>
            <div className="item border border-gray-300 mx-auto p-8 rounded">
                <div className="card">
                    <h3 className="title text-gray-400">Active Users</h3>
                    <div className='flex justify-between gap-3 rounded'>
                        <h4 className='text-green-500 py-1'><span className='text-2xl text-gray-700'>21,459</span>  ( + 29%)</h4>
                        <div className="icon py-2 px-2">
                            <FiUserCheck className='text-green-400 text-lg'></FiUserCheck>
                        </div>
                    </div>
                    <p className='sub-title text-gray-400'>Total Users</p>
                </div>

            </div>
            <div className="item border border-gray-300 mx-auto p-8 rounded">
                <div className="card">
                    <h3 className="title text-gray-400">Session</h3>
                    <div className='flex justify-between gap-3 rounded'>
                        <h4 className='text-green-500 py-1'><span className='text-2xl text-gray-700'>21,459</span>  ( + 29%)</h4>
                        <div className="icon  py-2 px-2">
                            <GrUserNew className='text-red-300 text-lg'></GrUserNew>
                        </div>
                    </div>
                    <p className='sub-title text-gray-400'>Total Users</p>
                </div>

            </div>
        </div>
    );
};

export default UsersCard;