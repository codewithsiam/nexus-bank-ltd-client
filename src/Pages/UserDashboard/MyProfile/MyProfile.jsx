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
    },
];

const Profile = () => {
    // const { user } = useContext(AuthContext);
    const user = myProfileData[0];
    console.log(user)

    const {photoURL,displayName,email,number,address,accountNumber,balance} = user;

    return (
        <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-24 container mx-auto text-black mt-10">
            <div className="text-center py-10 px-5 relative overflow-hidden">
                <div className="relative overflow-hidden mb-7 bg-white p-5 rounded shadow-xl border-1 border-white">
                <div className="text-center mb-4 shadow-lg p-1 nav-btn inline-block rounded-full ">
                    <img className="rounded-full shadow-lg w-[200px] h-[200px] inline-block" src={photoURL} alt="user"/>
                </div>
                <div className="">
                    <h4 className="text-3xl font-semibold">{displayName}</h4>
                    <h3 className="text-md">{email}</h3>
                    <ul className="flex justify-center items-center gap-3 mt-4">
                        <li><a href="#!"><FaFacebook/></a></li>
                        <li><a href="#!"><FaGoogle/></a></li>
                        <li><a href="#!"><FaTwitter/></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="py-10 px-5 relative overflow-hidden ">
                <div className="relative overflow-hidden mb-7 bg-white p-5 rounded shadow-xl border-1 border-white">
                    <h4 className="font-bold text-yellow-700 text-2xl"> My Profile</h4>
                    <p className="my-4 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                        to using Content here, content here, making it look like readable English.</p>
                    <div className="">
                        <table className="responsive-table bordered">
                            <tbody>
                                <tr>
                                    <td className="font-semibold">User Name</td>
                                    <td className="py-1 pl-1 pr-2">:</td>
                                    <td>{displayName}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Eamil</td>
                                    <td className="py-1 pl-1 pr-2">:</td>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Phone</td>
                                    <td className="py-1 pl-1 pr-2">:</td>
                                    <td>
                                        {number}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Address</td>
                                    <td className="py-1 pl-1 pr-2">:</td>
                                    <td>{address}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Account Number</td>
                                    <td className="py-1 pl-1 pr-2">:</td>
                                    <td>{accountNumber}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Total Balance</td>
                                    <td className="py-1 pl-1 pr-2">:</td>
                                    <td>{balance.toFixed(2)} tk</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="">
                            <div className="inline-block overflow-hidden mt-4">
                            <a href="#" className="flex gap-1 items-center nav-btn text-white cursor-pointer px-3 py-2"><FaPencilAlt className="mr-1"></FaPencilAlt> Edit my profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;