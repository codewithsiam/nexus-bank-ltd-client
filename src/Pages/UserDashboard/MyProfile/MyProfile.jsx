import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaFacebook, FaGoogle, FaPencilAlt, FaTwitter } from "react-icons/fa";

const myProfileData = [
    {
        id: 1,
        photoURL: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-1.jpg',
        displayName: "Rukshana rupu",
        email: "rupu.tht@gmail.com",
        number: +8801791687736,
        address: "tongi",
        accountNumber: 441965406712489,
        balance: 40000,
        customerInfo: 'An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.'
    },
];

const Profile = () => {
    // const { user } = useContext(AuthContext);
    const user = myProfileData[0];

    const { photoURL, displayName, email, number, address, accountNumber, balance, customerInfo } = user;

    const [showFullCustomerInfo, setShowFullCustomerInfo] = useState(false);

    const handleToggleCustomerInfo = () => {
        setShowFullCustomerInfo((prev) => !prev);
    };


    return (
        <div className="">
            <div className="p-3 bg-white shadow mt-24">
                <div className="relative flex items-center md:justify-end justify-center mt-11">
                    <div>
                        <img className="w-28 h-28  mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" src={photoURL} alt="" />
                    </div>
                    <div>
                        <button
                            className="flex items-center text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 md:mt-0 mt-5"
                        >
                            <FaPencilAlt className="mr-3" />
                            <span>Edit Profile</span>
                        </button>
                    </div>
                </div>

                <div className="text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">{displayName}</h1>

                    <p className="font-light text-gray-600 mt-3">
                        <span className="font-semibold">Email: </span>
                        {email}
                    </p>

                    <p className="text-gray-500">
                        <span className="font-semibold">Address: </span>
                        {address}
                    </p>

                    <p className="text-gray-500">
                        <span className="font-semibold">Number: </span>
                        {number}
                    </p>

                    <p className="text-gray-500">
                        <span className="font-semibold">Account Number: </span>
                        {accountNumber}
                    </p>

                    <p className="text-gray-500">
                        <span className="font-semibold">Balance: </span>
                        {balance}
                    </p>
                </div>

                <div className="mt-12 flex flex-col justify-center">
                    <p className="text-gray-600 text-center font-light lg:px-16">
                        {showFullCustomerInfo ? customerInfo : customerInfo.slice(0, 100) + '...'}
                    </p>
                    <button
                        onClick={handleToggleCustomerInfo}
                        className="text-indigo-500 py-2 px-4  font-medium mt-4"
                    >
                        {showFullCustomerInfo ? "Show less" : "Show more"}
                    </button>
                </div>

            </div>
        </div>

    );
};

export default Profile;