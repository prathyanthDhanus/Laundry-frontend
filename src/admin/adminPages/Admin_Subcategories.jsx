import React, { useEffect, useState } from "react";
import axios from "../adminApi/adminApi";
import swal from "sweetalert";
import Dropdown from "../../components/Dropdown";
import { MdDelete } from "react-icons/md";

const Admin_Subcategories = () => {
  const [subCategoryName, setSubCategoryName] = useState("");
  const [serviceCharge, setServiceCharge] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [updatedCategories, setUpdatedCategories] = useState({});
  // const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  //================== fetching categories =================

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/admin/category");
        if (response.status === 200) {
          const data = response.data.data;
          setCategories(data);
        }
      } catch (error) {
        swal("Error!", error?.response?.data?.error_message, "error");
      }
    };
    fetchData();
  }, []);

  //================= get the category id ======================

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
    //selected catgories category id selecting function
  };
  //================= assigning categoeies in option variable for dropdown ===============

  const options = categories.map((category) => ({
    label: category.categoryName,
    _id: category._id,
  })); // any doubt,check the dropdown component

  //============== Function to handle changes in sub-category names ===============

  const handleCategoryNameChange = (e, subCategoryId) => {
    const newSubCategoryName = e.target.value; // Corrected variable name
    setUpdatedCategories((prev) => ({
      ...prev,
      [subCategoryId]: newSubCategoryName,
    }));
    setSubCategories((prevSubCategories) =>
      prevSubCategories.map((subCategory) =>
        subCategory._id === subCategoryId
          ? { ...subCategory, subCategoryName: newSubCategoryName } // Corrected field name
          : subCategory
      )
    );
  };

  //=========== Function to handle submission of updated sub-category names ==============

  const handleSubmit = async () => {
    try {
      const updatedCategoriesArray = Object.entries(updatedCategories).map(
        ([subCategoryId, newSubCategoryName]) => ({
          // Corrected mapping
          subCategoryId: subCategoryId, // Corrected field name
          subCategoryName: newSubCategoryName,
          serviceCharge: subCategories.find(
            (subCategory) => subCategory._id === subCategoryId
          )?.serviceCharge, // Fetching serviceCharge from subCategories
          categoryId: selectedCategoryId,
        })
      );

      const response = await axios.put(
        `/api/admin/sub-category`,
        updatedCategoriesArray
      );
      if (response.status === 200) {
        await swal("Success!", response?.data?.message, "success");
        setUpdatedCategories({});
      }
    } catch (error) {
      console.error(error);
      swal("Error!", error?.response?.data?.error_message, "error");
    }
  };

  //================ Function to handle creation of new sub-categories ==================

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/admin/sub-category", {
        subCategoryName: subCategoryName,
        serviceCharge: serviceCharge,
        categoryId: selectedCategoryId,
      });
      if (response.status === 200) {
        await swal("Success!", response?.data?.message, "success");
        setSubCategoryName("");
        window.location.reload();
        setSubCategories((prevCategories) => [
          ...prevCategories,
          response.data.category,
        ]);
      }
    } catch (error) {
      console.error(error);
      swal("Error!", error?.response?.data?.error_message, "error");
    }
  };

  //==================== Function to fetch existing sub-categories upon component mount ====================

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/admin/sub-category");
        if (response.status === 200) {
          const data = response.data.data;
          setSubCategories(data);
        }
      } catch (error) {
        swal("Error!", error?.response?.data?.error_message, "error");
      }
    };
    fetchData();
  }, []);

  //======================= delete sub-category =======================

  const handleDelete = async(subCategoryId)=>{
    
    try{
      const willDelete = await swal("Are you sure?", "You want to delete this", "warning");
      if(willDelete){

        const response = await axios.delete(`/api/admin/sub-category?subCategoryId=${subCategoryId}`);
        if(response.status===200){
          await swal("Success!", response?.data?.message, "success");
          window.location.reload()
        }
  }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  p-3 ">
      <h1 className="text-2xl font-bold mb-6">Create Sub-Category</h1>
      <form onSubmit={handleSave} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-full  ">
            <input
              className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
              id="categoryName"
              type="text"
              placeholder="Enter Sub-category name"
              name="category"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
            />
            <input
              className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-5"
              id="serviceCharge"
              type="text"
              placeholder="Enter Service Charge"
              name="serviceCharge"
              value={serviceCharge}
              onChange={(e) => setServiceCharge(e.target.value)}
            />
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 flex justify-center "></div>
          </div>
        </div>
        <div className="w-full ">
          <Dropdown
            label="Select Category"
            options={options}
            onSelect={handleCategorySelect}
          />
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded w-full mt-3"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
      <div className="w-3/4 mt-6 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider text-center">
                Sub-Category Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider text-center">
                Category Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider text-center">
                Service Charge
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider text-center">
                Service Charge
              </th>
            </tr>
          </thead>
          <tbody>
            {subCategories?.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-3 border-b border-gray-300">
                  <input
                    type="text"
                    className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={item.subCategoryName}
                    onChange={(e) => {
                      handleCategoryNameChange(e, item._id);
                      // setSelectedSubCategoryId(item._id);
                    }}
                  />
                </td>
                <td className="px-6 py-3 border-b border-gray-300">
                  <input
                    type="text"
                    className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={item.categoryId ? item.categoryId.categoryName : ""}
                    readOnly
                  />
                </td>
                <td className="px-6 py-3 border-b border-gray-300">
                  <input
                    type="text"
                    className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={item.serviceCharge}
                    onChange={(e) => {
                      // No need to handleCategoryNameChange here
                      // Just set the serviceCharge value directly
                      const newServiceCharge = e.target.value;
                      setSubCategories((prevSubCategories) =>
                        prevSubCategories.map((subCategory) =>
                          subCategory._id === item._id
                            ? {
                                ...subCategory,
                                serviceCharge: newServiceCharge,
                              }
                            : subCategory
                        )
                      );
                    }}
                  />
                </td>
                <div className="p-2 flex">
                  <Dropdown
                    label="Select Category"
                    options={options}
                    onSelect={handleCategorySelect}
                  />
                  <MdDelete className="mt-7 m-3 text-2xl cursor-pointer hover:text-red-500 " onClick={() => handleDelete(item._id)}/>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="md:w-2/3 flex justify-end p-3 pr-20  ">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded align-center  "
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin_Subcategories;
