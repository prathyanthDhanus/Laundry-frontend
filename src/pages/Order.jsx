import React, { useEffect, useState } from "react";
import axios from "../api/Axios";
import swal from "sweetalert";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Order = () => {

  //============== hooks ==================
  const navigate = useNavigate()
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [quantities, setQuantities] = useState(() => {
    return Array(subCategories.length).fill(0);
  }); // Initialize as an empty array

  //================== quantity ======================
  
  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + 1); // Ensure quantity doesn't go below 0
    setQuantities(newQuantities);
    
    // Update local storage
    const subCategoryId = subCategories[index]._id;
    const updatedData = {
      ...JSON.parse(localStorage.getItem("orderData")),
      [subCategoryId]: { quantity: newQuantities[index], name: subCategories[index].subCategoryName  }
    };
    localStorage.setItem("orderData", JSON.stringify(updatedData));
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] - 1); // Ensure quantity doesn't go below 0
    setQuantities(newQuantities);
    
    // Update local storage
    const subCategoryId = subCategories[index]._id;
    const updatedData = {
      ...JSON.parse(localStorage.getItem("orderData")),
      [subCategoryId]: { quantity: newQuantities[index], name: subCategories[index].subCategoryName }
    };
    localStorage.setItem("orderData", JSON.stringify(updatedData));
  };

  useEffect(() => {
    setQuantities(Array(subCategories.length).fill(0));
  }, [subCategories]);

  //============== fetching categories =================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/user/category-user");
        if (response.status === 200) {
          const data = response.data.data;
          setCategories(data);
        }
      } catch (error) {
        swal("Error!", "Something went wrong", "error");
      }
    };
    fetchData();
  }, []);

  //================== fetching sub-categories ================
  const handleCategorySelect = (categoryId) => {
    // Send the selected categoryId to the backend
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user/sub-category/user", {
          params: {
            categoryId: categoryId,
          },
        });
        if(response.status===200){
            const data = response.data.data;
            setSubCategories(data);
        }
      } catch (error) {
        swal("Error!", "Something went wrong", "error");
      }
    };
    fetchData();
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("orderData"));
    if (storedData) {
      const subCategoryIds = subCategories.map(subCategory => subCategory._id);
      const updatedQuantities = subCategoryIds.map(subCategoryId => storedData[subCategoryId]?.quantity || 0);
      setQuantities(updatedQuantities);
    }
  }, [subCategories]);

  return (
    <>
      <div className="container mx-auto p-4 grid justify-center items-center">
        <h1 className="text-2xl font-bold text-blue-400 ">Book Your Order</h1>
        <div className="py-8">
          <h3 className="text-xl font-bold mb-4">Select Category</h3>
          <ul>
            {categories.map((item) => (
              <li key={item._id} className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600 cursor-pointer"
                    name="category"
                    value={item._id}
                    onChange={() => handleCategorySelect(item._id)}
                  />
                  <span className="ml-2">{item.categoryName}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto p-4 grid justify-center items-center">
        {subCategories?.map((item, index) => (
          <React.Fragment key={index}>
            <ul role="list" className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-10 py-5">
                <div className="flex min-w-0">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{item.subCategoryName}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500"></p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">Service charge</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">₹{item.serviceCharge} </p>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">Quantity</p>
                  <div className="flex items-center">
                    <button onClick={() => decreaseQuantity(index)} className=" px-2 py-1 rounded-md mr-1">➖</button>
                    <p className="text-xs leading-5 text-gray-500">{quantities[index]}</p>
                    <button onClick={() => increaseQuantity(index)} className=" px-2 py-1 rounded-md ml-1">➕</button>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">Total</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">₹{item.serviceCharge * quantities[index]}</p>
                </div>
              </li>
            </ul>
          </React.Fragment>
        ))}
      </div>
      {subCategories.length > 0 && (
        <div className="text-xl  text-blue-500 flex items-center justify-center "  >
          <div className='flex cursor-pointer ' onClick={()=>navigate('/confirm-orders')}>

          <p className="mr-2 ">Next</p>
          <GrLinkNext className="mt-1"/>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
