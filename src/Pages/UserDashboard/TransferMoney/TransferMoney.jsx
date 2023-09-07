import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import axios from "axios";
import { baseUrl } from "../../../config/server";
import { AuthContext } from "../../../providers/AuthProvider";

const TransferMoney = () => {
  const [userAccount, setUserAccount] = useState({});
  const { user } = useContext(AuthContext);
  // load senders info
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/user-accounts?email=${user?.email}`
        );
        setUserAccount(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user]);

  console.log("user account", userAccount);
  const [formData, setFormData] = useState({
    receiverName: "",
    receiverAccountNumber: "",
    accountType: "",
    email: "",
    transferAmount: "",
    userEmail: userAccount.email,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // data avlidation
    for (const key in formData) {
      if (formData[key] === "") {
        await Swal.fire(
          "Error",
          `Please fill in ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`,
          "error"
        );
        return;
      }
    }
    const requestData = {
      ...formData,
      senderAccountNumber: userAccount?.account_number,
      senderEmail: userAccount.email,
      senderFirstName: userAccount.first_name,
      senderLastName: userAccount.last_name,
    };
    if (!userAccount?.account_number) {
      await Swal.fire("Error", "You hav no account number", "error");
    }
    // Insufficient balance check
    if (
      parseFloat(userAccount?.balance) <= 0 ||
      parseFloat(userAccount?.balance) < parseFloat(formData.transferAmount)
    ) {
      await Swal.fire(
        "Error",
        "Insufficient balance for the transfer",
        "error"
      );
      return;
    }
    try {
      const response = await axios.put(
        `${baseUrl}/money-transfer`,
        requestData
      );
      console.log(response.data);

      await Swal.fire("Success", "Money transfer successfully", "success");
      // reset the form
      setFormData({
        receiverName: "",
        receiverAccountNumber: "",
        accountType: "",
        email: "",
        transferAmount: "",
      });
    } catch (error) {
      await Swal.fire(
        "Error",
        "An error occurred while submitting data",
        "error"
      );
      console.error(error);
    }
  };

  const accountTypes = ["Savings", "Student", "Checking", "Business"];

  return (
    <div className='bg-cover bg-center pt-16 bg-[url("https://i.ibb.co/Rz5hnKC/bg-moneytransfer.jpg")]'>
      <div>
        <h1 className="text-xl text-center font-bold underline uppercase text-blue-900">
          Money Transfer
        </h1>
      </div>
      <div className="grid md:grid-cols-2 bg-white mx-20 mt-10 gap-10">
        <div className="ml-5 md:ml-10 mt-5">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <h1 className="ml-[8px] text-base font-bold">Receiver Name</h1>
              <TextField
                name="receiverName"
                id="filled-helperText"
                label="Receiver name"
                variant="filled"
                onChange={handleInputChange}
                value={formData.receiverName}
              />
            </div>
            <div className="mb-5">
              <h1 className="ml-[8px] text-base font-bold">
                Receiver Account Number
              </h1>
              <TextField
                name="receiverAccountNumber"
                id="filled-number"
                label="Account Number"
                variant="filled"
                onChange={handleInputChange}
                value={formData.receiverAccountNumber}
              />
            </div>
            <div className="mb-5">
              <h1 className="ml-[8px] text-base font-bold">Account Type</h1>
              <select
                name="accountType"
                id="filled-helperText"
                onChange={handleInputChange}
                value={formData.accountType}
                className="select select-bordered"
              >
                <option value="">Select Account Type</option>
                {accountTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <h1 className="ml-[8px] text-base font-bold">
                Your Email Address
              </h1>
              <TextField
                name="email"
                id="filled-helperText"
                label="Your email"
                variant="filled"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <div className="mb-4">
              <h1 className="ml-[8px] text-base font-bold">Transfer Amount</h1>
              <TextField
                name="transferAmount"
                id="Standard-helperText"
                label="Transfer amount"
                variant="filled"
                onChange={handleInputChange}
                value={formData.transferAmount}
              />
            </div>
            <div className="mb-4">
              <button
                type="button"
                onClick={handleSubmit}
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
    </div>
  );
};

export default TransferMoney;
