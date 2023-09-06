import React from 'react';

const PasswordChange = () => {
    return (
        <div className='mt-16 border bg-white border-blue-200 px-10 py-5 rounded border-spacing-1' style={{ boxShadow: '1px 1px 5px lightblue' }}>
            <h1 className='text-3xl font-semibold text-primary '>Change Password</h1>
            <div className='bg-gray-200 my-5 p-10 rounded'>
                <div className='grid grid-cols-2 mb-3'>
                    <div className=' '>
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Old Password</span>
                            </label>
                            <input type="password" placeholder="" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text font-bold text-lg">New Password</span>
                            </label>
                            <input type="password" placeholder="" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Re-type Password</span>
                            </label>
                            <input type="password" placeholder="" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className='h-[1px] w-full border border-dashed bg-primary'></div>
                <input type="submit" className="cursor-pointer my-btn text-white text-lg mt-6 input input-bordered w-full max-w-xs" />
            </div>
        </div>
    );
};

export default PasswordChange;