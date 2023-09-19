import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../../config/server";
import axios from "axios";
import Swal from "sweetalert2";

const AccountBeneficiaryList = () => {
  const [beneficiaryList, setBeneficiaryList] = useState([]);
  const [control,setControl] = useState(true)
  const username = "test1";
  useEffect(() => {
    fetch(`${baseUrl}/beneficiaryList/${username}`)
      .then((res) => res.json())
      .then((data) => setBeneficiaryList(data))
      .then((err) => console.log(err));
  }, [username,control]);

  //
  const handleStatus = (name, status) => {
    axios
      .patch(`${baseUrl}/beneficiary-status/${name}/?status=${status}`,{
       username
      })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          setControl(!control);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Make ${status} successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-primary">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-primary">
          Fund Transfer Beneficiary List
        </h1>
        <div className="bg-slate-100 p-2 rounded-lg">
          <title></title>
          <p>
            <Link to="AddBeneficiary" className="text-primary ">
              Click Here
            </Link>{" "}
            To Add Beneficiary Credit Card{" "}
          </p>
        </div>
        <div className="bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid">
          <p className="text-center mt-4">
            Total number of Beneficiary : {beneficiaryList.length}
          </p>
          <div className="">
            <div className="overflow-x-auto ">
              <table className="table table-zebra border border-primary">
                {/* head */}
                <thead className="bg-primary text-white font-bold">
                  <tr>
                    <th>Name</th>
                    <th>Beneficiary</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {beneficiaryList?.map((beneficiary, index) => (
                    <tr>
                      <td>{beneficiary?.username}</td>
                      <td>{beneficiary?.account_number}</td>
                      <td>{beneficiary?.status}</td>
                      <td>
                        {" "}
                        {/* <button
                        onClick={() => {
                          handelEdit();
                        }}
                        className="btn bg-gradient-to-b from-blue-700 to-primary rounded-md text-white ms-10 mt-4"
                      >
                        Edit
                      </button> */}
                        <div className="flex gap-2 items-center justify-center ">
                          <div>
                            <details className="dropdown">
                              <summary className="m-1 btn">
                                Change Status
                              </summary>
                              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                  <button onClick={()=>handleStatus(beneficiary?.username,"active")}>Active</button>
                                </li>
                                <li>
                                  <button onClick={()=>handleStatus(beneficiary?.username,"deactivate")}>Deactivate</button>
                                </li>
                              </ul>
                            </details>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBeneficiaryList;
