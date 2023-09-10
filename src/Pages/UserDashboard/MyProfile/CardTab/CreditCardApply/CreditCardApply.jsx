import { useScroll } from 'framer-motion';
import React, { useState } from 'react';

const CreditCardApply = () => {
    const [userData,setUserData] = useState({});

    const handleUserDataChange = (e)=>{
        const newUserData = {...userData};
        newUserData[e.target.name] = e.target.value;
        setUserData(newUserData)
    }
    console.log(userData)
    return (
        <div className='mt-24'>
           <div className='p-12 shadow-md max-w-2xl mx-auto'>
           <h2 className='text-2xl font-semibold'>Apply For Your Credit Card</h2>
           <form className='mt-6'>
           <div>
           <label className='text-xl font-semibold' htmlFor="">Title</label>
            <br />
            <input onChange={handleUserDataChange}  className='border w-full py-3 pl-4 mt-2 text-xl' type="text" name="title" id="" placeholder='Write your name title here' />
           </div>
           <div className='mt-4'>
           <label className='text-xl font-semibold' htmlFor="">First Name</label>
            <br />
            <input onChange={handleUserDataChange} className='border w-full py-3 pl-4 mt-2 text-xl' type="text" name="firstName" id="" placeholder='First Name'/>
           </div>
           <div className='mt-4'>
           <label className='text-xl font-semibold' htmlFor="">Last Name</label>
            <br />
            <input onChange={handleUserDataChange} className='border w-full py-3 pl-4 mt-2 text-xl' type="text" name="lastName" id="" placeholder='Last Name' />
           </div>
           <div className='mt-4'>
           <label className='text-xl font-semibold' htmlFor="">Account Number</label>
            <br />
            <input onChange={handleUserDataChange} className='border w-full py-3 pl-4 mt-2 text-xl' type="text" name="accountNumber" id="" placeholder='Account Number' />
           </div>
           <div className='flex justify-end mt-6'>
           <button type='submit' className='my-btn px-12 py-3 rounded text-white font-semibold'>Apply</button>
           </div>
           </form>
           </div>
        </div>
    );
};

export default CreditCardApply;