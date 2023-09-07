import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../providers/AuthProvider";
import { baseUrl } from "../../../../config/server";
import axios from "axios";

const FundTransfer = () => {
  const { user } = useContext(AuthContext);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [myAccounts, setMyAccounts] = useState([]);
  const [balance, setBalance] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

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

  const handleTransfer = () => {
    // Perform the transfer logic here
    // You can use axios or fetch to send a transfer request to the server
    // and handle the response accordingly
    // You may also want to validate the transferAmount and other details
    // before initiating the transfer.
    Swal.fire("Good job!", "Your Transaction is successful");
  };

  const handleCancel = () => {
    Swal.fire("Your Transaction is Cancel !");
  };

  return (
    <div className="mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-blue-200">
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
                      <option key={index} value={info.accountNumber}>
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
                <select className="select select-bordered md:w-3/4">
                  <option value="">Select an account</option>
                  {/* You can populate this select with beneficiary account info */}
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
