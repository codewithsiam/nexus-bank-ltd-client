import React, { useContext, useState } from 'react';
import './Keyboard.css';
import { useForm } from "react-hook-form"
import { useNavigate, useLocation, Navigate, } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';

const Keyboard = () => {
    const { login } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, } = useForm()
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const [inputValue, setInputValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [activeInput, setActiveInput] = useState('emailInput');
    const [capsLockEnabled, setCapsLockEnabled] = useState(false);


    // login
    const onSubmit = (data) => {
        login(data.email, data.password)
            // console.log(data.email)
            // console.log(data.password)
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

    const handleKeyPress = (key) => {
        if (key === 'Backspace') {
            handleBackspace();
        } else if (key === 'Space') {
            handleSpace();
        } else if (key === 'Clear') {
            setInputValue('');
            setPasswordValue('');
        } else if (key === 'Password') {
            toggleActiveInput();
        } else if (key === 'CapsLock') {
            toggleCapsLock();
        } else {
            handleRegularKey(key);
        }
    };

    const handleRegularKey = (key) => {
        if (activeInput === 'emailInput') {
            setInputValue(inputValue + (capsLockEnabled ? key.toUpperCase() : key));
        } else {
            setPasswordValue(passwordValue + (capsLockEnabled ? key.toUpperCase() : key));
        }
    };

    const handleSpace = () => {
        if (activeInput === 'emailInput') {
            setInputValue(inputValue + ' ');
        } else {
            setPasswordValue(passwordValue + ' ');
        }
    };

    const handleBackspace = () => {
        if (activeInput === 'emailInput') {
            setInputValue(inputValue.slice(0, -1));
        } else {
            setPasswordValue(passwordValue.slice(0, -1));
        }
    };

    const toggleActiveInput = () => {
        setActiveInput(activeInput === 'emailInput' ? 'passwordInput' : 'emailInput');
    };

    const toggleCapsLock = () => {
        setCapsLockEnabled(!capsLockEnabled);
    };

    const keyboardLayout = [
        '1234$567890',
        'qwertyuiop',
        '@asdfghjkl',
        'zxcvbnm.',
        ['CapsLock', 'Space', 'Clear', 'Backspace'],
        ['Password'],
    ];

    return (
        <div className='bg-[#EEEDEB]'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-[#3E639F] flex items-center">
                    <input
                        {...register("email", { required: true })}
                        className='border'
                        type="text"
                        // value={inputValue}
                        id="emailInput"
                        placeholder='Type your email'
                        onChange={() => { }}
                        onClick={() => setActiveInput('emailInput')}
                    />
                    {errors.email?.type === "required" && (
                        <p className="text-red-400 mt-2">Email is required</p>
                    )}

                    <input
                        {...register("password", { required: true })}
                        className='border ml-2'
                        type="text"
                        placeholder='Type your password'
                        value={passwordValue}
                        id="passwordInput"
                        onChange={() => { }}
                        onClick={() => setActiveInput('passwordInput')}
                    />

                    <button className='bg-[#E40100] text-white ml-2 px-3 py-1 mt-2 rounded mb-4'>Login</button>
                </div>
                <p>{error}</p>
            </form>

            <div className="keyboard">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="keyboard-row">
                        {Array.isArray(row) ? (
                            row.map((key, keyIndex) => (
                                <button
                                    key={keyIndex}
                                    className={`keyboard-key ${key === 'Space' ? 'space' : ''}border px-5 py-3`}
                                    onClick={() => handleKeyPress(key)}
                                >
                                    {key === 'CapsLock' ? (capsLockEnabled ? 'Caps Lock ON' : 'Caps Lock OFF') : key}
                                </button>
                            ))
                        ) : (
                            <div className="keyboard-key-row">
                                {row.split('').map((key, keyIndex) => (
                                    <button
                                        key={keyIndex}
                                        className={`keyboard-key ${key === 'Space' ? 'space' : ''}`}
                                        onClick={() => handleKeyPress(key)}
                                    >
                                        {key}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Keyboard;
