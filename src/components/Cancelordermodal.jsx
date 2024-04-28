import React, { useState } from "react";
import Modal from "react-tailwindcss-modal";

const CancelModal = ({ orderId, onClose, onSubmit }) => {
  const [cancelReason, setCancelReason] = useState("");

  const handleSubmit = () => {
    onSubmit(orderId, cancelReason);
    onClose();
  };

  return (
    <Modal className="bg-white p-8 rounded shadow-md">
      <div className="text-xl font-bold mb-5">Cancel Order</div>
      <div className="mb-5">
        <p className="text-gray-600">Please select a reason for cancelling the order:</p>
        <div className="mt-2">
          <div className="flex items-center mb-2">
            <input
              id="reason-1"
              name="cancelReason"
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              value="I changed my mind"
              checked={cancelReason === "I changed my mind"}
              onChange={() => setCancelReason("I changed my mind")}
            />
            <label htmlFor="reason-1" className="ml-2 block text-sm font-medium text-gray-700">
              I changed my mind
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="reason-2"
              name="cancelReason"
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              value="Emergencies"
              checked={cancelReason === "Emergencies"}
              onChange={() => setCancelReason("Emergencies")}
            />
            <label htmlFor="reason-2" className="ml-2 block text-sm font-medium text-gray-700">
              Emergencies
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="reason-3"
              name="cancelReason"
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              value="Change in plans"
              checked={cancelReason === "Change in plans"}
              onChange={() => setCancelReason("Change in plans")}
            />
            <label htmlFor="reason-3" className="ml-2 block text-sm font-medium text-gray-700">
              Change in plans
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="reason-4"
              name="cancelReason"
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              value="Others"
              checked={cancelReason === "Others"}
              onChange={() => setCancelReason("Others")}
            />
            <label htmlFor="reason-4" className="ml-2 block text-sm font-medium text-gray-700">
              Others
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default CancelModal;