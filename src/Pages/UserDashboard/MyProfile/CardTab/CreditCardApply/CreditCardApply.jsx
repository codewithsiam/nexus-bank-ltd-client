import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const CreditCardApply = () => {
    const { handleSubmit, control } = useForm();

    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        ssn: '',
        permanentaddress: '',
        annualIncome: '',
        employmentStatus: '',
        employerInfo: '',
        termsAndConditions: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        fetch('http://localhost:5000/credit-card', {
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
        <div className="w-full mx-auto p-4 my-20">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Credit Card Application</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Personal Information */}
                <div className="mb-4 lg:flex">
                    <div className="w-full lg:w-1/2 pr-0 lg:pr-2 mb-2 lg:mb-0">
                        <label className="block mb-1">Full Name</label>
                        <Controller
                            name="fullName"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    {...field}
                                    className="w-full rounded border p-2"
                                />
                            )}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-2">
                        {/* Date of Birth */}
                        <label className="block mb-1">Date of Birth</label>
                        <Controller
                            name="dateOfBirth"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="date"
                                    {...field}
                                    className="w-full rounded border p-2"
                                />
                            )}
                        />
                    </div>
                </div>
                {/* Personal Information */}
                <div className="mb-4 lg:flex">
                    <div className="w-full lg:w-1/2 pr-0 lg:pr-2 mb-2 lg:mb-0">
                        <label className="block mb-1">Social Security Number (SSN)</label>
                        <Controller
                            name="ssn"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    {...field}
                                    className="w-full rounded border p-2"
                                />
                            )}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-2">
                        <label className="block mb-1">Permanent Address</label>
                        <Controller
                            name="permanentaddress"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    {...field}
                                    className="w-full rounded border p-2"
                                />
                            )}
                        />
                    </div>
                </div>
                {/* Personal Information */}
                <div className="mb-4 lg:flex">
                    <div className="w-full lg:w-1/2 pr-0 lg:pr-2 mb-2 lg:mb-0">
                        <label className="block mb-1">Annual Income</label>
                        <Controller
                            name="annualIncome"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="number"
                                    {...field}
                                    className="w-full rounded border p-2"
                                />
                            )}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-2">
                        <label className="block mb-1">Employment Status</label>
                        <Controller
                            name="employmentStatus"
                            control={control}
                            render={({ field }) => (
                                <select {...field} className="w-full rounded border p-2">
                                    <option value="">Select</option>
                                    <option value="employed">Employed</option>
                                    <option value="unemployed">Unemployed</option>
                                    <option value="self-employed">Self-Employed</option>
                                </select>
                            )}
                        />
                    </div>
                </div>
                {/* Personal Information */}
                <div className="mb-4 lg:flex">
                    <div className="w-full lg:w-1/2 pr-0 lg:pr-2 mb-2 lg:mb-0">
                        <label className="block mb-1">Employer Information</label>
                        <Controller
                            name="employerInfo"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    {...field}
                                    className="w-full rounded border p-2"
                                />
                            )}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-2">
                        <label className="block mb-1">Employer Information</label>
                        <Controller
                            name="employerInfo"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    {...field}
                                    className="w-full rounded border p-2"
                                />
                            )}
                        />
                    </div>
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

export default CreditCardApply;
