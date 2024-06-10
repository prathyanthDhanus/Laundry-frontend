import React, { useEffect, useState } from "react";
import axios from "../api/Axios";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import "../Styles/clickMeButton.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const GetAorder = () => {
  const { id } = useParams(); //order id
  const [orders, setOrders] = useState([]);
  const [paymentLink, setPaymentLink] = useState("");

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


  const handlePayment = async()=>{

    const data = {
      orderId: orders._id,
    }
  
    try{
      const response = await axios.post(`/api/user/payment`,data);
      setPaymentLink(response.data.data);

    }catch(error){
      swal("Error!", error?.response?.data?.error_message, "error");
    }
  }
 

  return (
    <>
   
    <Navbar/>
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
     
      <div className="grid justify-center  ">
      <button className="text-white hover:text-[rgb(255,215,0)] bg-green-400 w-60 h-8" onClick={handlePayment}>Pay Now</button>

</div>
{paymentLink && (
        <div className="grid justify-center mt-4">
          <a
            href={paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white hover:text-[rgb(255,215,0)] bg-red-700 w-60 h-8 flex items-center justify-center ${paymentLink ? 'blink' : ''}`}
          >
            Click Me
          </a>
        </div>
      )}
<div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4 text-sm mt-4" role="alert">
  <strong className="font-bold">Note:</strong>
  <span className="block sm:inline">  You can pay the amount once the order request is out for delivery</span>
</div>
    </div>
    <Footer/>
    </>
  );
};

export default GetAorder;
