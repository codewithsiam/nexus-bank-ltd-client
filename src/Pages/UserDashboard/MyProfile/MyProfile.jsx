import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaFacebook, FaGoogle, FaPencilAlt, FaTwitter, FaUser } from "react-icons/fa";

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
    // nav-btn  
    return (
        <div className=" pt-10">
            <div class="relative w-full text-white">
                <img src="https://i.ibb.co/3rg7VGN/profile-banner.jpg" class="w-full h-[300px]" alt="Louvre"/>
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hiddens bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 opacity-70"></div>
                <div className=" pl-5 md:pl-10 lg:pl-20 absolute top-16">
                    <h1 className="text-4xl">Hellow, I am {displayName}</h1>
                    <p>This is your profile page. You can see the all history and you can update your profile.</p>
                    <div className="">
                        <div className="inline-block overflow-hidden mt-4">
                        <a href="#" className="flex gap-1 items-center border-2 border-white nav-btn text-white cursor-pointer px-3 py-2"><FaPencilAlt className="mr-1"></FaPencilAlt> Edit my profile</a>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className="flex gap-10 container mx-auto text-black">
                <div className="text-center relative overflow-hidden">
                    <div className=" text-center mb-4 shadow-lg p-1 nav-btn
                     rounded-full ">
                        <img className="rounded-full shadow-lg w-[200px] h-[200px] inline-block" src={photoURL} alt="user"/>
                    </div>
                    <div className="relative overflow-hidden mb-7 bg-white p-5 rounded shadow-xl border-1 border-white">
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
                    <h4 className="font-bold text-yellow-700 text-2xl flex gap-1"><FaUser></FaUser> User Details</h4>
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
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Profile;