import React, { useEffect, useState } from "react";
import axios from "../api/Axios";
import { useParams } from "react-router-dom";

const GetAorder = () => {
  const { id } = useParams(); //order id
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/orders/${id}`);
        const data = response.data.data;
        setOrders(data);
        console.log(data);
      
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

 

  return (
    <div className="p-4">
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
                  <div className="text-sm text-gray-900">{item?.categoryName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item?.quantity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">₹{item?.totalAmount}</div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAorder;
