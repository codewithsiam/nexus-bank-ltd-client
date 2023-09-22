import { useScroll } from 'framer-motion';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { baseUrl } from '../../../config/server';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserData } from '../../../HandleState/actions/authActions';

const CreditCardApply = () => {
    const [userData,setUserData] = useState({});
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
    const user = useSelector(state => state.auth.user);
    const isAdmin = useSelector(state => state.auth.isAdmin);

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        dispatch(fetchUserData(storedToken));
    }, [dispatch]);

    const handleUserDataChange = (e)=>{
        const newUserData = {...userData};
        newUserData[e.target.name] = e.target.value;
        setUserData(newUserData)
    }
    const handleCreditCardApply = (e)=>{
        e.preventDefault();
        const form = e.target;
        fetch(`${baseUrl}/apply-credit-card`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:user?.username,
                title:userData.title,
                firstName:userData.firstName,
                lastName:userData.lastName,
                nidCardNumber:userData.nidCardNumber,
                accountNumber:userData.accountNumber
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: "top-middle",
                    icon: "success",
                    title: "Apply Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  form.reset();
                  
            }
            setError(data.message);
        })
    }
    return (
        <div className='mt-24'>
           <div className='p-12 shadow-md max-w-2xl mx-auto'>
           <h2 className='text-2xl font-semibold'>Apply For Your Credit Card</h2>
           <form onSubmit={handleCreditCardApply} className='mt-6'>
           <div>
           <label className='text-xl font-semibold' htmlFor="">Title</label>
            <br />
            <input onChange={handleUserDataChange}  className='border w-full py-3 pl-4 mt-2 text-xl' type="text" name="title" id="" placeholder='Write your name title here'  />
           </div>
           <div className='mt-4'>
           <label className='text-xl font-semibold' htmlFor="">First Name</label>
            <br />
            <input onChange={handleUserDataChange} className='border w-full py-3 pl-4 mt-2 text-xl' required type="text" name="firstName" id="" placeholder='First Name'/>
           </div>
           <div className='mt-4'>
           <label className='text-xl font-semibold' htmlFor="">Last Name</label>
            <br />
            <input onChange={handleUserDataChange} className='border w-full py-3 pl-4 mt-2 text-xl' type="text" required name="lastName" id="" placeholder='Last Name' />
           </div>
           <div className='mt-4'>
           <label className='text-xl font-semibold' htmlFor="">Nid Card Number</label>
            <br />
            <input onChange={handleUserDataChange} className='border w-full py-3 pl-4 mt-2 text-xl' type="text" required name="nidCardNumber" id="" placeholder='Last Name' />
           </div>
           <div className='mt-4'>
           <label className='text-xl font-semibold' htmlFor="">Account Number</label>
            <br />
            <input onChange={handleUserDataChange} className='border w-full py-3 pl-4 mt-2 text-xl' type="text" required name="accountNumber" id="" placeholder='Account Number' />
           </div>
           {error && <p className='text-lg font-semibold mt-3 text-red-600'>{error}</p>}
           <div className='flex justify-end mt-6'>
           <button type='submit' className='my-btn px-12 py-3 rounded text-white font-semibold'>Apply</button>
           </div>
           </form>
           </div>
        </div>
    );
};

export default CreditCardApply;