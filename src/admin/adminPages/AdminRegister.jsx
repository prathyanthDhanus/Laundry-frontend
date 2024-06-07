import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
// import axios from "../adminApi/adminApi";
import axios from "axios";


const AdminRegister = () => {

  const navigate = useNavigate();

  //================== register function ==============

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminData = {
      userName: e.target.username.value,
      password: e.target.password.value,
      adminKeyId:e.target.adminKeyId.value
    };
    try {
      const response = await axios.post("https://laundry-backend-8zln.onrender.com/api/admin/register", adminData);
      console.log(response);
      if (response.status === 200) {
        await swal("Success!", response?.data?.message, "success");
        navigate("/admin/login");
      }
    } catch (error) {
      // console.log(error);
      // swal("Error!", "Unauthorized entry", "error");
      swal("Error!", error?.response?.data?.
      error_message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-25 w-auto"
            src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-admin-and-customer-service-job-vacancies-png-image_9041264.png"
            alt="Workflow"
          />
          <h2 className=" text-center text-3xl font-extrabold text-gray-900">
            Admin Register
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px  ">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="adminKeyId" className="sr-only">
                Admin Key Id
              </label>
              <input
                id="adminKeyId"
                name="adminKeyId"
                type="password"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder=" Admin Key Id"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign up
            </button>
          </div>
        </form>
        <p><span className="font-bold">Note :</span> Admin Key ID is a unique ID for admin registration. It is used to prevent unauthorized access or registration</p>
      </div>
    </div>
  );
};

export default AdminRegister;
