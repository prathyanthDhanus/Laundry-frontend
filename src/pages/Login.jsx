import React from "react";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";
// import axios from "../api/Axios";
import axios from "axios";
import OtpModal from "../components/OtpCheck";
import { useState } from "react";
import { useEffect } from "react";




const Login = () => {

 const navigate = useNavigate()
 const [open, setOpen] = useState(false); // State to control modal visibility



const handleCloseModal = () => {
  setOpen(false);
};




 //-------------- login function -----------------

 const handleLogin = async (e) => {
  e.preventDefault();
  const userData = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  
  try {
    const response = await axios.post("http://localhost:3000/api/user/login", userData);

    if (response.status === 200) {
   
      await swal("Success!", response?.data?.message, "success");
      localStorage.setItem("userId",response.data.data)
      setOpen(true);
      // navigate("/home");  
    }
  } catch (error) {
   
    console.log(error)
    swal("Error!", "Something went wrong", "error");
  }
};

 

  return (
  
   <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcom back! Please enter your details
          </span>
          <form onSubmit={handleLogin}>

        
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              autoComplete="off"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
        
            <span className="font-bold text-md cursor-pointer hover:text-blue-400">Forgot password🤔</span>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-blue-400  hover:text-black hover:border hover:border-gray-300"
            type="submit"
          >
            Login
          </button>
          </form>

          <div className="text-center text-gray-400">
            Dont'have an account?
            <span className="font-bold text-black cursor-pointer" onClick={()=>navigate("/register")}>Sign up for free</span>
          </div>
        </div>
        {/* right side */} 
        <div className="relative">
          <img
            src="https://res.cloudinary.com/due7btgno/image/upload/v1712846423/mcgccbxerndy9e7wga5l.jpg"
            alt="img"
            className="w-[500px] h-full hidden rounded-r-2xl md:block object-fit"
          />
         
        </div>
      </div>
      <div>
    
    {open && (
      <OtpModal open={open} onClose={handleCloseModal}>
        {/* Optional content to display inside the modal */}
        <h3 className="text-lg font-black text-gray-800 text-center">Verify OTP</h3>
       
      </OtpModal>
    )}
  </div>
    </div>
   </>
    
    
  );
};

export default Login;