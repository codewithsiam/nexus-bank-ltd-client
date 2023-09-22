import React from 'react';
import { useState } from 'react';
import { baseUrl } from '../../../config/server';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

const AddCardBeneficiary = () => {
    const {user}=useContext(AuthContext)
    // console.log(user)
    const [error,setError] = useState(null)
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const account=form.account.value;
        const email=form.email.value;
        const phone=form.phone.value;
        
        const data={name,account,email,phone,id:uuidv4()}
        fetch(`${baseUrl}/addcardbeneficiary?userName=${user?.username}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(data=>{
            if (data.modifiedCount) {
                Swal.fire('Added Card Beneficiary Success');
              }
              else{
                  setError(data.error)
              }
        })
        
        
    }
    return (
        <div className="mt-20 border  rounded-lg bg-white border-gray-400 shadow-md shadow-primary">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-primary">Add Card Beneficiary</h1>
          <form
            onSubmit={handleOnSubmit}
            className="bg-slate-100 p-2 rounded-lg md:ps-20"
          >
            <div className=" lg:flex gap-4">
            <div>
            <label className='font-semibold'>Name</label> <br />
              <input
                name="name"
                className="rounded-lg px-2 py-1 w-full md:w-80"
                type="text"
             
              />
            </div>
            <div>
            <label className='font-semibold'>Account no</label> <br />
              <input
                name="account"
                className="rounded-lg px-2 py-1 w-full md:w-80 "
                type="text"
                
              />
            </div>
            </div>
            <div className=" lg:flex gap-4">
            <div>
            <label className='font-semibold'>Email</label> <br />
              <input
                name="email"
                className="rounded-lg px-2 py-1 w-full md:w-80 "
                type="email"
              
              />
            </div>
            <div>
            <label className='font-semibold'>Phone</label> <br />
              <input
                name="phone"
                className="rounded-lg px-2 py-1 w-full md:w-80"
                type="number"
              
              />
            </div>
            </div>
            
          {error && <p className="text-red-500">{error}</p>}
           <div className='w-full '> 
            <button
              type="submit"
              className="py-2 w-full lg:w-[656px] md:w-[320px] text-center bg-primary hover:bg-sky-600 rounded-md text-white  mt-4"
            >
              Add
            </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddCardBeneficiary;