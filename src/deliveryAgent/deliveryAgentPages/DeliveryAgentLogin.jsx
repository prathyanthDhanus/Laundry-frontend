import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';
import axios from "axios";
import OtpModal from '../../components/OtpCheck';

const DeliveryAgentLogin = () => {
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false); // State to control modal visibility

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setOpen(false);
  };

  //===================== Delivery agent login ===================

  const handleSubmit = async (e) => {
    e.preventDefault();
    const deliveryAgentData = {
        deliveryAgentMail:email
    }
    console.log(deliveryAgentData)
   try{
     const response = await axios.post("https://laundry-backend-8zln.onrender.com/api/delivery-agent/login",deliveryAgentData);
     if(response.status===200){
        await swal("Success!", response?.data?.message, "success");
        localStorage.setItem("deliveryAgentId",response?.data?.data);
        setOpen(true)
     }
   }catch(error){
    swal("Error!", error?.response?.data?.error_message, "error");
   }
  };


  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-cyan-400 via-cyan-600 to-indigo-700 p-3 ">
    <div className="px-8 py-6 mx-4 mt-4 border w-96 shadow-md rounded-md bg-gray-200 ">
      <h3 className="text-2xl font-bold text-center">Delivery Agent Login</h3>
      <img src='https://res.cloudinary.com/due7btgno/image/upload/v1712915969/dwajaon9naso4n3v0hbs.jpg' alt='delivery agent'/>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    <div>
    
    {open && (
      <OtpModal open={open} onClose={handleCloseModal} endpoint="/api/delivery-agent/verify-otp" >
        {/* Optional content to display inside the modal */}
        <h3 className="text-lg font-black text-gray-800 text-center">Verify OTP</h3>
         
      </OtpModal>
    )}
  </div>
  </div>
  )
}

export default DeliveryAgentLogin