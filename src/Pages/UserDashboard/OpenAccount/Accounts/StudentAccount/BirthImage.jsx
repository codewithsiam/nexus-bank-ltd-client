import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Cropper from "react-cropper";

const BirthImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cropAspectRatio, setCropAspectRatio] = useState(3);
    const [croppedImage, setCroppedImage] = useState(null);
  console.log(selectedImage);

  // handle file changes ----------------------
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  ////
  const handleCropBoxDataChange = (e) => {
    const { width, height } = e.detail;
    setCropAspectRatio(width / height);
  };

  // cropper option
  const cropperOptions = {
    aspectRatio: cropAspectRatio,
    guides: true,
    dragMode: "crop",
    cropBoxResizable: true,
    cropBoxMovable: true,
    cropBoxData: { width: 200, height: 200 }, // Initial crop area size
    crop: handleCropBoxDataChange, // To update the aspect ratio when crop area is resized
    zoomOnWheel: false, // Disable zoom on wheel
  };

  return (

      <div className="w-full">
        <p className="font-semibold">Birth Certificate *</p>
        <label
          htmlFor="birth-image"
          className="flex gap-2 items-center py-1 ps-2 pr-4 bg-slate-200 rounded-full my-3 cursor-pointer"
        >
          <FaPlus className="text-blue-500"></FaPlus>
          Upload Your Birth Certificate
        </label>
        <input
          id="birth-image"
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          type="file"
        />
          {selectedImage && !croppedImage && (
        <div className="mt-2  absolute z-30 ">
          <Cropper
            ref={cropperRef2}
            src={selectedImage}
            style={{ height: "100%", width: "100%" }}
            {...cropperOptions}
          />

          <div className='mt-2'>
            <button onClick={() => {
              setCroppedImage(null);
              setLogoImage(null); setSelectedImage(null)
            }} className='px-4 py-2 bg-gray-400 mr-2 rounded'>cancel</button>
            <button onClick={handleCrop} className='bg-[#EE490C] px-5 py-2 rounded text-white'>Add Media</button>
          </div>
        </div>
      )}
      </div>
    

  );
};

export default BirthImage;
