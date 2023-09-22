import React from "react";
import { FaPlus } from "react-icons/fa";
import { compressAndConvertToBase64 } from "../../../../../config/base64";

const SharedProfileImage = ({profileImage,setProfileImage}) => {
  const handlePersonPhotoChange = async (e) => {
    const personPhoto = e.target.files[0];
    const compressBase64 = await compressAndConvertToBase64(
      personPhoto,
      300,
      200,
      0.8
    );
    setProfileImage(compressBase64);
  };
  return (
    <div className="w-full">
      <p className="font-semibold">Your Photo*</p>
      <div>
        {profileImage && (
          <img
            className="w-full h-56 image-full my-2 rounded border border-gray-400"
            src={profileImage}
            alt=""
          />
        )}
      </div>
      <label
        htmlFor="your-photo"
        className="flex gap-2 items-center py-1 ps-2 pr-4 bg-slate-200 rounded-full my-3 cursor-pointer"
      >
        <FaPlus className="text-blue-500"></FaPlus>
        Upload Your Photo
      </label>
      <input
        onChange={handlePersonPhotoChange}
        required
        type="file"
        id="your-photo"
        className="hidden"
      />
    </div>
  );
};

export default SharedProfileImage;
