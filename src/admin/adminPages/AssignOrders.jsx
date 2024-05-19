import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../../api/ContextApi";
import { FaLocationDot } from "react-icons/fa6";
import axios from "../adminApi/adminApi";
import { CiDeliveryTruck } from "react-icons/ci";
import swal from "sweetalert";

const AssignOrders = () => {
  const { id } = useParams();
  const [deliveryAgents, setDeliveryAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isAgentDropdownOpen, setIsAgentDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isToggled, setIsToggled] = useState(false);


  const { ordersViewAdmin } = useContext(myContext); //extracting the order details from the useContext
  const filterOrder = ordersViewAdmin.filter((order) => order._id === id); //filtering the corresponding order using  order id.

  //================== fetching delivery agent details from backend ====================

  const fetchDeliveryAgents = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/delivery-agent/profiles");
      const data = response.data.data;
     
      setDeliveryAgents(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(filterOrder);

  const handleAgentInputClick = () => {
    fetchDeliveryAgents();
    setIsAgentDropdownOpen(true);
  };

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
    setIsAgentDropdownOpen(false);
  };

  //======================= post the delivery agent id to the order schema ==================
  // (assign orders to the delivery agent)

  const assignOrder = async () => {
    const data = {
      deliveryAgentId: selectedAgent._id, //delivery agent id
      orderId: id, //order id
    };

    try {
      const response = await axios.post(`/api/admin/assign/orders`, data);
      if (response.status === 200) {
        await swal("Success!", response?.data?.message, "success");
      }
    } catch (error) {
      swal("Error!", error?.response?.data?.message, "error");
    }
  };

  //================= update the outfor delivery field ====================

  const changeStatus = async () => {
    const data = {
      outForDelivery: isToggled,
      orderId: id,
    };
    try {
      const response = await axios.put("/api/admin/orders", data);
      // console.log("response",response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Assign Orders</h1>
      {filterOrder.map((orders) => (
        <div
          key={orders._id}
          className="bg-white shadow-md rounded-lg p-6 mb-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Order Details</h2>
            <label className="inline-flex items-center me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isToggled  }
                onChange={() => {
                  setIsToggled(!isToggled);
                  changeStatus(); // Call changeStatus function here
                  
                }}
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
            
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {orders.outForDelivery ? "Completed" : "Not Completed"}
        </span>
            </label>
            {orders.isCancelled && (
              <span className="bg-red-500 text-white px-2 py-1 rounded-md">
                Cancelled
              </span>
            )}
          </div>
          <div className="flex items-center mb-4">
            <FaLocationDot className="text-blue-400" />
            <p className="text-gray-500">
              {orders?.orderedAdress[0]?.address},{" "}
              {orders?.orderedAdress[0]?.addressLandMark}
            </p>
          </div>
          <div className="w-full">
            <table className="w-full min-w-max table-auto divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Subcategory
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Selected for
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.subcategory?.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item.subCategoryName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item?.categoryName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item?.quantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ₹{item?.totalAmount}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {orders.isCancelled && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Cancellation Reason</h2>
              <p className="text-gray-500">{orders.cancelledReason}</p>
            </div>
          )}
          <div>
            {orders.isCancelled === false && (
              <>
                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-2 ">
                    Assign to delivery agent
                  </h2>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      onClick={handleAgentInputClick}
                      readOnly
                      value={selectedAgent?.deliveryAgentName || "Select agent"}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CiDeliveryTruck />
                    </div>
                    {isAgentDropdownOpen && (
                      <div className="absolute w-full mt-2 bg-white shadow-lg rounded-md">
                        {deliveryAgents.map((agent) => (
                          <div
                            key={agent._id}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleAgentSelect(agent)}
                          >
                            {agent.deliveryAgentName}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-green-500 w-1/2 border border-2 rounded cursor-pointer hover:text-white hover:bg-green-800 m-2 "
                    onClick={assignOrder}
                  >
                    Assign
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignOrders;
