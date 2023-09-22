import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../providers/AuthProvider";
import { baseUrl } from "../../../../config/server";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";

const imageUploadToken = 'c3182784e4720bdedd414fbd09afa2f5'

const EditProfile = () => {
  const [gender, setGender] = useState("Pick One");
  const {user}=useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(user)
  
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`

  let imageUrl;
  const uploadImage = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(imageHostingUrl, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        imageUrl = data.data.url;
        return imageUrl; // Return the imageUrl
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      throw error;
    }
  };
  
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const last_name = form.nickName.value;
    const first_name = form.profileName.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const birthday = form.birthday.value;
    const nationality = form.nationality.value;
    const number = form.number.value;
    const profession = form.profession.value;
    const present_address = form.presentAddress.value;
    const permanent_address = form.permanentAddress.value;
    const description = form.description.value;

    const updatedProfileInfo = {
      gender: gender,
      last_name: last_name,
      email: email,
      number: number,
      nationality: nationality,
      profession: profession,
      birthday: birthday,
      present_address: present_address,
      permanent_address: permanent_address,
      description: description,
      first_name: first_name,
      profile_image: imageUrl
    };
    // console.log(updatedProfileInfo);
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
        fetch(`${baseUrl}/update-Profile/${user?._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProfileInfo),
        })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (data.message === 'Profile updated successfully') {
            Swal.fire(
              'Good job!',
              'Your Profile updated successfully',
              'success'
            )
            navigate("/dashboard/my-profile");
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
      <h1 className="text-primary mb-12 text-center text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl ">
        Update your Profile page {" "}
      </h1>
      <form onSubmit={handleOnSubmit}>
        <div className="lg:flex gap-10  ">
          <div classNames=" my-5 w-full md:w-1/3 bg-white py-5 overflow-hidden h-[320px] ">
            <div className="flex justify-center">
              <img
              className="w-[100px] md:w-[200px] rounded-full"
              src="https://i.ibb.co/7kT8phM/profile5.png"
              alt="profile"
              ></img>
            </div>
            <div>
              <label htmlFor='image' className='text-center block my-2 font-bold'>
                Upload Photo
              </label>
              <div className="flex justify-center">
              <input
                type='file'
                id='image'
                name='image'
                accept='image/*'
                onChange={(e) => uploadImage(e)}
                classNames="input input-bordered"
              />
              </div>
            </div>
          </div>
          <div className="mt-5 w-full lg:w-2/3">
            <Box>
              <div className="grid md:grid-cols-2 gap-5 mb-4">
                {/* Profile Name */}
                <div>
                  <label htmlFor="profileName" className="block font-bold">First Name</label>
                  <TextField required defaultValue={user?.first_name}
                  className="w-full" id="outlined-basic" name="profileName" variant="standard" />
                </div>
                {/* Nick Name */}
                <div>
                  <label htmlFor="nickName" className="block font-bold">Last Name</label>
                  <TextField defaultValue={user?.last_name}
                  className="w-full" id="outlined-basic" name="nickName" variant="standard" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-4">
                {/* email */}
                <div className="">
                  <label htmlFor="email" className="block font-bold">User's Email</label>
                  <TextField defaultValue={user?.email}
                  className="w-full" id="outlined-basic" name="email" variant="standard" />
                </div>
                {/* number */}
                <div>
                  <label htmlFor="number" className="block font-bold">Number</label>
                  <TextField type="number" defaultValue={user?.number}
                  className="w-full" id="outlined-basic" name="number" variant="standard" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-4">
                {/* Profession */}
                <div>
                  <label htmlFor="profession" className="block font-bold">Profession</label>
                  <TextField defaultValue={user?.profession}
                  className="w-full" id="outlined-basic" name="profession" variant="standard" />
                </div>
                {/* Birthday */}
                <div className="">
                  <label htmlFor="Birthday" className="block font-bold">Birthday</label>
                  <input name="birthday"  defaultValue={user?.birthday}
                  className="border px-3 py-3 rounded-md w-full" type="date" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-4">
                {/* Nationality */}
                <div>
                  <label htmlFor="nationality" className="block font-bold">Nationality</label>
                  <TextField defaultValue={user?.nationality} id="outlined-basic"
                  className="w-full" name="nationality" variant="standard" />
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
                  <TextField className="w-full" defaultValue={user?.present_address} 
                  id="outlined-basic" name="presentAddress" variant="standard" />
                </div>
                {/* Permanent Address */}
                <div>
                  <label htmlFor="permanent_address" className="block font-bold">Permanent Address</label>
                  <TextField className="w-full" defaultValue={user?.permanent_address} 
                  id="outlined-basic" name="permanentAddress" variant="standard" />
                </div>
              </div>
              {/* About Me */}
              <div className="">
                <label htmlFor="description" className="block font-bold">About Yourself</label>
                <input type="textarea" defaultValue={user?.description} 
                name="description" className="border px-3 py-3 rounded-md w-full"/>
              </div>
              <button type="submit"className="text-white my-btn px-5 py-2.5 rounded mt-4">Submit</button>
            </Box>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

// https://i.ibb.co/178bqz2/hasan-emplyee.jpg
// https://i.ibb.co/ZGYQLQy/mahdee-2.jpg
// https://i.ibb.co/y611Nsj/mahdee.jpg
// https://i.ibb.co/rf5dKHM/manik-employee.jpg
// https://i.ibb.co/zGfGJQ8/shuvo-employee.jpg
// https://i.ibb.co/vjtZnj3/siam-employee.png
// https://i.ibb.co/Y3xWfq5/Tonmoy.jpg