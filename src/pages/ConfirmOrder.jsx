import React, { useEffect, useState } from "react";
import axios from "../api/Axios";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

const ConfirmOrder = () => {

  //============ hooks ===============
  
  const [userProfile, setUserProfile] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const navigate = useNavigate();

  //================= fetching address from profile =====================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user/profiles");
        const data = response.data.data;
        setUserProfile([data]);
      } catch (error) {
        swal("Error!", error.response.data.message, "error");
      }
    };

    fetchData();
  }, []);

  //=================== getting order details from local storage =============

  useEffect(() => {
    // Retrieve order data from local storage
    const storedData = JSON.parse(localStorage.getItem("orderData"));
    if (storedData) {
      // Convert object values to an array
      const orderArray = Object.values(storedData);
      setOrderData(orderArray);
    }
  }, []);

  //================== save order ===================

  const handleOrder = async () => {
    try {
      const selectedAddress = document.querySelector(
        'input[name="address"]:checked'
      ).value;
     
      // Prepare the payload to send to the backend
      const payload = {
        orderData: orderData,
        // primaryAddressLandMark: selectedAddress,
      };
      if (selectedAddress === userProfile[0].primaryAddress) {
        // If primary address is selected
        payload.primaryAddress = userProfile[0].primaryAddress;
        payload.primaryAddressLandMark = userProfile[0].primaryAddressLandMark;
      } else if (selectedAddress === userProfile[0].secondaryAddress) {
        // If secondary address is selected
        payload.secondaryAddress = userProfile[0].secondaryAddress;
        payload.secondaryAddressLandMark = userProfile[0].secondaryAddressLandMark;
      }

      const response = await axios.post("/api/user/orders", payload);
      if(response.status===200){
        localStorage.removeItem("orderData")
        await swal("Success!", response?.data?.message, "success");
        navigate('/')
      }
      // console.log(response);
    } catch (error) {
      console.log(error)
      // swal("Error!", error.response.data.message, "error");
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-blue-400 mb-8">
          Booking Summery
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-blue-500 px-4 py-2">Cloths </th>
                <th className="border border-blue-500 px-4 py-2">Selected for</th>
                <th className="border border-blue-500 px-4 py-2">Quantity</th>
                <th className="border border-blue-500 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((item) => (
                <tr key={item._id} className="border border-blue-500">
                  <td className="border border-blue-500 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-blue-500 px-4 py-2">
                    {item.categoryName}
                  </td>
                  <td className="border border-blue-500 px-4 py-2">
                    {item.quantity}
                  </td>
                  <td className="border border-blue-500 px-4 py-2">
                    {item.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-xl  text-blue-500 flex items-center justify-center mt-5 ">
          <div
            className="flex cursor-pointer pr-20 "
            onClick={() => navigate("/confirm-orders")}
          >
            <p className="mr-2 ">Next</p>
            <GrLinkNext className="mt-1" />
          </div>
          <div
            className="flex cursor-pointer  "
            onClick={() => navigate("/place-orders")}
          >
            <p className="mr-2 ">Edit Booking</p>
            <FaRegEdit className="mt-1" />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 grid justify-center items-center">
        <h1 className="text-2xl font-bold text-blue-400 ">Select Address</h1>
        <div className="py-8">
          <ul>
            {userProfile.map((item) => (
              <li key={item._id} className="mb-2">
                <h3 className="text-xl font-bold mb-4">Primary Address</h3>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600 cursor-pointer"
                    name="address"
                    value={item.primaryAddress}
                  />
                  <span className="ml-2">{item.primaryAddress}</span>
                  <span className="ml-2">{item.primaryAddressLandMark}</span>
                </label>
                <h3 className="text-xl font-bold mb-4">Secondary Address</h3>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600 cursor-pointer"
                    name="address"
                    value={item.secondaryAddress}
                  />
                  <span className="ml-2">{item.secondaryAddress}</span>
                  <span className="ml-2">{item.secondaryAddressLandMark}</span>
                </label>
              </li>
            ))}
          </ul>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleOrder}>
            Finish
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
