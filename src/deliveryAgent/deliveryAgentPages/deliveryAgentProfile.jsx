//creating delivery agent profile by admin

import React, { useState } from 'react';
import axios from '../../admin/adminApi/adminApi';
import swal from 'sweetalert';

const DeliveryAgentProfile = () => {
  const [deliveryAgentName, setDeliveryAgentName] = useState('');
  const [deliveryAgentAddress, setDeliveryAgentAddress] = useState('');
  const [deliveryAgentPhonenumber, setDeliveryAgentPhoneNumber] = useState('');
  const [deliveryAgentMail, setDeliveryAgentMail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/delivery-agent/profile',
        {
            deliveryAgentName,
            deliveryAgentAddress,
            deliveryAgentPhonenumber,
            deliveryAgentMail,
        }
      );

      if (response.status === 201) {
        await swal("Success!", response?.data?.message, "success");
        // Reset form fields
        setDeliveryAgentName('');
        setDeliveryAgentAddress('');
        setDeliveryAgentPhoneNumber('');
        setDeliveryAgentMail('');
      }
    } catch (error) {
        swal("Error!", error?.response?.data?.message, "error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto m-6 mt-20">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white shadow-md rounded-md p-8"
      >
        <h2 className="text-2xl font-   bold mb-6 text-center">
          Create Delivery Agent Profile
        </h2>
        <div className="mb-4">
          <label
            htmlFor="deliveryAgentName"
            className="block text-gray-700  mb-2"
          >
            Delivery Agent Name
          </label>
          <input
            type="text"
            id="deliveryAgentName"
            value={deliveryAgentName}
            onChange={(e) => setDeliveryAgentName(e.target.value)}
            className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deliveryAgentAddress"
            className="block text-gray-700  mb-2"
          >
            Delivery Agent Address
          </label>
          <input
            type="text"
            id="deliveryAgentAddress"
            value={deliveryAgentAddress}
            onChange={(e) => setDeliveryAgentAddress(e.target.value)}
            className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deliveryAgentPhoneNumber"
            className="block text-gray-700  mb-2"
          >
            Delivery Agent Phone Number
          </label>
          <input
            type="tel"
            id="deliveryAgentPhoneNumber"
            value={deliveryAgentPhonenumber}
            onChange={(e) =>
              setDeliveryAgentPhoneNumber(e.target.value)
            }
            className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="deliveryAgentMail"
            className="block text-gray-700  mb-2"
          >
            Delivery Agent Email
          </label>
          <input
            type="email"
            id="deliveryAgentMail"
            value={deliveryAgentMail}
            onChange={(e) => setDeliveryAgentMail(e.target.value)}
            className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:border-purple-500"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default DeliveryAgentProfile;