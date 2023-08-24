import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
const LeftSide = () => {
    return (
        <div className='hidden md:flex flex-col items-center justify-between h-full'>
           <div>
           <button className='flex items-center gap-1 font-semibold'><KeyboardBackspaceIcon/> Back To Profile</button>
           <h2 className='text-2xl font-semibold my-4'>Open Your Saving <br /> Account</h2>
           <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio aperiam illum similique recusandae velit ut cupiditate aspernatur quae eligendi!</p>
           <Link className="text-blue-600 underline " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, illum.</Link>
           </div>
           <img src="https://i.ibb.co/JmyBQJB/360-F-244483606-h-Rcppy-IRwao-WVGx-QRN6-MMep-Tu3-Ym-SSUz-removebg-preview.png" alt="" />
           <div className='bg-stone-300 p-4 rounded-lg'>
            <h4 className='font-semibold text-primary'>Policy Questions?</h4>
            <p className='my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nulla unde corporis dignissimos, quibusdam eos suscipit. Et unde dolorum autem.</p>
            <button className='font-semibold'>Contact Us <EastIcon/> </button>
           </div>
        </div>
    );
};

export default LeftSide;