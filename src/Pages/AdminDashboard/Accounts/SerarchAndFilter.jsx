import React, { useState } from "react";
import { baseUrl } from "../../../config/server";

const SerarchAndFilter = ({ accounts, setAccounts,control,setControl }) => {

  // handle search -----------
  const handleSearch = (e) => {
    const searchItem = e.target.value;
    fetch(`${baseUrl}/approved-account/${searchItem}`)
      .then((res) => res.json())
      .then((data) => setAccounts(data));
  };

  // handle filter -------------
  const handleFilter = (e)=>{
    const filterItem = e.target.value;
    // console.log(filterItem)
   fetch(`${baseUrl}/approved/${filterItem}`)
   .then(res=>res.json())
   .then(data=>setAccounts(data))
  }
  return (
    <div>
      <div className="md:flex justify-between items-center">
        <div className="w-[300px] my-5">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={handleSearch}
              type="search"
              id="default-search"
              name="search"
              className="block w-full p-4 pl-10 text-sm border-2 border-gray-500 rounded"
              placeholder="Search for Name,Email"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2 my-btn px-4 py-2 rounded"
            >
              Search
            </button>
          </div>
        </div>
        <div className="md:flex gap-4 items-center ">
          <div className="form-control w-full max-w-xs mb-4 md:mb-0">
            <select
              onChange={handleFilter}
              name="filter"
              className="select select-bordered"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>Saving Account</option>
              <option>Checking Account</option>
              <option>Business Account</option>
              <option>Student Account</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerarchAndFilter;
