import React from 'react';
import { useContext } from 'react';
import googleImage from '../../assets/images/Registration/google.svg'
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate, useLocation, Navigate, } from "react-router-dom";

const Google = () => {
    const { googleSignIn } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const googleSignInHandler = () => {
        googleSignIn()
            .then(result => {

                const storeUser = { name: result?.user?.displayName, email: result?.user?.email, photo: result?.user?.photoURL, role: 'customer' }

                fetch(`${baseUrl}/addUser`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(storeUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success('Successfully toasted!')
                    })

                navigate(from, { navigate: true });
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <button onClick={googleSignInHandler} className="group mx-auto h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
            <div className="flex items-center space-x-4 justify-center">
                <img src={googleImage} className="left-0 w-5" alt="google logo" />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
            </div>
        </button>
    );
};

export default Google;