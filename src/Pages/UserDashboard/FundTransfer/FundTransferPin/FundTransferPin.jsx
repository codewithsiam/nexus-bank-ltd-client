import axios from "axios";
import React from "react";
import { useState } from "react";

const FundTransferPin = ({ handleVerifyPin }) => {
  const [enteredOtp, setEnteredOtp] = useState(null);

  const handleOtpchange = (event) => {
    const otp = event.target.value;
    setEnteredOtp(otp);
  };

  const handleVerifyPinButton = () => {
    handleVerifyPin(enteredOtp)
  };
 
  return (
    <div
      className="mt-20 border rounded-lg bg-white border-gray-400"
      style={{ boxShadow: "1px 1px 5px lightblue" }}
    >
      <div className="p-4">
        <h1 className="text-3xl font-bold text-F mb-5">
          Fund Transfer Verification with pin
        </h1>
        <div>
          <p>
            We have sent m-PIN to your email. To proceed with your request
            please verify by entering the m-PIN below:
          </p>
          <div className="bg-slate-100 p-5 rounded mt-3">
            <h1 className="font-bold">m-PIN</h1>
            <input
            onChange={handleOtpchange}
              type="number"
              placeholder="Your pin"
              className="my-4 block input input-bordered w-full max-w-xs"
            />

            <button
              type="submit"
              onClick={handleVerifyPinButton}
              className="px-5 py-2 text-white bg-primary rounded"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundTransferPin;
