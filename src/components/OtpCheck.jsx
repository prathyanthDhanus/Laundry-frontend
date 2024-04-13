import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import swal from 'sweetalert';
import axios from '../api/Axios'; // Import axios for HTTP requests

export default function OtpModal({ open, onClose, children }) {
    
    const [otpData, setOtpData] = useState({ otp1: '', otp2: '', otp3: '', otp4: '' }); // State to store the OTP digits

    const handleOtpChange = (event, inputName) => {
        const newOtpData = { ...otpData, [inputName]: event.target.value };
        setOtpData(newOtpData);
    };

    useEffect(() => {
        if (Object.values(otpData).every(value => value.length === 1)) { // Check if all OTP digits are entered
            handleOtpSubmit();
        }
    }, [otpData]);

    const handleOtpSubmit = async () => {
        try {
          console.log(otpData)
            const response = await axios.post("/api/verify/otp", otpData);
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
                    <img src='https://thumbs.dreamstime.com/b/monkey-closing-his-eyes-clipart-picture-cartoon-character-74478155.jpg' alt='monkey'/>
                    <div className="flex justify-center ">
                        <form className='space-x-2'> {/* Removed onSubmit handler as it's not needed */}
                            <input
                               autoComplete='off'
                                type="text"
                                inputMode="numeric" // Enable numeric keyboard on mobile
                                maxLength={1} // Limit input to one character
                                value={otpData.otp1}
                                name='otp1' // Add name attribute to identify the input fields
                                onChange={(e) => handleOtpChange(e, 'otp1')}
                                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {/* Add name attributes to the other input fields */}
                            <input
                              autoComplete='off'
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={otpData.otp2}
                                name='otp2'
                                onChange={(e) => handleOtpChange(e, 'otp2')}
                                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                             autoComplete='off'
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={otpData.otp3}
                                name='otp3'
                                onChange={(e) => handleOtpChange(e, 'otp3')}
                                className="w-8 h-8 border border-gray-600 rounded px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                             autoComplete='off'
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={otpData.otp4}
                                name='otp4'
                                onChange={(e) => handleOtpChange(e, 'otp4')}
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
