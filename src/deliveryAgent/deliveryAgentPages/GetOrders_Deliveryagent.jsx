import React, { useEffect, useState } from "react";
import axios from "../api/deliveryAgentApi";
import swal from "sweetalert";

const GetOrders_Deliveryagent = () => {
  const [orders, setOrders] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = async (orderId) => {

  //   const data ={
  //     isPickedUp: !isChecked,
  //     orderId : orderId
  //   }
  //   try {
  //     const response = await axios.put(`/api/delivery-agent/orders`, data);
  //     const updatedOrder = response.data.data;
  //     const updatedOrders = orders.map((order) =>
  //       order._id === updatedOrder._id ? updatedOrder : order
  //     );
  //     setOrders(updatedOrders);
  //     setIsChecked(!isChecked);
  //   } catch (error) {
  //     swal("Error!", error?.response?.data?.error_message, "error");
  //   }
  // };

  const handleCheckboxChange = async (orderId) => {
    const filterData = orders.filter((order) => order._id === orderId);
    const completed = filterData.map((item) => item.isCompleted);
    console.log(completed);
    if (completed[0] == false) {
      const data = {
        isPickedUp: !isChecked,
        orderId: orderId,
      };

      try {
        const response = await axios.put(`/api/delivery-agent/orders`, data);
        const updatedOrder = response.data.data;
        const updatedOrders = orders.map((order) =>
          order._id === updatedOrder._id
            ? { ...order, isPickedUp: updatedOrder.isPickedUp }
            : order
        );
        setOrders(updatedOrders);
        setIsChecked(updatedOrder.isPickedUp);
      } catch (error) {
        swal("Error!", error?.response?.data?.error_message, "error");
      }
    } else {
      swal("Error!", "This order is already completed", "error");
    }
  };

  const getOrdersDeliveryBoy = async (isAssigned, isPickedUp, isCompleted) => {
    try {
      const response = await axios.get(`/api/delivery-agent/orders`, {
        params: {
          isAssigned,
          isPickedUp,
          isCompleted,
        },
      });
      const data = response.data.data;

      setOrders(data);
    } catch (error) {
      swal("Error!", error?.response?.data?.error_message, "error");
    }
  };

  useEffect(() => {
    getOrdersDeliveryBoy();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Orders</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => getOrdersDeliveryBoy(true, false, false)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Not Picked Up
          </button>
          <button
            onClick={() => getOrdersDeliveryBoy(true, true, false)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            PickedUp
          </button>
          <button
            onClick={() => getOrdersDeliveryBoy(true, true, true)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Completed
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">
              Order Id : <span className="text-gray-400">{order._id}</span>
            </h3>
            <p>
              <span className="font-semibold">Username:👨🏻‍💼</span>{" "}
              {order?.userId?.userName}
            </p>
            <p>
              <span className="font-semibold">Ordered Address:🏠</span>{" "}
              {order?.orderedAdress[0]?.address}
            </p>
            <p>
              <span className="font-semibold">Ordered Landmarks:🚩</span>{" "}
              {order?.orderedAdress[0]?.addressLandMark}
            </p>
            <p
              style={{
                color: order.isCompleted
                  ? "green"
                  : order.isPickedUp
                  ? "orange"
                  : "red",
              }}
            >
              <span className="font-semibold">Status:</span>{" "}
              {order.isCompleted
                ? "Completed"
                : order.isPickedUp
                ? "Picked Up"
                : "Pending"}
            </p>
            <div className="flex justify-end ">
              <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center  ">
                <input
                  type="checkbox"
                  checked={order.isPickedUp}
                  onChange={() => handleCheckboxChange(order._id)}
                  className="sr-only"
                />
                <span className="label flex items-center text-sm font-medium text-black">
                  Not picked🚫
                </span>
                <span
                  className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                    order.isPickedUp ? "bg-[#212b36]" : "bg-[#CCCCCE]"
                  }`}
                >
                  <span
                    className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                      order.isPickedUp ? "translate-x-[28px]" : ""
                    }`}
                  ></span>
                </span>
                <span className="label flex items-center text-sm font-medium text-black">
                  Picked🚗
                </span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetOrders_Deliveryagent;
