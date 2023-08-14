import React, { useContext } from 'react';
import Google from '../../components/Google/Google';
import registrationImage from '../../assets/images/Registration/registration-img.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../providers/AuthProvider';



const Registration = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm()

    const { registration } = useContext(AuthContext);

    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleShowHidePassword = () => {
        setShowOne(!showOne);
    }
    const handleShowHideConfirmPassword = () => {
        setShowTwo(!showTwo);
    }

    // form data
    const onSubmit = (data) => {
        if (data.password === data.confirmPassword) {
            registration(data.email, data.password)
                .then(result => {
                    const registeredUser = result;
                    console.log(registeredUser)
                    setError('')
                })
                .catch(error => {
                    setError(error.message)
                })
        } else {
            setError('Password does not match');
        }

    }


    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Registration!</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label for="email" className="sr-only">Name</label>

                        <div className="relative">
                            <input {...register("name", { required: true })}
                                type="text"
                                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Your Name"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input {...register("email", { required: true })}
                                type="email"
                                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Your Email"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input {...register("password", { required: true })}
                                type={showOne ? 'text' : 'password'}
                                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span onClick={handleShowHidePassword} className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                {
                                    showOne ? <AiFillEye size={20} className='cursor-pointer' /> : <AiFillEyeInvisible size={20} className='cursor-pointer' />
                                }
                            </span>
                        </div>

                        <div className="relative mt-5">
                            <input {...register("confirmPassword", { required: true })}
                                type={showTwo ? 'text' : 'password'}
                                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Confirm Password"
                            />

                            <span onClick={handleShowHideConfirmPassword} className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                {
                                    showTwo ? <AiFillEye size={20} className='cursor-pointer' /> : <AiFillEyeInvisible size={20} className='cursor-pointer' />
                                }
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className="text-red-500 text-center">
                            {error}
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            Already have an account ?
                            <Link className="underline" to='/login'> Sign in</Link>
                        </p>

                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign up
                        </button>


                    </div>

                    <Google />
                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src={registrationImage}
                    className=""
                />
            </div>
        </section>
    );
};

export default Registration;