import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import swal from "sweetalert";
// import axios from "../api/Axios"; // Import axios for HTTP requests
import { useRef } from "react";
import axios from "axios";


export default function OtpModal({ open, onClose, children }) {

  const [otp, setOtp] = useState(""); // State to store the OTP digits
  const [showImage, setShowImage] = useState(false);
  const userId = localStorage.getItem("userId") ;

  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);

  const handleOtpChange = (event, nextRef) => {
   
    const otp1 = otp1Ref.current.value;
    const otp2 = otp2Ref.current.value;
    const otp3 = otp3Ref.current.value;
    const otp4 = otp4Ref.current.value;
    
    // Concatenate the OTP digits using template literals :
    const concatOtp = `${otp1}${otp2}${otp3}${otp4}`;
     setOtp(concatOtp)
    
   
    if (event.target.value && nextRef.current) {
      nextRef.current.focus();              //move cursor to next input field
      setShowImage(event.target.value !== "");
    }

  
  };



//----------------------- verify otp ---------------------

 const handleOtpVerify = async()=>{
   try{
    const response = await axios.post("/api/user/verify-otp",otp)
     if(response.status===200){
      localStorage.setItem("token",response.data.data)
      await swal("Success!", response.data.message, "success");
     }

   }catch(error){
       await swal("Failure",error.response.data.message,"error")
   }
 }



  //-------------- login otp-verification -------------------

  const handleOtpSubmit = async () => {
    const data = {
      userId :userId,
      otp : otp
    }
   
    try {
       
      const response = await axios.post("http://localhost:3000/api/user/login/verify-otp", data);
      if(response.status===200){
       localStorage.removeItem("userId")
       localStorage.setItem("token",response.data.data)
      await swal("Success!", response.data.message, "success");
      
      }
    } catch (error) {
      // console.log(error);
      swal("Error!", "Failed to verify OTP", "error");
    }
  };
//----------------------------------------------------------------------

useEffect(() => {
  if (otp.length === 4) { // Check if the OTP length is 4
    if (userId) {
      handleOtpSubmit(); // If userId exists, trigger handleOtpSubmit
    } else {
      handleOtpVerify(); // If userId doesn't exist, trigger handleOtpVerify
    }
  }
}, [otp, userId, handleOtpSubmit, handleOtpVerify]);


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
                ref={otp1Ref}
                onChange={(e) => handleOtpChange(e, otp2Ref)}
                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                autoComplete="off"
                type="text"
                inputMode="numeric"
                maxLength={1}
                ref={otp2Ref}
              
                onChange={(e) => handleOtpChange(e, otp3Ref)}
                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                autoComplete="off"
                type="text"
                inputMode="numeric"
                maxLength={1}
                ref={otp3Ref}
              
                onChange={(e) => handleOtpChange(e, otp4Ref)}
                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                autoComplete="off"
                type="text"
                inputMode="numeric"
                maxLength={1}
                ref={otp4Ref}
                
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
