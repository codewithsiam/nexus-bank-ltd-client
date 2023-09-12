import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
const LeftSide = ({accountName,accountImage,description}) => {
  return (
    <div className="hidden md:flex flex-col items-center justify-between h-full">
      <div>
        <button className="flex items-center gap-1 font-semibold">
          <KeyboardBackspaceIcon /> Back To Profile
        </button>

        <h2 className="text-2xl font-semibold my-4">
          Open Your {accountName}
        </h2>
        <p className="mb-6">
         {description}
        </p>
        <Link className="text-blue-600 underline ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, illum.
        </Link>
      </div>
      <img className="rounded-md "
        src={accountImage}
        alt=""
      />
      <div className="bg-stone-300 p-4 rounded-lg">
        <h4 className="font-semibold text-primary">Policy Questions?</h4>
        <p className="my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nulla
          unde corporis dignissimos, quibusdam eos suscipit. Et unde dolorum
          autem.
        </p>
        <button className="font-semibold">
          Contact Us <EastIcon />{" "}
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
