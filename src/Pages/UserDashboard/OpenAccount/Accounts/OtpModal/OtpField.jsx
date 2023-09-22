import React, { useEffect, useRef } from "react";
import { useState } from "react";

let currentOTPIndex = 0;
const OtpField = ({otp,setOtp}) => {
  
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const inputRef = useRef(null);
 

  const handleFieldChange = (e) => {
    const value = e.target.value;
    const newOTP = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) {
      setActiveOTPIndex(currentOTPIndex - 1);
    } else {
      setActiveOTPIndex(currentOTPIndex + 1);
    }

    setOtp(newOTP);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const handleKeyDown = ({ key }, index) => {
    currentOTPIndex = index;
    if (key === "Backspace") {
      setActiveOTPIndex(currentOTPIndex - 1);
    }
  };

  // console.log(otp);
  return (
    <div className="my-4 flex justify-center items-center space-x-2">
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={index === activeOTPIndex ? inputRef : null}
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition spin-button-none"
              onChange={handleFieldChange}
              value={otp[index]}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
            {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OtpField;
