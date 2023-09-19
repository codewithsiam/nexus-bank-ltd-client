import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { baseUrl } from "../../../config/server";


const SearchFilter = ({handleOpen,setEmployees}) => {

  // handle search by name 
  const handleSearch = (e)=>{
    const searchItem = e.target.value;
    // console.log(searchItem)
    fetch(`${baseUrl}/employees/${searchItem}`)
    .then(res=>res.json())
    .then(data=>setEmployees(data))
  }

  // filter employee by designation 
  const handleFilter = (e)=>{
    const filterItem = e.target.value;
   fetch(`${baseUrl}/employeess/${filterItem}`)
   .then(res=>res.json())
   .then(data=>setEmployees(data))
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
              type="search"
              id="default-search"
              onChange={handleSearch}
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
        <div className="md:flex gap-4 items-center">
          <div className="form-control w-full max-w-xs mb-4 md:mb-0">
            <select onChange={handleFilter} name="filter" className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>

              <option>All</option>
              <option>Manager</option>
              <option>Loan Officer</option>
              <option>Relationship Manager</option>
              <option>Financial Advisor</option>
              <option>Credit Analyst</option>     
              <option>Risk Manager</option> 
              <option>Helpline Representative</option>
            </select>
          </div>
          <button onClick={handleOpen} className="my-btn px-6 py-3 rounded text-white font-semibold w-full">
            {" "}
            <AddOutlinedIcon /> Add Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
