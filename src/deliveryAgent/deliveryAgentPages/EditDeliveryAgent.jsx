// edit delivery agents profile by admin

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { myContext } from '../../api/ContextApi';
import axios from '../../admin/adminApi/adminApi';
import swal from 'sweetalert';



const EditDeliveryAgent = () => {
  const { deliveryAgents, setDeliveryAgents } = useContext(myContext);
  const { id } = useParams(); // delivery agent id
  const navigate = useNavigate();
  const [deliveryAgent, setDeliveryAgent] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');

  useEffect(() => {
    const filterDeliveryAgent = deliveryAgents.filter(
      (agent) => agent._id === id
    );
    if (filterDeliveryAgent.length > 0) {
      setDeliveryAgent(filterDeliveryAgent[0]);
      setName(filterDeliveryAgent[0].deliveryAgentName);
      setAddress(filterDeliveryAgent[0].deliveryAgentAddress);
      setPhoneNumber(filterDeliveryAgent[0].deliveryAgentPhonenumber);
      setEmail(filterDeliveryAgent[0].deliveryAgentMail);
      setIdNumber(filterDeliveryAgent[0]._id);
    }
  }, [deliveryAgents, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =  await axios.put('/api/delivery-agent/profile', {
        deliveryAgentName: name,
        deliveryAgentAddress: address,
        deliveryAgentPhonenumber: phoneNumber,
        deliveryAgentMail: email,
        deliveryAgentId: idNumber,
      });

      // update the delivery agents state
      const updatedDeliveryAgents = deliveryAgents.map((agent) =>
        agent._id === deliveryAgent._id ? { ...agent, ...deliveryAgent } : agent
      );
      setDeliveryAgents(updatedDeliveryAgents);

      if(response.status===200){
        await swal("Success!", response?.data?.message, "success");
        navigate('/admin/view/delivery-agent/profile')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="w-full max-w-md mt-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="px-6 py-4 bg-gray-200 border-b border-gray-200">
          <h2 className="text-xl font-bold leading-tight text-gray-800">
            Edit Delivery Agent
          </h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="idNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                ID Number
              </label>
              <input
                type="text"
                name="idNumber"
                id="idNumber"
                readOnly
                value={idNumber}
                // onChange={(e) => setIdNumber(e.target.value)}
                required
                className="appearance-none border border-red-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDeliveryAgent;