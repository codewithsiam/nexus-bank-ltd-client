import React, { useContext } from 'react';
import Google from '../../components/Google/Google';
import registrationImage from '../../assets/images/Registration/registration-img.png'
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from "react-hook-form"
import { useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useRef } from 'react';
import { app } from '../../firebase/firebase.config';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate, useLocation, Navigate, } from "react-router-dom";


const Login = () => {
    const { login, resetEmail } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit, } = useForm()

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const emailRef = useRef();

    const handleShowHide = () => {
        setShow(!show)
    }

    // login
    const onSubmit = (data) => {
        login(data.email, data.password)
            .then(result => {
                const loggedUser = result;
                console.log(loggedUser);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // reset password
    const resetPassword = e => {
        const email = (emailRef.current.value)
        if (!email) {
            alert('Please provide your email');
            return;
        }
        resetEmail(email)
            .then(result => {
                console.log(result)
                alert('Please check your email')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Login!</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label for="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input {...register("email", { required: true })}
                                type="email"
                                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Your Email"
                            />
                            {errors.email?.type === "required" && (
                                <p className="text-red-400 mt-2">Email is required</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label for="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input {...register("password", { required: true })}
                                type={show ? 'text' : 'password'}
                                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                            {errors.password?.type === "required" && (
                                <p className="text-red-400 mt-2">Password is required</p>
                            )}

                            <span onClick={handleShowHide} className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                {
                                    show ? <AiFillEye size={20} className='cursor-pointer' /> : <AiFillEyeInvisible size={20} className='cursor-pointer' />
                                }
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className="text-red-500 text-center">{error}</p>
                    </div>

                    <p onClick={resetPassword} className="text-sm text-gray-500 underline cursor-pointer">Reset Password</p>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            No Account ?
                            <Link className="underline" to="/registration"> Sign up</Link>
                        </p>

                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
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

export default Login;