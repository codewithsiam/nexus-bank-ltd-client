import { useScroll } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { baseUrl } from '../../../../../config/server';

const DepositForm = () => {
    const [userData,setUserData] = useState({});

    const handleUserDataOnChange = (e) => {
        const newUserData = { ...userData };
        newUserData[e.target.name] = e.target.value;
        setUserData(newUserData);
      };
      console.log(userData)

      const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(`${baseUrl}/create-deposit-account`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify({
                first_name: userData.first_name,
                last_name: userData.last_name,
                email: userData.email,
                account_type: "Deposit Account",
                date_of_birth: userData.date_of_birth,
                phone: userData.phone,
                selectedAmount:parseInt(userData.amountPerMonth),
                selectedYears:parseInt(userData.year),
                marital_status: userData.marital_status,
                job_title: userData.job_title,
                nidCardNumber: userData.nidCardNumber,
                present_address: userData.present_address,
                permanent_address: userData.permanent_address,
                status: "pending",
              }),
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
      }
    return (
        <div className="bg-white px-8 py-12 rounded-md w-full">
        <h2 className="text-2xl font-semibold">Your Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text text-md font-semibold">
                  First Name *
                </span>
              </label>
              <input
                type="text"
                name="first_name"
                onChange={handleUserDataOnChange}
                required
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
                name="last_name"
                onChange={handleUserDataOnChange}
                required
                placeholder="Enter Your Last Name"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text text-md font-semibold">
                  Email Address *
                </span>
              </label>
              <input
                type="text"
                name="email"
                // value={user?.email}
                onChange={handleUserDataOnChange}
                required
                placeholder="Enter Your Last Name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text text-md font-semibold">
                  Nid Card Number *
                </span>
              </label>
              <input
                type="text"
                name="nidCardNumber"
                // value={user?.email}
                onChange={handleUserDataOnChange}
                required
                placeholder="Enter Nid Card Number"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 ">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-md font-semibold">Amount Per Month</span>
              </label>
              <select
                name="amountPerMonth"
                required
                onChange={handleUserDataOnChange}
                defaultValue={500}
                className="select select-bordered"
              >
                {/* <option disabled selected>
                    Pick one
                  </option> */}
                <option>500</option>
                <option>1000</option>
                <option>2000</option>
                <option>5000</option>
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-md font-semibold">Duration/Year</span>
              </label>
              <select
                name="year"
                required
                onChange={handleUserDataOnChange}
                className="select select-bordered"
                defaultValue={3}
              >
                {/* <option disabled selected>
                    Pick one
                  </option> */}
                <option>3</option>
                <option>5</option>
                <option>8</option>
                <option>10</option>
              </select>
            </div>
            
            
          </div>
          <div className="flex gap-4">
            {/* <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text text-md font-semibold">
                  Nationality *
                </span>
              </label>
              <input
                type="text"
                name="nationality"
                required
                onChange={handleUserDataOnChange}
                placeholder="Enter Your Last Name"
                className="input input-bordered w-full "
              />
            </div> */}
<div className="w-full">
              <label className="label">
                <span className="label-text text-md font-semibold">
                  Date Of Birth
                </span>
              </label>
              <input
                name="date_of_birth"
                required
                onChange={handleUserDataOnChange}
                className="border px-3 py-3 rounded-md w-full"
                type="date"
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
                name="phone"
                required
                onChange={handleUserDataOnChange}
                placeholder="Enter Your Last Name"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* <div className="flex gap-4 mt-4 mb-2">
            <NidCardImage
              nidCardImage={nidCardImage}
              setNidCardImage={setNidCardImage}
            />
            <ProfilePhoto
              profileImage={profileImage}
              setProfileImage={setProfileImage}
            />
          </div> */}
          <div className="flex gap-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-md font-semibold">
                  Marital Status
                </span>
              </label>
              <select
                name="marital_status"
                required
                onChange={handleUserDataOnChange}
                className="select select-bordered"
              >
                {/* <option disabled selected>
                    Pick one
                  </option> */}
                <option>Married</option>
                <option>Unmarried</option>
              </select>
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text text-md font-semibold">
                  Job Title *
                </span>
              </label>
              <input
                type="text"
                name="job_title"
                required
                onChange={handleUserDataOnChange}
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
                name="present_address"
                required
                onChange={handleUserDataOnChange}
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
                name="permanent_address"
                required
                onChange={handleUserDataOnChange}
              ></textarea>
            </div>
          </div>
          <div className="flex gap-2 items-center my-4">
            <input
              name="condition"
              onChange={handleUserDataOnChange}
              type="checkbox"
            />
            <p>accept our terms and conditions</p>
          </div>
          <div className="flex justify-end">
            <button
              className="my-btn px-12  py-3 text-white font-semibold rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {/* {isOpen && (
          <OtpModal
            setIsOpen={setIsOpen}
            handleOpenAccount={handleOpenAccount}
            otp={otp}
            setOtp={setOtp}
            error={error}
            email={userData?.email}
          />
        )} */}
      </div>
    );
};

export default DepositForm;