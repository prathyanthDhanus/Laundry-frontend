import React, { useState } from 'react';
import axios from "../api/Axios";
import { useNavigate, useParams } from 'react-router-dom';

const CancelOrder = () => {
  const [reason, setReason] = useState('');
  const [error, setError] = useState(null);
  const {id} = useParams()//order id
  const navigate = useNavigate();

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
         const response = await axios.patch(`/api/user/orders/${id}`,{cancelledReason:reason})
          if(response?.status===200){
            await swal("Success!", response?.data?.message, "success");
            navigate("/orders")
          }
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Cancel Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 mb-2">Reason for cancellation:</label>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-4">
              <input
                type="radio"
                id="changed-my-mind"
                name="reason"
                className="form-radio h-4 w-4 text-blue-600 cursor-pointer"
                value="I changed my mind"
                onChange={handleReasonChange}
              />
              <label className="pl-2 text-gray-700  " htmlFor="changed-my-mind">
                I changed my mind
              </label>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4">
              <input
                type="radio"
                id="changed-my-plan"
                name="reason"
                className="form-radio h-4 w-4 text-blue-600 cursor-pointer"
                value="I changed my plan"
                onChange={handleReasonChange}
              />
              <label className="pl-2 text-gray-700  " htmlFor="changed-my-plan">
                I changed my plan
              </label>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4">
              <input
                type="radio"
                id="emergencies"
                name="reason"
                className="form-radio h-4 w-4 text-blue-600 cursor-pointer"
                value="emergencies"
                onChange={handleReasonChange}
              />
              <label className=" pl-2 text-gray-700 " htmlFor="emergencies">
                Emergencies
              </label>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4">
              <input
                type="radio"
                id="other"
                name="reason"
                className="form-radio h-4 w-4 text-blue-600 cursor-pointer"
                value="other"
                onChange={handleReasonChange}
              />
              <label className="pl-2 text-gray-700 " htmlFor="other">
                other
              </label>
            </div>
          </div>
        </div>
        {error && (
          <div className="text-red-500 mb-4">{error}</div>
        )}
        <button
          type="submit"

          className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded  w-full"
        >
          Cancel Order
        </button>
      </form>
    </div>
  );
};

export default CancelOrder;