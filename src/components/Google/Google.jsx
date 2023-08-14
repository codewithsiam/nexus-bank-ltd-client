import React from 'react';
import { useContext } from 'react';
import googleImage from '../../assets/images/Registration/google.svg'
import { AuthContext } from '../../providers/AuthProvider';

const Google = () => {
    const { googleSignIn } = useContext(AuthContext);

    const googleSignInHandler = () => {
        googleSignIn()
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