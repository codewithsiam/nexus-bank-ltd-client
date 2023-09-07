import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import axios from "axios";
import { baseUrl } from "../../../config/server";
import { ContentPasteSearchOutlined } from "@mui/icons-material";

const TransferMoney = () => {
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOTP] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const [formData, setFormData] = useState({
    senderAccountNumber: "",
    receiverAccountNumber: "",
    reason: "",
    transferAmount: "",
  });

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/verify-otp?accountNumber=${formData.senderAccountNumber}&otp=${otp}`
      ); // Replace with your API endpoint
      setVerificationResult(response.data);
      console.log(response.data);
      const requestData = { ...formData };

      try {
        const response = await axios.put(
          `${baseUrl}/money-transfer`,
          requestData
        );
        console.log(response.data);

        Swal.fire("Success", "Money transfer successful", "success");

        // Reset the form
        setFormData({
          senderAccountNumber: "",
          receiverAccountNumber: "",
          reason: "",
          transferAmount: "",
        });
      } catch (error) {
        Swal.fire("Error", "An error occurred while submitting data", "error");
        console.error(error);
      }
    } catch (error) {
      console.error(error);
      setVerificationResult({
        status: false,
        message: "An error occurred while verifying the OTP.",
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData.senderAccountNumber);
    const response = await axios.get(
      `${baseUrl}/send-otp?accountNumber=${formData.senderAccountNumber}`
    );
    console.log(response.data);
    if (response.data.sendEmail === false) {
      return alert("OTP not sent");
    }

    setOtpStep(true);

    return;
    // Data validation (uncomment and add validation as needed)
    // if (!formData.senderAccountNumber || !formData.receiverAccountNumber || !formData.transferAmount) {
    //   Swal.fire("Error", "Please fill in all required fields", "error");
    //   return;
    // }
  };

  return (
    <div className="bg-cover bg-center pt-16 bg-[url('https://i.ibb.co/Rz5hnKC/bg-moneytransfer.jpg')]">
      <div>
        <h1 className="text-xl text-center font-bold underline uppercase text-blue-900">
          Money Transfer
        </h1>
      </div>
      {otpStep === false ? (
        <div className={`grid md:grid-cols-2 bg-white mx-20 mt-10 gap-10`}>
          <div className="ml-5 md:ml-10 mt-5">
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="mb-5">
                <h1 className="ml-[8px] text-base font-bold">
                  Sender Account Number
                </h1>
                <TextField
                  name="senderAccountNumber"
                  label="Sender Account Number"
                  variant="filled"
                  onChange={handleInputChange}
                  value={formData.senderAccountNumber}
                />
              </div>
              <div className="mb-5">
                <h1 className="ml-[8px] text-base font-bold">
                  Receiver Account Number
                </h1>
                <TextField
                  name="receiverAccountNumber"
                  label="Receiver Account Number"
                  variant="filled"
                  onChange={handleInputChange}
                  value={formData.receiverAccountNumber}
                />
              </div>
              <div className="mb-5">
                <h1 className="ml-[8px] text-base font-bold">Your Reason</h1>
                <TextField
                  name="reason"
                  label="Reason"
                  variant="filled"
                  onChange={handleInputChange}
                  value={formData.reason}
                />
              </div>
              <div className="mb-4">
                <h1 className="ml-[8px] text-base font-bold">
                  Transfer Amount
                </h1>
                <TextField
                  name="transferAmount"
                  label="Transfer Amount"
                  variant="filled"
                  onChange={handleInputChange}
                  value={formData.transferAmount}
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="my-btn px-12 py-3 text-white font-semibold rounded-md"
                >
                  Transfer
                </button>
              </div>
            </Box>
          </div>
          <div className="">
            <img
              className="w-full"
              src="https://i.ibb.co/8KmTYGc/Money-Transfer-1.png"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div>
        <h2 className="text-lg font-semibold mb-4">OTP Verification</h2>
        <div className="mb-2">
          <label className="font-semibold">Sender Account Number:</label>
          <span className="text-gray-700">{formData.senderAccountNumber}</span>
        </div>
        <div className="mb-2">
          <label className="font-semibold">Receiver Account Number:</label>
          <span className="text-gray-700">{formData.receiverAccountNumber}</span>
        </div>
        <div className="mb-2">
          <label className="font-semibold">Transfer Amount:</label>
          <span className="text-gray-700">{formData.transferAmount}</span>
        </div>
        <div className="mb-4">
          <label className="font-semibold">OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button
          onClick={handleVerifyOTP}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Verify OTP and Confirm Transfer
        </button>
        {verificationResult && (
          <div className="mt-4">
            {verificationResult.verified ? (
              <p className="text-green-600 font-semibold">OTP is valid.</p>
            ) : (
              <p className="text-red-600 font-semibold">
                OTP is invalid. {verificationResult.message}
              </p>
            )}
          </div>
        )}
      </div>
      
      )}
    </div>
  );
};

export default TransferMoney;
