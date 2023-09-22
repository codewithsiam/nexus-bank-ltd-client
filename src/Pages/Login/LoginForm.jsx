import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate, useLocation, Navigate, } from "react-router-dom";


const LoginForm = () => {
    /* const { login, resetEmail } = useContext(AuthContext);

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
 */

    return (
        <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label for="email" className="sr-only">Email</label>

                    <div className="relative">
                        <input {...register("email", { required: true })}
                            type="email"
                            className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm mb-4"
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

                <p onClick={resetPassword} className="text-sm text-gray-500 underline cursor-pointer mt-5">Reset Password</p>

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

            </form> */}
        </div>
    );
};

export default LoginForm;
