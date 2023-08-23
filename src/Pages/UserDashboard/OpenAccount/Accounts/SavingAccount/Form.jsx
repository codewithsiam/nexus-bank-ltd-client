import React from "react";

const Form = () => {
  return (
    <div className="bg-white px-8 py-12 rounded-md w-full">
      <h2 className="text-2xl font-semibold">Your Personal Information</h2>
      <form>
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text text-md font-semibold">
              First Name *
            </span>
          </label>
          <input
            type="text"
            placeholder="Inter Your First Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mt-2">
          <label className="label">
            <span className="label-text text-md font-semibold">
              Last Name *
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mt-2">
          <label className="label">
            <span className="label-text text-md font-semibold">
              Email Address *
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex items-center gap-4 mt-2 ">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md font-semibold">Gender</span>
            </label>
            <select className="select select-bordered">
              {/* <option disabled selected>
                Pick one
              </option> */}
              <option>Male</option>
              <option>Female</option>
              <option>Costume</option>
            </select>
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text text-md font-semibold">
                Date Of Birth
              </span>
            </label>
            <input className="border px-3 py-3 rounded-md w-full" type="date" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text text-md font-semibold">
                Nationality *
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text text-md font-semibold">
                Phone Number *
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text text-md font-semibold">
                Marital Status *
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text text-md font-semibold">
                Job Title *
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-md font-semibold">
                Present Address
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-20"
              placeholder="Present Address"
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-md font-semibold">
                Permanent Address
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-20"
              placeholder="Permanent Address"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-2 items-center my-4">
          <input type="checkbox" />
          <p>accept our terms and conditions</p>
        </div>
        <div className="flex justify-end">
          <button
            className="nav-btn px-12  py-3 text-white font-semibold rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
