import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";


const SearchFilter = ({handleOpen}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <form className="w-[20%] mt-5">
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
              className="block w-full p-4 pl-10 text-sm border-2 border-gray-500 rounded"
              placeholder="Search for Id,Name"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2 nav-btn px-4 py-2 rounded"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex gap-4 items-center">
          <div className="form-control w-full max-w-xs">
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          <button onClick={handleOpen} className="nav-btn px-6 py-3 rounded text-white font-semibold w-full">
            {" "}
            <AddOutlinedIcon /> Add Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
