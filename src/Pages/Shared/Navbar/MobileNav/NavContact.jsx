import React, { useContext } from "react";
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const NavContact = () => {
  const { user, isAdmin, logout } = useContext(AuthContext);

   // logout
   const handleLogout = () => {
    logout(user);
  };

  return (
    <div className="mt-4 px-2">
      <div className=" lg:w-[400px] xl:w-[500px] 2xl:w-[600px]">
        {user ? (
          !isAdmin ? (
            <button
              onClick={handleLogout}
              className="px-8 py-3 text-white font-semibold rounded-full flex gap-2 items-center bg-red-500"
            >logout</button>
          ) : (
            <Link to="/login">
              <button className="px-8 py-3 text-white font-semibold rounded-full flex gap-2 items-center my-btn">
                Login
                <FaArrowRight />
              </button>
            </Link>
          )
        ) : (
          <>
            <Link to="/login">
              <button className="px-8 py-3 text-white font-semibold rounded-full flex gap-2 items-center my-btn">
                Login
                <FaArrowRight />{" "}
              </button>
            </Link>
          </>
        )}
      </div>
      <h4 className="text-xl font-semibold mt-5">Contact</h4>
      <div className="space-y-2 mt-3">
        <div className="flex gap-3 items-center">
          <FaMapMarkerAlt />
          <p>Habiganj Sadar, Sylhet Bangladesh</p>
        </div>
        <div className="flex gap-3">
          <MdEmail />
          <p>nexusbltd@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <MdAddIcCall />
          <p>8809068261960</p>
        </div>
      </div>
    </div>
  );
};

export default NavContact;
