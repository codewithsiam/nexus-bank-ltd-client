import {FaPencilAlt} from "react-icons/fa";
import * as React from "react";
import AboutTab from "./AboutTab";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const MyProfile = () => {
    const {user}=useContext(AuthContext)
    // console.log(user)
  
  return(
    <div className=" pt-10 bg-gray-100">
      <div classNames="relative w-full text-white">
        <img src="https://i.ibb.co/3rg7VGN/profile-banner.jpg" classNames="w-full h-[230px]" alt="Louvre" />
        <div classNames="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-r from-[rgb(1,87,155)] via-blue-600 to-blue-300 opacity-60"></div>
        <div className="pl-5 md:pl-10 lg:pl-20 absolute top-12">
          <h1 className="text-4xl mb-3">Hey  
            <span className="ml-3">{user?.last_name ?  user.last_name : " User"}</span>
          </h1>
          <p>This is your profile page. You can see the all history and you can update your profile.</p>
        </div>
      </div>
      <div className="mb-5 h-[230px] md:h-[90px] bg-white border-b-2 ">
        <div className="w-full max-w-screen-xl mx-auto md:flex gap-20 items-center justify-center xl:justify-evenly">
          <div className="flex justify-center">
            <div className="relative w-[153px] h-[75px]">
              <img
                className="absolute w-[150px] h-[150px] -top-[75px] md:-top-[80px] left-0 border-gray-300 border-[5px] rounded-full"
                src={user.profile_image ? user.profile_image : "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1694713776~exp=1694714376~hmac=e279aefd26ac30b2c7f21af4a1dfac90bb75b0e82176b3ebbf8fbb05ab47c3bb"} alt="user"
              />
            </div>
          </div>
          <div className="md:flex gap-8 justify-around text-center">
            <div className="mt-3">
              <h4 className="text-xl md:text-2xl font-semibold">{user?user.first_name+ ' '+user.last_name:"User Name"}</h4>
              <h3 className="text-md md:text-lg text-gray-500">{user?user.profession:"User Profession"}</h3>
            </div>
            <div className="inline-block overflow-hidden mt-4">
              <Link
              to={`/dashboard/edit-profile`}
              className="flex gap-1 items-center border-2 border-white bg-primary rounded text-white cursor-pointer px-3 py-2"
              >
                <FaPencilAlt className="mr-1"></FaPencilAlt> Edit profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {user ? 
          <AboutTab user={user} /> 
          : <h1 className="mt-12 text-center text-primary font-bold text-2xl">Please Login first</h1> 
        }
      </div>
    </div>
  )
};

export default MyProfile;
