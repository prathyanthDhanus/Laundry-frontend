import React, { useEffect, useState } from 'react'
import axios from "../api/Axios";



const ConfirmOrder = () => {

    const[userProfile,setUserProfile] = useState([]);
    const [orderData,setOrderData] = useState([]);

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
    const orderDetails = localStorage.getItem("orderData");
    setOrderData([JSON.parse(orderDetails)]); // Parsing JSON string into object
}, []);
console.log(orderData)
  return (
    <>
     <div className="container mx-auto p-4 grid justify-center items-center">
        <h1 className="text-2xl font-bold text-blue-400 ">Confirm Order</h1>
        <div className="py-8">
         
          <ul>
            {orderData.map((item) => (
                <li key={item._id} className="mb-2">
                
                    <h3 className="text-xl font-bold mb-4"></h3>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600 cursor-pointer"
                    name="address"
                    value={item._id}
                  />
                  <span className="ml-2">{item.name}</span>
                  <span className="ml-2">{item.primaryAddressLandMark}</span>
                </label>
                <h3 className="text-xl font-bold mb-4">Secondary Address</h3>
                <label className="inline-flex items-center">
               
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600 cursor-pointer"
                    name="address"
                    value={item._id}
                    
                  />
                  <span className="ml-2">{item.secondaryAddress}</span>
                  <span className="ml-2">{item.secondaryAddressLandMark}</span>
                </label>
              </li>
            ))}
          </ul>
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
                    value={item._id}
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
                    value={item._id}
                    
                  />
                  <span className="ml-2">{item.secondaryAddress}</span>
                  <span className="ml-2">{item.secondaryAddressLandMark}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ConfirmOrder