import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../providers/AuthProvider";
import { baseUrl } from "../../../../config/server";
import axios from "axios";
import FundTransferPin from "../FundTransferPin/FundTransferPin";
import { sendOTP } from "../../../../Components/Utils/SendOtp";

const FundTransfer = () => {
  const { user } = useContext(AuthContext);
  const [myAccounts, setMyAccounts] = useState([]);
  const [balance, setBalance] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [transferToAccount, setTransferToAccount] = useState("");
  const [transferAmount, setTransferAmount] = useState(null);
  const [reason, setReason] = useState("");
  const [transferData, setTransferData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpMessage, setOtpMessage] = useState("");
  const [enteredOtp, setEnteredOtp] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/myAccounts?nidNumber=${user?.nid_card_number}`)
      .then((response) => {
        setMyAccounts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user]);

  const handleAccountChange = (event) => {
    const selectedAccount = event.target.value;
    setSelectedAccount(selectedAccount);
    const selectedBalance = myAccounts.find(
      (info) => info.accountNumber === selectedAccount
    )?.balance;
    setBalance(selectedBalance || "");
  };
  const handleBenificiaryChange = (event) => {
    const transferToAccountInfo = event.target.value;
    setTransferToAccount(transferToAccountInfo);
  };

  const handleReasonChange = (event) => {
    const reason = event.target.value;
    setReason(reason);
  };

  const handleSendOTP = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = {
        accountNumber: selectedAccount,
        username: user?.username,
      };

      const result = await sendOTP(data);
      console.log(result);
      setOtpSent(true);
    } catch (err) {
      setError(err.message || "An error occurred while sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleTransfer = () => {
    const transferDataInfo = {
      transferFromAccount: selectedAccount,
      transferToAccount: transferToAccount,
      transferAmount: transferAmount,
      reason: reason,
      transferType: "accountToAccount",
    };
    setTransferData(transferDataInfo);
    console.log(transferDataInfo);
    handleSendOTP();
  };

  const handleOtpchange = (event) => {
    setOtpMessage('')
    const otp = event.target.value;
    setEnteredOtp(otp);
  };

  const handleVerifyPinButton = () => {
    handleVerifyPin(enteredOtp);
  };

  const handleVerifyPin = (enteredOtp) => {
    const storedEmail = localStorage.getItem("email");
    const storedAccountNumber = localStorage.getItem("accountNumber");
    console.log("transfer data", transferData);
    let Url = "";
    if (storedEmail) {
      Url = `${baseUrl}/verify-otp?email=${storedEmail}&otp=${enteredOtp}`;
    } else {
      Url = `${baseUrl}/verify-otp?accountNumber=${storedAccountNumber}&otp=${enteredOtp}`;
    }

    axios
      .post(Url)
      .then((response) => {
        console.log(response);
        setOtpMessage(response.data.message);
        if (response.data.verified) {
          localStorage.removeItem("email");
          localStorage.removeItem("accountNumber");
          handleTransferFinally();
        }
      })
      .catch((error) => {
        setOtpMessage(error.message);
        console.error("Error fetching data:", error);
      });
  };

  const handleTransferFinally = (pinVerified) => {
    console.log("Transfer");
    // console.log(transferData);
    axios
      .put(`${baseUrl}/money-transfer`, transferData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleCancel = () => {
    Swal.fire("Your Transaction is Cancel !");
  };
  // console.log(user.beneficiaryList);
  return (
    <div className="mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-blue-200">
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
              <p>{otpMessage}</p>
            </div>
          </div>
        </div>
      </div>

      {/* transfer fund page  */}
      <div className="p-4">
        <h1 className="text-3xl font-bold text-primary mb-5">Fund Transfer</h1>
        <div className="md:flex bg-slate-100 p-2">
          <div className="w-2/3">
            <div className="mb-5">
              <h3 className="font-bold text-lg text-primary">From Account</h3>
              <div className="md:flex items-center md:gap-10 ms-2 py-6">
                <p className="md:w-1/4">Transfer from</p>
                <select
                  value={selectedAccount}
                  onChange={handleAccountChange}
                  className="select select-bordered md:w-2/4"
                >
                  <option value="">Select an account</option>
                  {user &&
                    myAccounts?.map((info, index) => (
                      <option
                        key={index}
                        onChange={handleBenificiaryChange}
                        value={info.accountNumber}
                      >
                        {info.account_type} - {info.accountNumber}
                      </option>
                    ))}
                </select>
                {balance && (
                  <p className="md:w-1/4">Drawable (BDT): {balance}</p>
                )}
              </div>
              <div className="border border-dashed border-blue-200 mb-5"></div>
            </div>
            <div className="mb-5">
              <h3 className="font-bold text-lg text-primary">
                Beneficiary Details
              </h3>
              <div className="md:flex items-center md:gap-10 ms-2 py-6">
                <p className="md:w-1/4">Transfer to</p>
                <select
                  value={transferToAccount}
                  onChange={handleBenificiaryChange}
                  className="select select-bordered md:w-3/4"
                >
                  <option value="">Select an account</option>
                  {user?.beneficiaryList?.map(
                    ({ account_number, username }, index) => (
                      <option key={index} value={account_number}>
                        {username} - {account_number}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="border border-dashed border-blue-200 mb-5"></div>
            </div>
            <div className="mb-5">
              <p className="font-bold text-lg text-primary">Transfer</p>
              <div className="md:flex items-center md:gap-10 ms-2 py-6">
                <p className="md:w-1/4">Transfer amount</p>
                <div className="md:w-3/4">
                  <input
                    className="required border p-2 mt-2 border-black rounded-lg md:w-3/4"
                    type="number"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    required
                  />{" "}
                  BDT
                </div>
              </div>
              <div className="md:flex items-center md:gap-10 ms-2 py-6">
                <p className="md:w-1/4">Reason for transfer</p>
                <textarea
                  onChange={handleReasonChange}
                  className="border p-2 mt-2 border-black rounded-lg md:w-3/4"
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                onClick={handleTransfer}
                className="btn bg-gradient-to-b from-primary to-blue-700 rounded-md text-white ms-10 mt-4"
              >
                Transfer
              </button>
              <button
                onClick={handleCancel}
                className="btn bg-gradient-to-b from-red-500 to-red-700 rounded-md text-white ms-10 mt-4"
              >
                Cancel
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FundTransfer;
