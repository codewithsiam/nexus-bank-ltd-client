import React from 'react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { compressAndConvertToBase64 } from '../../../../../config/base64';
import { set } from 'react-hook-form';
import Swal from 'sweetalert2';
import { baseUrl } from '../../../../../config/server';

const CurrentForm = () => {
    const [userData, setUserData] = useState({});
    const [nidCardImage,setNidCardImage] = useState('');
    const [personPhoto,setPersonPhoto] = useState("");
    console.log(nidCardImage)
  
    // handle user data change
    const handleUserDataOnChange = (e) => {
      const newUserData = { ...userData };
      newUserData[e.target.name] = e.target.value;
      setUserData(newUserData);
    };

    // handle nid card image
    const handleNidCardImageChange = async (e)=>{
        const nidImage = e.target.files[0];
        const compressBase64 = await compressAndConvertToBase64(nidImage,300,200,0.8);
        setNidCardImage(compressBase64)
    }
    const handlePersonPhotoChange = async(e)=>{
        const personPhoto = e.target.files[0];
        const compressBase64 = await compressAndConvertToBase64(personPhoto,300,200,0.8);
        setPersonPhoto(compressBase64)
    }

    // handle submit 
    const handleOnSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      fetch(`${baseUrl}/add-account`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          first_name:userData.first_name,
          last_name:userData.last_name,
          email:userData.email,
          nid_card_number:userData.nidCardNumber,
          account_type:"Current Account",
          gender:userData.gender,
          date_of_birth:userData.date_of_birth,
          phone:userData.phone,
          nationality:userData.nationality,
          marital_status:userData.marital_status,
          job_title:userData.job_title,
          nid_image:nidCardImage,
          profile_image :personPhoto,
          present_address:userData.present_address,
          permanent_address:userData.permanent_address,
          status:"pending"
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if(data.acknowledged === true){
            Swal.fire({
              position: 'top-middle',
              icon: 'success',
              title: 'Your Account Successfully Created',
              showConfirmButton: false,
              timer: 1500
            })
            // form.reset();
          }
        })
        .catch((error) => console.log(error));
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
          <div className='flex gap-4 mt-4 mb-2'>
                <div className='w-full'>
                    <p className='font-semibold'>Nid Card Image*</p>
                    <label htmlFor="nid-card-image" className='flex gap-2 items-center py-1 ps-2 pr-4 bg-slate-200 rounded-full my-3 cursor-pointer'>
                        <FaPlus className='text-blue-500'></FaPlus>
                        Upload Your Nid Card
                    </label>
                    <input onChange={handleNidCardImageChange} id='nid-card-image' className='hidden' type="file" />
                </div>
                <div className='w-full'>
                <p className='font-semibold'>Your Photo*</p>
                    <label htmlFor="your-photo" className='flex gap-2 items-center py-1 ps-2 pr-4 bg-slate-200 rounded-full my-3 cursor-pointer'>
                        <FaPlus className='text-blue-500'></FaPlus>
                        Upload Your Photo
                    </label>
                    <input onChange={handlePersonPhotoChange} type="file" id='your-photo' className='hidden' />
                </div>
          </div>
          <div className="flex gap-4">
          <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-md font-semibold">Marital Status</span>
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
      </div>
    );
};

export default CurrentForm;