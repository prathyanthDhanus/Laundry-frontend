import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import swal from "sweetalert";
import axios from "../api/Axios"; // Import axios for HTTP requests
import { useRef } from "react";

export default function OtpModal({ open, onClose, children }) {
  const [otp, setOtp] = useState(""); // State to store the OTP digits
  const [showImage, setShowImage] = useState(false);
  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);

  const handleOtpChange = (event, nextRef) => {
    const newOtp = event.target.value;
    setOtp((prevOtp) => {
      if (newOtp === "") {
        setOtp(""); // Reset otp on empty input
      }
      const updatedOtp = prevOtp + newOtp;
      return updatedOtp.length > 4 ? updatedOtp.slice(0, 4) : updatedOtp;
    }); 
    

    if (event.target.value && nextRef.current) {
      nextRef.current.focus();
      setShowImage(event.target.value !== "");
    }
  };

  useEffect(() => {
    if (otp.length === 4) {
      handleOtpSubmit();
    }
  }, [otp]);

  const handleOtpSubmit = async () => {
    try {
      console.log(otp);
      const response = await axios.post("/api/verify/otp", otp);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      swal("Error!", "Failed to verify OTP", "error");
    }
  };

  return (
    // Backdrop
    <div
      onClick={onClose}
      className={`
                fixed inset-0 flex justify-center items-center transition-colors
                ${open ? "visible bg-black/20" : "invisible"}
            `}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
                    bg-white rounded-xl shadow p-6 transition-all
                    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <AiOutlineClose />
        </button>
        {children}

        {/* OTP Input Fields */}
        <div className="text-center w-56 ">
        {showImage && ( // Conditionally render image based on showImage state
            <img
              src="https://thumbs.dreamstime.com/b/monkey-closing-his-eyes-clipart-picture-cartoon-character-74478155.jpg"
              alt="monkey"
            />
          )}
        
       
          <div className="flex justify-center ">
            <form className="space-x-2">
              {" "}
              {/* Removed onSubmit handler as it's not needed */}
              <input
                autoComplete="off"
                type="text"
                inputMode="numeric" // Enable numeric keyboard on mobile
                maxLength={1} // Limit input to one character
                // name="otp1"
                onChange={(e) => handleOtpChange(e, otp1Ref)}
                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                autoComplete="off"
                type="text"
                inputMode="numeric"
                maxLength={1}
                ref={otp1Ref}
                // name="otp2"
                onChange={(e) => handleOtpChange(e, otp2Ref)}
                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                autoComplete="off"
                type="text"
                inputMode="numeric"
                maxLength={1}
                ref={otp2Ref}
                // name="otp3"
                onChange={(e) => handleOtpChange(e, otp3Ref)}
                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                autoComplete="off"
                type="text"
                inputMode="numeric"
                maxLength={1}
                ref={otp3Ref}
                // name="otp4"
                onChange={(e) => handleOtpChange(e, null)}
                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              className="btn btn-light w-full bg-red-500 text-white rounded-xl"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
