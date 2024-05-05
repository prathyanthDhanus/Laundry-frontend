import React, { useEffect } from "react";
import axios from "../../admin/adminApi/adminApi";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



const ViewDeliveryAgent = () => {
  const [deliveryAgents, setDeliveryAgents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //================== fetching delivery agent details ====================

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

  useEffect(() => {
    fetchDeliveryAgents();
  }, []);

  //============== fetch deleted agents details =================

  const handleFilter = async (filter) => {
    try {
      const response = await axios.get(
        `/api/delivery-agent/profiles?${filter}=true`
      );
      if (response.status === 200) {
        const data = response.data.data;
        setDeliveryAgents(data);
      }
    } catch (error) {
      console.error(`Error fetching ${filter} orders:`, error);
    }
  };

  //=================== delete delivery agent ===================

  const handleDelete = async(deliveryAgentId)=>{
    try {
        const response = await axios.delete(
          "/api/delivery-agent/profile",{ data: { deliveryAgentId: deliveryAgentId } }
        );
        if (response.status === 200) {
            await swal("Success!", response?.data?.message, "success");
        }
      } catch (error) {
        console.log(error);
      }
  }

  if (loading) {
    return <div className="flex justify-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center text-red-500">{error.message}</div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Delivery Agents</h2>
      <button
        type="submit"
        onClick={() => handleFilter("isDeleted")}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded gap-2rem "
      >
        Deleted Delivery Agents
      </button>
      <ul className="list-none mb-0">
        {deliveryAgents.map((agent,index) => (
          <li key={agent.id} className="flex flex-wrap mb-4">
                <h5 className="p-5">{index+1}</h5>
            <div className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
              <h3 className="text-lg font-bold">{agent.deliveryAgentName}</h3>
              <p className="text-gray-600">{agent.deliveryAgentAddress}</p>
            </div>
            <div className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
              <p className="text-gray-600">
                Phone: {agent.deliveryAgentPhonenumber}
              </p>
              <p className="text-gray-600">Email: {agent.deliveryAgentMail}</p>
            </div>
            <div className="w-1/2 md:w-1/3 xl:w-1/4 p-4 ">
              <p className="text-gray-600">Status:</p>
              <p
                className={`text-${agent.isDeleted ? "red-500" : "green-500"}`}
              >
                {agent.isDeleted ? "Deleted" : "Active"}
              </p>
         
            </div>
            <div className="flex mt-10 pr-20 ">
            {!agent.isDeleted && (
                <MdDelete
                  fontSize="1.3rem"
                  color="red"
                  className="cursor-pointer"
                  onClick={()=>handleDelete(agent._id)}
                />
                
              )}
              <MdEdit className="ml-3 cursor-pointer" fontSize="1.3rem"  color="blue" />
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewDeliveryAgent;
