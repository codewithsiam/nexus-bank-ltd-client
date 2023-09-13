import React from "react";
import { useState } from "react";
import { compressAndConvertToBase64 } from "../../../../../config/base64";
import { FaPlus } from "react-icons/fa";
import BirthImage from "./BirthImage";
import ProfilePhoto from "./ProfilePhoto";
import { baseUrl } from "../../../../../config/server";
import OtpModal from "../OtpModal/OtpModal";
import Swal from "sweetalert2";

const StudentForm = () => {
  const [userData, setUserData] = useState({});
  const [nidCardImage, setNidCardImage] = useState("");
  const [profileImage,setProfileImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [birthImage,setBirthImage] = useState(null);
  const [error,setError] = useState("");
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const otpDigit = otp.reduce((acc, curr) => acc + curr);
  // console.log(nidCardImage);

  // handle user data change
  const handleUserDataOnChange = (e) => {
    const newUserData = { ...userData };
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  };

  //
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
        console.log(data)
        if(data.verified){
          fetch(`${baseUrl}/add-account`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              first_name: userData.first_name,
              last_name: userData.last_name,
              email: userData.email,
              account_type: "Student Account",
              gender: userData.gender,
              date_of_birth: userData.date_of_birth,
              phone: userData.phone,
              nationality: userData.nationality,
              marital_status: userData.marital_status,
              job_title: userData.job_title,
              birth_certificate_image: birthImage,
              profile_image: profileImage,
              present_address: userData.present_address,
              profileImage:profileImage,
              nidCardImage:nidCardImage,
              permanent_address: userData.permanent_address,
              status: "pending",
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged === true) {
                Swal.fire({
                  position: "top-middle",
                  icon: "success",
                  title: "Your Account Successfully Created",
                  showConfirmButton: false,
                  timer: 1500,
                });
                // form.reset();
              }
            })
            .catch((error) => console.log(error));
        }
        else{
          setError(data.message)
        }
      })
      .then((err) => console.log(err));
  };


  // handle nid card image
  // const handleNidCardImageChange = async (e)=>{
  //     const nidImage = e.target.files[0];
  //     const compressBase64 = await compressAndConvertToBase64(nidImage,300,200,0.8);
  //     setNidCardImage(compressBase64)
  // }
  // const handlePersonPhotoChange = async(e)=>{
  //     const personPhoto = e.target.files[0];
  //     const compressBase64 = await compressAndConvertToBase64(300,200,0.8);
  //     setPersonPhoto(compressBase64)
  // }
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
                Birth Certificate Number *
              </span>
            </label>
            <input
              type="text"
              name="nidCardNumber"
              // value={user?.email}
              onChange={handleUserDataOnChange}
              required
              placeholder="Enter Birth Certificate Number"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text text-md font-semibold">
                Father's Name *
              </span>
            </label>
            <input
              type="text"
              name="fatherName"
              required
              onChange={handleUserDataOnChange}
              placeholder="Enter Your Last Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text text-md font-semibold">
                Mother's Name *
              </span>
            </label>
            <input
              type="text"
              name="motherName"
              required
              onChange={handleUserDataOnChange}
              placeholder="Enter Your Last"
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
          <BirthImage birthImage={birthImage} setBirthImage={setBirthImage} />
          <ProfilePhoto profileImage={profileImage} setProfileImage={setProfileImage} />
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
      {isOpen && (
        <OtpModal
          setIsOpen={setIsOpen}
          handleOpenAccount={handleOpenAccount}
          otp={otp}
          setOtp={setOtp}
          error={error}
        />
      )}
    </div>
  );
};

export default StudentForm;
