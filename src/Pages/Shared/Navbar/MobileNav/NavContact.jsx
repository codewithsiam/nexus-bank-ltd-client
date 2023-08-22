import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { MdAddIcCall, MdEmail } from "react-icons/md";

const NavContact = () => {
  return (
    <div className="mt-4 px-2">
      <h4 className="text-xl font-semibold">Contact</h4>
      <div className="space-y-2 mt-3">
        <div className="flex gap-3 items-center">
          <FaMapMarkerAlt />
          <p>Dhaka, Bangladesh</p>
        </div>
        <div className="flex gap-3">
          <MdEmail />
          <p>Siam@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <MdAddIcCall />
          <p>44545415121</p>
        </div>
        <div>
          <div className="flex gap-4">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavContact;
