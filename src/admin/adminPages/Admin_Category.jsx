import React, { useEffect, useState } from "react";
import axios from "../adminApi/adminApi";
import swal from "sweetalert";

const Admin_Category = () => {

//========================= hooks =========================

  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [updatedCategories, setUpdatedCategories] = useState({});
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  //============== Function to handle changes in category names ===============

  const handleCategoryNameChange = (e, categoryId) => {
    const newCategoryName = e.target.value;
    // Update the state for updatedCategories
    setUpdatedCategories((prev) => ({
      ...prev,
      [categoryId]: newCategoryName,
    }));

    // Update the categories state to reflect changes immediately
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category._id === categoryId
          ? { ...category, categoryName: newCategoryName }
          : category
      )
    );
  };

  //=========== Function to handle submission of updated category names ==============

  const handleSubmit = async () => {
    try {
      const updatedCategoriesArray = Object.entries(updatedCategories).map(
        ([name]) => ({
          categoryName: name,
        })
      );

      const response = await axios.put(
        `/api/admin/category?categoryId=${selectedCategoryId}`,
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

  //================ Function to handle creation of new categories ==================

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/admin/category", {
        categoryName: categoryName,
      });
      if (response.status === 200) {
        await swal("Success!", response?.data?.message, "success");
        setCategoryName("");
        // Update categories state after adding a new category
        setCategories((prevCategories) => [
          ...prevCategories,
          response.data.category,
        ]);
      }
    } catch (error) {
      console.error(error);
      swal("Error!", error?.response?.data?.error_message, "error");
    }
  };

  //==================== Function to fetch existing categories upon component mount ====================

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Create Category</h1>
      <form onSubmit={handleSave} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/3 p-2">
            <input
              className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
              id="categoryName"
              type="text"
              placeholder="Enter category name"
              name="category"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 flex justify-center ">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="w-3/4 mt-6 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider text-center">
                Category Name
              </th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-3 border-b border-gray-300">
                  <input
                    type="text"
                    className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={item.categoryName}
                    onChange={(e) => {
                      handleCategoryNameChange(e, item._id);
                      setSelectedCategoryId(item._id); // Set the selected category ID
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="md:w-2/3 flex justify-end p-3 pr-20  ">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded align-center "
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin_Category;
