import React from "react";
import { compressAndConvertToBase64 } from "../../../../../config/base64";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import { Cropper } from "react-cropper";

const NidCardImage = ({nidCardImage,setNidCardImage}) => {
    // const [nidCardImage,setNidCardImage] = useState('');
    //  // handle nid card image
    //  const handleNidCardImageChange = async (e)=>{
    //     const nidImage = e.target.files[0];
    //     const compressBase64 = await compressAndConvertToBase64(nidImage,300,200,0.8);
    //     setNidCardImage(compressBase64)
    // }

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
              setNidCardImage(base64String);
            };
            reader.readAsDataURL(blob);
          }
        },
        "image/jpeg", // Use 'image/webp' for WebP format
        0.8 // Adjust the compression quality as needed
      );
    };
  
    // const handleAspectRatioChange = (e) => {
    //   setCropAspectRatio(parseFloat(e.target.value));
    // };
  
    // ////
    // const handleCropBoxDataChange = (e) => {
    //   const { width, height } = e.detail;
    //   setCropAspectRatio(width / height);
    // };
  
    // cropper option
    const cropperOptions = {
      // aspectRatio: cropAspectRatio,
      // guides: true,
      // dragMode: "crop",
      // cropBoxResizable: true,
      // cropBoxMovable: true,
      // cropBoxData: { width: "100%", height: "100%" }, // Initial crop area size
      // crop: handleCropBoxDataChange, // To update the aspect ratio when crop area is resized
      zoomOnWheel: false, // Disable zoom on wheel
    };




  return (
    <div className="w-full">
      <p className="font-semibold">Nid Card Image*</p>
      <div>
     {
        nidCardImage && <img className="w-full h-[250px] image-full my-2 rounded " src={nidCardImage} alt="" />
      }
     </div>
      <label
        htmlFor="nid-card-image"
        className="flex gap-2 items-center py-1 ps-2 pr-4 bg-slate-200 rounded-full my-3 cursor-pointer"
      >
        <FaPlus className="text-blue-500"></FaPlus>
        Upload Your Nid Card
      </label>
      <input
        onChange={handleFileChange}
        id="nid-card-image"
        className="hidden"
        required
        type="file"
      />
       {selectedImage && !croppedImage && (
        <div className="mt-2 absolute w-[600px] ">
          <Cropper
            ref={cropperRef2}
            src={selectedImage}
            style={{ height: 320, width: 400 }}
            {...cropperOptions}
          />

          <div className="mt-2">
            <button
              onClick={() => {
                setCroppedImage(null);
                setNidCardImage(null);
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

export default NidCardImage;
