
import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import axios from "../api/Axios"; 
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const GetOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Initialize totalPages with 1
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    // Function to fetch orders from backend
    const fetchOrders = async () => {
      try {
        // const response = await axios.get(
        //   `/api/user/orders?page=${currentPage}`
        // );

        // // Check the structure of the response data
        // const { data, totalPages } = response.data;

        // setOrders(data); // Set orders data
        // setTotalPages(totalPages); // Update totalPages state

        const response = await axios.get('/api/user/user-orders');
        const data = response.data.data;
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        navigate('*')
      }
    };

    fetchOrders(); // Fetch orders when currentPage changes
  }, [currentPage]);

  // Function to handle pagination change
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Update currentPage state
  };

  //==================== fetch data based on query ===================

  const handleFilter = async (filter) => {
    try {
      const response = await axios.get(
        `/api/user/orders?page=${currentPage}&${filter}=true`
      );
      const { data, totalPages } = response.data;
      setOrders(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(`Error fetching ${filter} orders:`, error);
    }
  };
  console.log(orders);

  return (
    <div className="mt-5 p-8 ">
      <h1 className="text-2xl font-bold text-blue-400 mb-8 flex justify-center pl-12">
        Order Details
      </h1>
      <div className="flex gap-9 justify-center m-5">
      <button
          type="submit"
           onClick={() => handleFilter('isCompleted')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded gap-2rem "
        >
          Completed Orders
        </button>
        <button
          type="submit"
          onClick={() => handleFilter('isCancelled')}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded  "
        >
          Canceled Orders
        </button>
        <button
          type="submit"
          onClick={() => handleFilter('isPickedUp')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
        Picked Up Orders
        </button>
        <button
          type="submit"
          onClick={() => handleFilter('isPending')}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded "
        >
         Pending Orders
        </button>
      </div>
      {orders?.length === 0 && (
      <div className="text-4xl leading-tight font-bold text-center text-gray-600">⚠️No orders found.</div>
    )}

      {orders?.map((items) => (
  <div
    className="max-w-sm w-full lg:max-w-3/4  lg:flex mb-5 "
    key={items._id}
  >
    <div
      className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "
      title="Woman holding a mug"
    ></div>
    <div className="border border-green-400 px-4 py-2 rounded-md  shadow flex flex-col cursor-pointer"onClick={()=>navigate(`/orders/order/${items._id}`)} >
      <div className="mb-8 ">
        <p className="text-sm text-gray-600 flex items-center">
          <svg
            className="fill-current text-gray-500 w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Order Request Id&nbsp;
          {items._id}
        </p>
        <div className="text-gray-500 font-bold text-xl mb-2">
          <div className=" w-80 flex justify-start items-center">
            <img
              src="https://res.cloudinary.com/due7btgno/image/upload/v1714281250/vulnzorldk3uxgvoktnm.jpg"
              style={{ width: "25%", height: "auto" }}
            />
            <p className="text-gray-700 text-base">
              {items.orderedAdress[0].address}
              <br />
              {items.orderedAdress[0].addressLandMark}
            </p>
          </div>
          <div className="ext-gray-500 font-bold text-xl ml-7">
             Amount&nbsp;₹{items.grandTotalAmount}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm justify-end flex items-center ">
          <div className="p-3">
            <p
              className={`text-black-900 leading-none justify-start ${
                items.isCancelled
                  ? "text-red-500"
                  : items.isPickedUp && items.isCompleted === false
                  ? "text-blue-500"
                  : items.isCompleted
                  ? "text-green-500"
                  : items.isPickedUp===false 
                  ? "text-orange-500"
                  : ""
              }`}
            >
              {items.isCancelled
                ? "Canceled"
                : items.isPickedUp && items.isCompleted === false
                ? "Picked up"
                : items.isPickedUp===false 
                ? "Pending"
                : items.isCompleted
                ? "Completed"
                : ""}
            </p>
          </div>
          <div>
            <p className="text-gray-600 pt-2">
              {new Date(items.date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="mr-5 text-20">
          {items.isPickedUp===false && !items.isCancelled && !items.isCompleted && (
                  <>
                    <MdDelete
                      fontSize="1.3rem"
                      color="red"
                      onClick={() => navigate(`/cancel/orders/${items._id}`)}
                    />
                   
                    

                  </>
                )}
        </div>
      </div>
    </div>
  </div>
))}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 ">
        <div className="flex flex-1 justify-between sm:hidden">
          {/* Previous and Next buttons for mobile */}
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center ">
          {/* Pagination for desktop */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default GetOrders;
