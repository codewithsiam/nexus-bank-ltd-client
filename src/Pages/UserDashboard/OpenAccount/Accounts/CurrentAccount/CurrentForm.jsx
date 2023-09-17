import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { compressAndConvertToBase64 } from "../../../../../config/base64";
import { set } from "react-hook-form";
import Swal from "sweetalert2";
import { baseUrl } from "../../../../../config/server";
import NidCardImage from "./NidCardImage";
import ProfilePhoto from "../StudentAccount/ProfilePhoto";
import OtpModal from "../OtpModal/OtpModal";
import { ElectricScooterSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CurrentForm = () => {
  const [userData, setUserData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [nidCardImage, setNidCardImage] = useState(null);
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const otpDigit = otp.reduce((acc, curr) => acc + curr);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // console.log(error)

  // handle user data change
  const handleUserDataOnChange = (e) => {
    const newUserData = { ...userData };
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  };
  console.log(userData);

  // handle submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch(
      `${baseUrl}/send-otp?email=${userData.email}&userName=${userData.first_name}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((err) => console.log(err));
    setIsOpen(true);
    // const form = e.target;
  };

  const handleOpenAccount = () => {
    fetch(`${baseUrl}/verify-otp?email=${userData.email}&otp=${otpDigit}`, {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.verified) {
          fetch(`${baseUrl}/add-account`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              first_name: userData.first_name,
              last_name: userData.last_name,
              email: userData.email,
              account_type: "Current Account",
              gender: userData.gender,
              date_of_birth: userData.date_of_birth,
              phone: userData.phone,
              nationality: userData.nationality,
              marital_status: userData.marital_status,
              job_title: userData.job_title,
              nid_card_number: userData.nidCardNumber,
              profile_image: profileImage,
              present_address: userData.present_address,
              profileImage: profileImage,
              nidCardImage: nidCardImage,
              permanent_address: userData.permanent_address,
              status: "pending",
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged === true) {
                Swal.fire(
                  'Successful',
                  'Your application for opening account is successful.Please wait for response',
                  'success'
                )

                navigate("/")
                
                
                // form.reset();
              }
            })
            .catch((error) => {
              Swal.fire(
                'Account Request',
                'Something wrong.Please try again letter',
                'error'
              )

              navigate("/")
            });
        } else {
          setError(data.message);
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="bg-white px-8 py-12 rounded-md w-full">
      <h2 className="text-2xl font-semibold">Your Personal Information</h2>
      <form onSubmit={handleOnSubmit}>
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
              <span className="label-text text-md font-semibold">Gender</span>
            </label>
            <select
              name="gender"
              required
              onChange={handleUserDataOnChange}
              className="select select-bordered"
            >
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
            <input
              name="date_of_birth"
              required
              onChange={handleUserDataOnChange}
              className="border px-3 py-3 rounded-md w-full"
              type="date"
            />
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
              name="nationality"
              required
              onChange={handleUserDataOnChange}
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
              name="phone"
              required
              onChange={handleUserDataOnChange}
              placeholder="Enter Your Last Name"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4 mb-2">
          <NidCardImage
            nidCardImage={nidCardImage}
            setNidCardImage={setNidCardImage}
          />
          <ProfilePhoto
            profileImage={profileImage}
            setProfileImage={setProfileImage}
          />
        </div>
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
        <div className="flex justify-end">
          <button
            className="my-btn px-12  py-3 text-white font-semibold rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {isOpen && (
        <OtpModal
          setIsOpen={setIsOpen}
          handleOpenAccount={handleOpenAccount}
          otp={otp}
          setOtp={setOtp}
          error={error}
          email={userData?.email}
        />
      )}
    </div>
  );
};

export default CurrentForm;
