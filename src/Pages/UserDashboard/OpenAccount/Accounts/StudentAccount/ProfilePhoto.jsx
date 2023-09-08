import React from "react";
import { FaPlus } from "react-icons/fa";
import { compressAndConvertToBase64 } from "../../../../../config/base64";
import { useState } from "react";
import { useRef } from "react";
import { Cropper } from "react-cropper";

const ProfilePhoto = ({profileImage,setProfileImage}) => {
  //   const [personPhoto, setPersonPhoto] = useState("");
  //   const handlePersonPhotoChange = async (e) => {
  //     const personPhoto = e.target.files[0];
  //     const compressBase64 = await compressAndConvertToBase64(
  //       personPhoto,
  //       300,
  //       200,
  //       0.8
  //     );
  //     setPersonPhoto(compressBase64);
  //   };

  const [selectedImage, setSelectedImage] = useState(null);
  const [cropAspectRatio, setCropAspectRatio] = useState(3);
  const [croppedImage, setCroppedImage] = useState(null);
  
  const cropperRef2 = useRef(null);
//   console.log(profileImage);

  // handle file changes ----------------------
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  // handle crop--------------
  const handleCrop = () => {
    if (typeof window === "undefined") {
      // Server-side rendering, do nothing
      return null;
    }
    if (
      !cropperRef2.current ||
      typeof cropperRef2.current.cropper.getCroppedCanvas() === "undefined"
    ) {
      return;
    }

    const croppedCanvas = cropperRef2.current.cropper.getCroppedCanvas({
      minWidth: 200,
      minHeight: 200,
      maxWidth: 800,
      maxHeight: 800,
      fillColor: "#fff",
    });

    croppedCanvas.toBlob(
      (blob) => {
        if (blob) {
          // Convert blob to base64
          const reader = new FileReader();
          reader.onload = () => {
            const base64String = reader.result;
            setCroppedImage(base64String);
            setProfileImage(base64String);
          };
          reader.readAsDataURL(blob);
        }
      },
      "image/jpeg", // Use 'image/webp' for WebP format
      0.8 // Adjust the compression quality as needed
    );
  };

  const handleAspectRatioChange = (e) => {
    setCropAspectRatio(parseFloat(e.target.value));
  };

  ////
  const handleCropBoxDataChange = (e) => {
    const { width, height } = e.detail;
    console.log(width, height);
    setCropAspectRatio(width / height);
  };

  // cropper option
  const cropperOptions = {
    aspectRatio: cropAspectRatio,
    guides: true,
    dragMode: "crop",
    cropBoxResizable: true,
    cropBoxMovable: true,
    cropBoxData: { width: "100%", height: "100%" }, // Initial crop area size
    crop: handleCropBoxDataChange, // To update the aspect ratio when crop area is resized
    zoomOnWheel: false, // Disable zoom on wheel
  };

  return (
    <div className="w-full">
      <p className="font-semibold">Your Photo*</p>
     <div>
     {
        profileImage && <img className="w-full h-full image-full my-2 rounded border border-gray-400" src={profileImage} alt="" />
      }
     </div>
      <label
        htmlFor="your-photo"
        className="flex gap-2 items-center py-1 ps-2 pr-4 bg-slate-200 rounded-full my-3 cursor-pointer"
      >
        <FaPlus className="text-blue-500"></FaPlus>
        Upload Your Photo
      </label>
      <input onChange={handleFileChange} required type="file" id="your-photo" className="hidden" />
      {selectedImage && !croppedImage && (
        <div className="mt-2 absolute w-[600px] ">
          <Cropper
            ref={cropperRef2}
            src={selectedImage}
            style={{ height: 300, width: 360 }}
            {...cropperOptions}
          />

          <div className="mt-2">
            <button
              onClick={() => {
                setCroppedImage(null);
                setProfileImage(null);
                setSelectedImage(null);
              }}
              className="px-4 py-2 bg-gray-400 mr-2 rounded"
            >
              cancel
            </button>
            <button
              onClick={handleCrop}
              className="bg-[#EE490C] px-5 py-2 rounded text-white"
            >
              Add Media
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
