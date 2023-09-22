import React from "react";
import { FaPlus } from "react-icons/fa";
import { compressAndConvertToBase64 } from "../../../../../config/base64";

const BirthImage = ({ birthImage, setBirthImage }) => {
  // console.log(birthImage);
  const handleBirthImage = async (e) => {
    const image = e.target.files[0];
    const compressBase64 = await compressAndConvertToBase64(
      image,
      300,
      200,
      0.8
    );
    setBirthImage(compressBase64);
  };

  return (
    <div className="w-full">
      <p className="font-semibold">Birth Certificate *</p>
      <div>
        {birthImage && (
          <img
            className="w-full h-56 image-full my-2 rounded"
            src={birthImage}
            alt=""
          />
        )}
      </div>
      <label
        htmlFor="birth-image"
        className="flex gap-2 items-center py-1 ps-2 pr-4 bg-slate-200 rounded-full my-3 cursor-pointer"
      >
        <FaPlus className="text-blue-500"></FaPlus>
        Upload Your Birth Certificate
      </label>
      <input
        id="birth-image"
        onChange={handleBirthImage}
        accept="image/*"
        className="hidden"
        type="file"
      />
    </div>
  );
};

export default BirthImage;
