import React from "react";
import { FaPlus } from "react-icons/fa";
import { compressAndConvertToBase64 } from "../../../../../config/base64";

const SharedNidCardImage = ({nidCardImage,setNidCardImage}) => {
     // handle nid card image
     const handleNidCardImageChange = async (e)=>{
        const nidImage = e.target.files[0];
        const compressBase64 = await compressAndConvertToBase64(nidImage,300,200,0.8);
        setNidCardImage(compressBase64)
    }

  return (
    <div className="w-full">
      <p className="font-semibold">Nid Card Image*</p>
      <div>
        {nidCardImage && (
          <img
            className="w-full min-h-42 max-h-56 image-full my-2 rounded border border-gray-400"
            src={nidCardImage}
            alt=""
          />
        )}
      </div>
      <label
        htmlFor="nid-card-image"
        className="flex gap-2 items-center py-1 ps-2 pr-4 bg-slate-200 rounded-full my-3 cursor-pointer"
      >
        <FaPlus className="text-blue-500"></FaPlus>
        Upload Your Nid Card
      </label>
      <input
        onChange={handleNidCardImageChange}
        id="nid-card-image"
        className="hidden"
        required
        type="file"
      />
    </div>
  );
};

export default SharedNidCardImage;
