import React from 'react';
import { FaPlus } from 'react-icons/fa';

const ProfilePhoto = () => {
    return (
        <div className='w-full'>
        <p className='font-semibold'>Your Photo*</p>
            <label htmlFor="your-photo" className='flex gap-2 items-center py-1 ps-2 pr-4 bg-slate-200 rounded-full my-3 cursor-pointer'>
                <FaPlus className='text-blue-500'></FaPlus>
                Upload Your Photo
            </label>
            <input type="file" id='your-photo' className='hidden' />
        </div>
    );
};

export default ProfilePhoto;