import React from "react";
import OtpField from "./OtpField";
import { FaTimes } from "react-icons/fa";
import { useScroll } from "framer-motion";
import { useState } from "react";

const OtpModal = ({setIsOpen,handleOpenAccount,otp,setOtp,error}) => {
  
  return (
    <div className=" bg-white rounded-lg absolute left-1/2 top-1/2 shadow-lg text-center px-6 py-8">
        <div onClick={()=>setIsOpen(false)} className="absolute -top-2 -right-2 bg-red-700 text-white rounded-full p-2 cursor-pointer">
        <FaTimes />
        </div>
      <h2 className="text-xl font-semibold my-3">OTP Verification</h2>
      <p>Enter the OTP to send <span className="font-semibold">maniksarker@gmail.com</span></p>
      <OtpField otp={otp} setOtp={setOtp}/>
      {error && <p>{error}</p>}
      <p className="mt-12">Don't receive the OTP? <span className="text-orange-300">Resend OTP</span></p>
      <button onClick={handleOpenAccount} className="my-btn text-white w-full py-2 rounded-md my-3">Verify & Proceed</button>
    </div>
  );
};

export default OtpModal;
