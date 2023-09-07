import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../providers/AuthProvider";
import { baseUrl } from "../../../../config/server";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, FormControl, FormHelperText, Input, InputAdornment, InputLabel, TextField } from "@mui/material";

const imageUploadToken = 'c3182784e4720bdedd414fbd09afa2f5'

const EditProfile = () => {
  const [gender, setGender] = useState("Pick One");
  const {user}=useContext(AuthContext)
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  console.log(user)
  
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`
  const img_key = "c694c4abb3bcf601b0b79494e815c533";

  const uploadImage = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    // Step 1: Upload the image to ImgBB using the Fetch
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      // .then((response) => {
      //   if (!response.ok) {
      //     throw new Error("Failed to upload image to ImgBB");
      //   }
      //   return response.json();
      // })
      .then((data) => {
        if (data.success) {
          const img = data.data.url;
          const updateImage = {
            img: img,
          };

          // Step 2: Update the user's image using Fetch API
          fetch(`/user/image/${user?.email}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateImage),
          })
            // .then((response) => {
            //   if (!response.ok) {
            //     throw new Error("Failed to update user image");
            //   }
            //   return response.json();
            // })
            .then((responseData) => {
              console.log(responseData);
              if (responseData.matchedCount > 0) {
                refetch();
              }
            })
            .catch((err) => {
              if (err.response.status === 401 || err.response.status === 403) {
                signOut(auth);
                Navigate("/");
                localStorage.removeItem("userToken");
              }
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nickName = form.nickName.value;
    const gender = form.gender.value;
    const birthday = form.birthDate.value;
    const nationality = form.nationality.value;
    const number = form.number.value;
    const profession = form.profession.value;
    const presentAddress = form.presentAddress.value;
    const permanentAddress = form.permanentAddress.value;
    const description = form.description.value;

    const updatedProfileInfo = {
      gender: gender,
      nickname: nickName,
      number: number,
      nationality: nationality,
      profession: profession,
      birthday: birthday,
      presentAddress: presentAddress,
      permanentAddress: permanentAddress,
      description: description,
    };
    console.log(updatedProfileInfo);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${baseUrl}/update-Profile/${user?.email}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProfileInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.matchedCount>0) {
              Swal.fire({
                title: "success",
                text: "Profile Information Updated Successfully",
                showDenyButton: true,
                showCancelButton: true,
                icon: "success",
                confirmButtonText: "Cool",
              });
              // navigate("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="my-16">
      <h1 className="mb-12 text-center text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl ">
        Update your Profile page {" "}
      </h1>
      <div className=" md:flex gap-10  ">
        <div class="mt-5 w-1/3 bg-white py-10 overflow-hidden h-[300px] ">
          <div>
            {user? (
              <div className="flex justify-center">
                <div class="avatar ml-3">
                <div class="w-32 mx-auto text-center border-2 border-gray-300 rounded-full ring ring-offset-base-100 ring-offset-2">
                  <img className="" src={user?.img} />
                </div>
              </div>
              </div>

            ) : (
              <img
                className="w-[200px] rounded-full"
                src="https://i.ibb.co/7kT8phM/profile5.png"
                alt="profile"
              ></img>
            )}
          </div>
          <div className=" ">
            <label htmlFor="img" class="label">
              <span class="label-text mx-auto  font-[500] text-xl">
                <p className="cursor-pointer my-btn px-5 py-3 btn-primary rounded-md mt-5">
                  Upload Photo
                </p>
              </span>
            </label>
            <input
              id="img"
              type="file"
              placeholder="Name"
              hidden
              class="input input-bordered"
              onChange={(e) => uploadImage(e)}
            />
          </div>
        </div>
        <div className="w-2/3">
        <form onSubmit={handleOnSubmit}>
          <Box>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
              {/* Profile Name */}
              <div>
                <label
                    htmlFor="profileName"
                    className="block font-bold">
                    Profile Name
                  </label>
                <TextField 
                defaultValue={user?.displayName}
                className="w-full" id="outlined-basic" variant="standard" />
              </div>
              {/* email */}
              <div className="">
                <label htmlFor="email" className="block font-bold">User's Email</label>
                <TextField 
                defaultValue={user?.email}
                className="w-full" id="outlined-basic" variant="standard" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
              {/* Nick Name */}
              <div>
                <label htmlFor="nickName" className="block font-bold">Nick Name</label>
                <TextField className="w-full" id="outlined-basic" name="nickName" variant="standard" />
              </div>
              {/* number */}
              <div>
                <label htmlFor="number" className="block font-bold">Number</label>
                <TextField className="w-full" id="outlined-basic" name="number" variant="standard" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
              {/* Profession */}
              <div>
                <label htmlFor="profession" className="block font-bold">Profession</label>
                <TextField className="w-full" id="outlined-basic" name="profession" variant="standard" />
              </div>
              {/* Birthday */}
              <div className="">
                <label htmlFor="Birthday" className="block font-bold">Birthday</label>
                <input name="birthDate" className="border px-3 py-3 rounded-md w-full" type="date" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
              {/* Nationality */}
              <div>
                <label htmlFor="nationality" className="block font-bold">Nationality</label>
                <TextField className="w-full" id="outlined-basic" name="nationality" variant="standard" />
              </div>
              {/* Gender */}
              <div className="">
                <label htmlFor="profileName" className="block font-bold">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="select select-bordered"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
              {/* present Address */}
              <div>
                <label htmlFor="present_address" className="block font-bold">Present Address</label>
                <TextField className="w-full" id="outlined-basic" name="presentAddress" variant="standard" />
              </div>
              {/* Permanent Address */}
              <div>
                <label htmlFor="permanent_address" className="block font-bold">Permanent Address</label>
                <TextField className="w-full" id="outlined-basic" name="permanentAddress" variant="standard" />
              </div>
            </div>
            {/* About Me */}
            <div className="">
              <label htmlFor="description" className="block font-bold">About Yourself</label>
              <input type="textarea"  name="description" className="border px-3 py-3 rounded-md w-full"/>
            </div>
            <button type="submit"className="text-white my-btn px-5 py-2.5 rounded mt-4">Submit</button>
          </Box>
        </form>
        </div>
        
      </div>
    </div>
  );
};

export default EditProfile;
