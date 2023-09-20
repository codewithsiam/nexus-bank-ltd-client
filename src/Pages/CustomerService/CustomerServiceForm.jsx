import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { baseUrl } from '../../config/server';

const CustomerServiceForm = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()


    const notify = () => toast.success('Submitted');

    const onSubmit = async (data) => {
        // console.log(data)
        try {
            const res = await axios.post(`${baseUrl}/support-customers`, data)
            if (res.data.insertedId) {
                notify
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-5 px-3 md:px-20'>
                <div className='md:flex items-center gap-5'>
                    <div className='w-full mt-5'>
                        <label className='block text-sm font-bold'>Customer Name</label>
                        <input {...register("customerName", { required: true })}
                            type="text" placeholder='Customer Name' className="w-full outline-none p-2 rounded border border-[#CED4DA]" />
                    </div>
                    <div className='w-full mt-5'>
                        <label className='block text-sm font-bold'>Mobile Number (Registered with Nexus)</label>
                        <input {...register("mobileNo", { required: true })} type="text" placeholder='Mobile Number (Registered with Nexus)' className="w-full outline-none p-2 rounded border border-[#CED4DA]" />
                    </div>
                </div>

                <div className='md:flex items-center gap-5'>
                    <div className='w-full mt-5'>
                        <label className='block text-sm font-bold'>E-mail Address (Registered with Nexus)</label>
                        <input {...register("emailAddress", { required: true })} type="text" placeholder='E-mail Address (Registered with Nexus)' className="w-full outline-none p-2 rounded border border-[#CED4DA]" />
                    </div>
                    <div className='w-full mt-5'>
                        <label className='block text-sm font-bold'>Service Type</label>
                        <select className='p-2 w-full outline-none border border-[#CED4DA]' {...register("accountType")}>
                            <option value="current account">Current account</option>
                            <option value="saving account">Saving account</option>
                            <option value="deposit account">Deposit account</option>
                            <option value="student account">Student account</option>
                            <option value="apply for credit card">Apply for credit card</option>
                        </select>
                    </div>
                </div>

                <label className='block text-sm  font-bold mt-5'>Request/Complaint Details</label>

                <textarea {...register("details")} className='outline-none w-full p-2 rounded border border-[#CED4DA]' name="details" id="details" cols="30" rows="5"></textarea>

                <button onClick={notify} className='bg-[#CEEAF3] p-3 rounded mt-4'>Submit</button>
            </form>
            <Toaster />
        </div>
    );
};

export default CustomerServiceForm;