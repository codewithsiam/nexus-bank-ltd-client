import React from "react";
import Swal from "sweetalert2";
import { baseUrl } from "../../config/server";
import { useScroll } from "react-spring";
import { useState } from "react";

const AddBeneficiary = () => {
 const [error,setError] = useState(null)
  const selfUserName = "test1";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const username = e.target.userName.value;
    const account_number = e.target.accountNumber.value;
    fetch(`${baseUrl}/add-beneficiary`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, account_number, selfUserName }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Good job!", "Add BeneFiciary !", "success");
        }
        else{
            setError(data.error)
        }
      });
  };

  return (
    <div className="mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-green-200">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-green-600">Add Beneficiary</h1>
        <form
          onSubmit={handleOnSubmit}
          className="bg-slate-100 p-2 rounded-lg md:ps-16"
        >
          <div className="flex gap-9 ">
            <p>Name</p>
            <input
              name="userName"
              className="rounded-lg px-2 py-1 w-full max-w-xs"
              type="text"
              required
            />
          </div>
          <div className="flex gap-6 my-4">
            <p>Account Number</p>
            <input
              name="accountNumber"
              className="rounded-lg px-2 py-1 w-full max-w-xs"
              type="text"
              required
            />
          </div>
        {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white md:ms-36 mt-4 px-10"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBeneficiary;
