import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";
// import axios from "../api/Axios";
import axios from "axios";
import Loader from "../components/Loader";
import "../Styles/loader.css";



const Register = () => {

 const navigate = useNavigate();
 const [loading, setLoading] = useState(false); 

 //-------------- login function -----------------

 const handleRegister = async (e) => {
  e.preventDefault();
  setLoading(true)

  const userData = {
    userName : e.target.username.value.toUpperCase(),
    email: e.target.email.value,
    password: e.target.password.value,
  };
 
  try {
    const response = await axios.post("https://laundry-backend-8zln.onrender.com/api/user/register", userData);
    
    if (response?.status === 200) {
      // localStorage.setItem('token', response.data.token);
      await swal("Success!", response?.data?.message, "success");
      navigate("/login");  
      setLoading(false)
    }
  } catch (error) {
    
    swal("Error!", error?.response?.data?.message, "error");
    setLoading(false)
  }
};

 

  return (
  
   <>
  
      <div className={`flex items-center justify-center min-h-screen bg-gray-100 ${loading ? "blur" : ""}`}>
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Get Ready!!!!</span>
          <span className="font-light text-gray-400 mb-8">
          Create your account and start exploring today!
          </span>
          <form onSubmit={handleRegister}>
         
          <div className="py-4">
            <span className="mb-2 text-md">Username</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="username"
              id="username"
              autoComplete="off"
            />
          </div>
        
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
     
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-blue-400  hover:text-black hover:border hover:border-gray-300"
            type="submit"
          >
            Signup
          </button>
          </form>

          <div className="text-center text-gray-400">
            Dont'have an account?
            <span className="font-bold text-black cursor-pointer" onClick={()=>navigate("/login")}> Login</span>
          </div>
        </div>
        {/* right side */} 
        <div className="relative">
          <img
            src="https://res.cloudinary.com/due7btgno/image/upload/v1712897421/me4mxirljxlgonsy2drk.jpg"
            alt="img"
            className="w-[500px] h-full hidden rounded-r-2xl md:block object-fit"
          />
         
        </div>
      </div>
    </div>
    {loading && <Loader />}
   </>
    
    
  );
};

export default Register;