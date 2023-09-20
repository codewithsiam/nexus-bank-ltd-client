import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddACareer = () => {

    const { handleSubmit, control } = useForm();

    const [formData, setFormData] = useState({
        title: '',
        vacancy: '',
        salary: '',
        experience: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        fetch('http://localhost:5000/addAJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((responseData) => {
                // console.log('Response from MongoDB:', responseData);
                setSubmitted(true);
            })
            .catch((error) => {
                console.error('Error sending data to MongoDB:', error);
            });
    };

    return (
        <div className="w-full mx-auto p-4 my-20 border border-gray-300 py-20">
            <div className='flex justify-between'>
                <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Add A Career</h2>
                </div>
                <div>
                    <Link to={'/admin/manage-careers'} className='bg-primary text-white py-4 px-2 rounded font-semibold'>Manage All Careers</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-gray-300 p-8'>
                <div className="mb-4 lg:flex">
                    <div className="w-full lg:w-1/2 pr-0 lg:pr-2 mb-2 lg:mb-0">
                        <label className="block mb-1">Title</label>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    {...field}
                                    className="w-full rounded border border-gray-300 p-2"
                                />
                            )}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-2">
                        <label className="block mb-1">Vacancy</label>
                        <Controller
                            name="vacancy"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="number"
                                    {...field}
                                    className="w-full rounded border border-gray-300 p-2"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mb-4 lg:flex">
                    <div className="w-full lg:w-1/2 pr-0 lg:pr-2 mb-2 lg:mb-0">
                        <label className="block mb-1">Salary </label>
                        <Controller
                            name="salary"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="number"
                                    {...field}
                                    className="w-full rounded border border-gray-300 p-2"
                                />
                            )}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-2">
                        <label className="block mb-1">Experience</label>
                        <Controller
                            name="experience"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="experience"
                                    {...field}
                                    className="w-full rounded border border-gray-300 p-2"
                                />
                            )}
                        />
                    </div>
                </div>

                <button type="submit" className="bg-gradient-to-r from-[#004F70] to-[#007C9C] text-white rounded px-4 py-2 hover:bg-blue-600 w-full">Submit</button>
            </form>
            {submitted && (
                <div className="mt-4 text-green-600">
                    Form submitted successfully!
                </div>
            )}
        </div>
    );
};

export default AddACareer;