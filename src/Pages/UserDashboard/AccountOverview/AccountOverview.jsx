import React from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../config/server";

const cards = [
  {
    Card_Type: "Credit Card",
    Card_Number: "1234 5678 9012 3456",
    Cardholder_Name: "John Doe",
    Status: "Active",
    Available_Amount: 5000.0,
  },
  {
    Card_Type: "Payroll Card",
    Card_Number: "9876 5432 1098 7654",
    Cardholder_Name: "Jane Smith",
    Status: "Active",
    Available_Amount: 2500.0,
  },
];

const AccountOverview = () => {
  const { user } = useContext(AuthContext);
  const [myAccounts, setMyAccounts] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/myAccounts?nidNumber=${user?.nid_card_number}`)
      .then((response) => {
        setMyAccounts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log("sdfsfd", myAccounts);

  return (
    <div
      className="mt-16 border border-blue-200 p-10 rounded border-spacing-1"
      style={{ boxShadow: "1px 1px 5px lightblue" }}
    >
      <h1 className="text-3xl font-semibold text-primary ">
        Summary of Accounts
      </h1>
      <div className="h-[1px] w-full my-3 border border-dashed bg-primary"></div>
      <div className="">
        <h2 className="text-xl text-primary mb-3">Accounts Details</h2>
        <div className="overflow-x-auto rounded border border-primary">
          <table className="table">
            <thead className="bg-primary text-lg text-white">
              <tr>
                <th>Account Type</th>
                <th>Account No</th>
                <th>Status</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {myAccounts &&
                myAccounts?.map(
                  (
                    {
                      accountNumber,
                      first_name,
                      last_name,
                      balance,
                      account_type,
                    },
                    index
                  ) => (
                    <tr key={index}>
                      <td>{account_type}</td>
                      <td>{accountNumber}</td>
                      <td>active</td>
                      <td>{balance}</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-[1px] w-full mt-6 mb-10 border border-dashed bg-primary"></div>
      <div className="">
        <h2 className="text-xl text-primary mb-3">Cards Details</h2>
        <div className="overflow-x-auto rounded border border-primary">
          <table className="table">
            <thead className="bg-primary text-lg text-white">
              <tr>
                <th>Card Type</th>
                <th>Card Number</th>
                <th>Cardholder Name</th>
                <th>Status</th>
                <th>Available Amount</th>
              </tr>
            </thead>
            <tbody>
              {cards?.map((card, index) => (
                <tr key={index}>
                  <td>{card["Card_Type"]}</td>
                  <td>{card["Card_Number"]}</td>
                  <td>{card["Cardholder_Name"]}</td>
                  <td>{card["Status"]}</td>
                  <td>{card["Available_Amount"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
