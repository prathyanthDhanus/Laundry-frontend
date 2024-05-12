import React, { useState } from 'react';
import Calendar from '../../components/Calender';
import axios from "../adminApi/adminApi";
import { useContext } from 'react';
import { myContext } from '../../api/ContextApi';
import { useNavigate } from 'react-router-dom';

const ViewAllOrders = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [status, setStatus] = useState('');
  // const [orders, setOrders] = useState([]);
  const {ordersViewAdmin,setOrdersViewAdmin} = useContext(myContext);
  const navigate = useNavigate();


  const handleFromDateChange = (date) => {
    const utcDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  setFromDate(utcDate);
   
    
  };

  const handleToDateChange = (date) => {
    const utcDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    setToDate(utcDate);
  
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };


  
  const handleFilterOrders = async (e) => {
    e.preventDefault();
    try {
      if (fromDate && toDate && status) {
        let query = {};
        if (status === 'completed') {
          query = { isCompleted: true };
        } else if (status === 'cancelled') {
          query = { isCancelled: true };
        } else if (status === 'new') {
          query = { isCancelled: false, isAssigned: false };
        }else if(status==="assigned"){
            query = {isAssigned:true}
        }
        const queryParams = {
            fromDate: fromDate, // Format date as 'YYYY-MM-DD'
            toDate: toDate,     // Format date as 'YYYY-MM-DD'
            ...query,                                       // Include other query parameters
          };
      
        // console.log("queryparams",queryParams)
        const response = await axios.get(`/api/admin/orders`,{params:queryParams});

       
     if(response.status===200){
        const data = response.data.data;
        // setOrders(data)
        setOrdersViewAdmin(data)
    
     }
      }
    } catch (error) {
      console.error('Error filtering orders:', error);
      // Handle error state, display error message, etc.
    }
  };

  return (
    <div className='p-5 w-full'>
      <div className='flex justify-center flex-col mb-5 md:mb-0 md:w-1/3'>
        <label htmlFor="status" className='mb-2 font-semibold text-gray-700'>Order Status</label>
        <select id="status" value={status} onChange={handleStatusChange} className='border p-2 rounded-md w-full'>
          <option value="">All</option>
          <option value='completed'>Completed</option>
          <option value="cancelled">Cancelled</option>
          <option value="new">New</option>
          <option value="assigned">Assigned</option>
        </select>
      </div>
      <div className='flex mb-5 md:mb-0 md:w-full p-5'>
        <div className='mx-5 text-gray-500'>From Date</div>
        <div className='w-full'>
          <Calendar initialDate={fromDate || new Date()} onDateChange={handleFromDateChange} />
        </div>
        <div className='mx-5 text-gray-500'>To Date</div>
        <div className='w-full'>
          <Calendar initialDate={toDate || new Date()} onDateChange={handleToDateChange} />
        </div>
      </div>
      <div className='flex md:w-full  justify-center '>
        <button onClick={handleFilterOrders} className='w-1/3 p-2 bg-blue-500 text-white rounded-md '>Filter Orders</button>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Order ID</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Customer Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Order Date</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Order Status</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {ordersViewAdmin.map((order) => (
              <tr key={order._id}>
                <td className='px-6 py-4 whitespace-nowrap'>{order._id}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{order.userId.userName}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{order.date.slice(0, 10)}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {order.isCompleted ? 'Completed' : order.isCancelled ? 'Cancelled' : order.isAssigned ? 'Assigned' : 'New'}
                </td>
               <button className='bg-blue-600 m-3 border rounded-lg text-white' onClick={()=>navigate(`/admin/assign/orders/${order._id}`)}>View Details</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllOrders;
