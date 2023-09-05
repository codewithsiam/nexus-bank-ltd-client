import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { baseUrl } from "../../../config/server";

const EditProfile = () => {
  const {user}=useContext(AuthContext)
  const [gender, setGender] = useState("Pick One");
  console.log(user)
  // const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const gender = form.gender.value;
    // const birthday = form.birthday.value;
    const nationality = form.nationality.value;
    const number = form.number.value;
    const profession = form.profession.value;
    // const presentAddress = form.presentAddress.value;
    // const permanentAddress = form.permanentAddress.value;
    const description = form.description.value;

    const updatedProfileInfo = {
      gender: gender,
      number: number,
      nationality: nationality,
      profession: profession,
      // birthday: birthday,
      // presentAddress: presentAddress,
      // permanentAddress: permanentAddress,
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
            if (data.matchedCount) {
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
    <div className="md:w-6/12 w-10/12 mx-auto my-16">
      <h1 className="mb-12 text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl ">
        Update your Profile page {" "}
      </h1>
      <form onSubmit={handleOnSubmit}>
        {/* email */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            required
            defaultValue={user?.email}
            type="text"
            name="userEmail"
            id="userEmail"
            className="block pt-5 pb-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            disabled
          />
          <label
            htmlFor="userEmail"
            className="peer-focus:font-medium peer-focus:text-3xl absolute text-xl font-bold mb-2 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        {/* Profile name */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            required
            defaultValue={user?.displayName}
            type="text"
            name="profileName"
            id="profileName"
            className="block pt-5 pb-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            disabled
          />
          <label
            htmlFor="profileName"
            className="peer-focus:font-medium peer-focus:text-3xl absolute text-xl font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Profile Name
          </label>
        </div>
        {/* Nationality name */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="nationality"
            id="nationality"
            className="block pt-5 pb-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="nationality"
            className="peer-focus:text-lg peer-focus:font-bold font-bold absolute text-md peer-focus:text-blue-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nationality
          </label>
        </div>
        {/* Birthday */}
        {/* <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="birthday"
            id="birthday"
            className="block pt-5 pb-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="birthday"
            className="peer-focus:text-lg peer-focus:font-bold font-bold peer-focus:text-blue-800 text-md absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Birthday
          </label>
        </div> */}
        {/* Gender */}
        <div className="my-3 form-control w-full text-black max-w-xs">
          <label className="label">
            <span className="text-black font-bold text-md">Gender</span>
          </label>
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

        <div className="grid md:grid-cols-2 md:gap-6">
          {/* Profession */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="profession"
              id="profession"
              className="block pt-5 pb-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="profession"
              className="peer-focus:text-lg peer-focus:font-bold font-bold peer-focus:text-blue-800 text-md absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Profession
            </label>
          </div>
          {/* number */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="number"
              id="number"
              className="block pt-5 pb-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="number"
              className="peer-focus:text-lg peer-focus:font-bold font-bold peer-focus:text-blue-800 text-md absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>
        </div>
        {/* About Me */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="textarea"
            name="description"
            id="description"
            className="block pt-5 pb-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="description"
            className="peer-focus:text-lg peer-focus:font-bold font-bold peer-focus:text-blue-800 text-md absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            About Yourself
          </label>
        </div>
        <button
          type="submit"
          className="text-white my-btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
