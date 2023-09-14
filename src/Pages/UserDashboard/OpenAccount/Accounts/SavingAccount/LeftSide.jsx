import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
const LeftSide = ({ accountName, accountImage, description }) => {
  return (
    <div className="hidden md:flex flex-col items-center justify-between h-full">
      <div>
        <Link to="/dashboard/my-profile">
          <button className="flex items-center gap-1 font-semibold">
            <KeyboardBackspaceIcon /> Back To Profile
          </button>
        </Link>

        <h2 className="text-2xl font-semibold my-4">Open Your {accountName}</h2>
        <p className="mb-6">{description}</p>
      </div>
      <img className="rounded-md " src={accountImage} alt="" />
      <div className="bg-stone-300 p-4 rounded-lg">
        <h4 className="font-semibold text-primary">Policy Questions?</h4>
        <p className="my-4">
          At Nexus Bank Ltd we're here to assist you. Whether you have questions
          about our services, need support with your accounts, or want to
          provide feedback, our dedicated team is ready to help.
        </p>
        <Link to="/contact">
          <button className="font-semibold">
            Contact Us <EastIcon />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LeftSide;
