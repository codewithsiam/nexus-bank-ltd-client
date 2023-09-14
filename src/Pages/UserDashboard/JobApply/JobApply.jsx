import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { baseUrl } from '../../../config/server';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { handleSubmit, control } = useForm();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        position: '',
        dateOfBirth: '',
        workingexperiences: '',
        resumeurl: '',
        termsAndConditions: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log(data)
        fetch(`${baseUrl}/appliedJobs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged == true) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Application successfully!!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };

    return (
        <div className="max-w-lg mx-auto p-4 my-20">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Submit Your Application</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Personal Information */}
                <div className="mb-4">
                    <label className="block mb-1">Full Name</label>
                    <Controller
                        name="fullName"
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

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <Controller
                        name="email"
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

                {/* Position */}
                <div className="mb-4">
                    <label className="block mb-1">Position</label>
                    <Controller
                        name="position"
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

                {/* Date of Birth */}
                <div className="mb-4">
                    <label className="block mb-1">Date of Birth</label>
                    <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) => (
                            <input
                                type="date"
                                {...field}
                                className="w-full rounded border border-gray-300 p-2"
                            />
                        )}
                    />
                </div>

                {/* Working Experiences */}
                <div className="mb-4">
                    <label className="block mb-1">Working Experiences</label>
                    <Controller
                        name="workingexperiences"
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

                {/* Resume */}
                <div className="mb-4">
                    <label className="block mb-1">Resume URL</label>
                    <Controller
                        name="resumeurl"
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

                {/* Terms and Conditions */}
                <div className="mb-4">
                    <label className="block mb-2">
                        <Controller
                            name="termsAndConditions"
                            control={control}
                            defaultValue={false}
                            render={({ field }) => (
                                <input type="checkbox" {...field} />
                            )}
                        />
                        {' '}I agree to the terms and conditions
                    </label>
                </div>

                <button type="submit" className="bg-primary text-white rounded px-4 py-2 hover:bg-blue-600 w-full font-semibold">Submit</button>
            </form>
            {submitted && (
                <div className="mt-4 text-green-600">
                    Form submitted successfully!
                </div>
            )}
        </div>
    );
};

export default JobApply;
