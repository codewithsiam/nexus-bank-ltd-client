import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";
import { baseUrl } from "../../../config/server";

const MyAccounts = () => {
  const { user } = useContext(AuthContext);
  const [myAccounts, setMyAccounts] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/myAccounts?nidNumber=${user?.nid_card_number}`)
      .then((response) => {
        console.log(response)
        setMyAccounts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user]);
  console.log("sdfsfd", myAccounts);
  return (
    <div>
      <div className="mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-primary">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-primary">My Account</h1>

          <div className="bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid">
            <div className="">
              <div className="overflow-x-auto ">
                <table className="table table-zebra border border-primary">
                  {/* head */}
                  <thead className="bg-primary text-white font-bold">
                    <tr>
                      <th>Account</th>
                      <th>Product</th>
                      <th>Status</th>
                      <th>Currency</th>
                      <th>Balance </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {myAccounts &&
                      myAccounts?.map(
                        ({
                          accountNumber,
                          first_name,
                          last_name,
                          balance,
                          account_type,
                        } , index) => (
                          <tr key={index}>
                            <td>
                              {accountNumber}
                              <br />
                              {first_name} {last_name}
                            </td>
                            <td>{account_type}</td>
                            <td>Operative</td>
                            <td>BDT</td>
                            <td>{balance}</td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccounts;
