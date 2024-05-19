
import {Routes,Route} from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { myContext } from "./api/ContextApi";
import Order from "./pages/Order";

import PrivateRoute from "./utils/PrivateRoutes";
import ConfirmOrder from "./pages/ConfirmOrder";
import GetOrders from "./pages/GetOrders";
import CancelOrder from "./pages/CancelOrder";
import GetAorder from "./pages/GetAorder";
// import Sidebar from "./components/SideBar";
import AdminHome from "./admin/adminPages/AdminHome";
import AdminLogin from "./admin/adminPages/AdminLogin";
import AdminRegister from "./admin/adminPages/AdminRegister";
import Unauthorized from "./components/Unauthorized";

import AdminPrivateRoute from "./admin/adminPrivateRoutes/adminPrivateRoutes";
import NotFound from "./components/NotFound";
import Admin_Category from "./admin/adminPages/Admin_Category";
import Admin_Subcategories from "./admin/adminPages/Admin_Subcategories";
import SidebarWithSearch from "./components/SideBar";

import DeliveryAgentProfile from "./deliveryAgent/deliveryAgentPages/deliveryAgentProfile";
import ViewDeliveryAgent from "./deliveryAgent/deliveryAgentPages/ViewDeliveryAgent";
import DeliveryAgentLogin from "./deliveryAgent/deliveryAgentPages/DeliveryAgentLogin";
import EditDeliveryAgent from "./deliveryAgent/deliveryAgentPages/EditDeliveryAgent";
import ViewAllOrders from "./admin/adminPages/ViewAllOrders";
import AssignOrders from "./admin/adminPages/AssignOrders";

import PrivateRouteDeliveryBoy from "./deliveryAgent/deliveryAgentPrivateRoutes/deliveryAgentPrivateRoutes"
import GetOrders_Deliveryagent from "./deliveryAgent/deliveryAgentPages/GetOrders_Deliveryagent";




function App() {

  const [deliveryAgents, setDeliveryAgents] = useState([]);
  const [ordersViewAdmin,setOrdersViewAdmin] = useState([]);
  const contextValue = {
    deliveryAgents,setDeliveryAgents,
    ordersViewAdmin,setOrdersViewAdmin
  }
  


  return (
    <>
  <myContext.Provider value={contextValue}>

   <Routes>
    {/*============ common routes accessible without token ============ */}

   <Route path="/" element={<HomePage/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/admin/login" element={<AdminLogin/>}/>
   <Route path="/admin/register" element={<AdminRegister/>}/>
   <Route path="/unauthorized" element={<Unauthorized/>}/>
   <Route path="/delivery-agent/login" element={<DeliveryAgentLogin/>}/>
   {/* <Route path="/not-found" element={<NotFound/>}/> */}
   <Route path="*" element={<NotFound/>}/>
  
   
   

   {/*================= user routes protected with token ============*/}

   <Route path="/place-orders" element={<PrivateRoute><Order/></PrivateRoute>} /> 
   <Route path="/confirm-orders" element={<PrivateRoute><ConfirmOrder/></PrivateRoute>} /> 
   <Route path="/orders" element={<PrivateRoute><GetOrders/></PrivateRoute>} /> 
   <Route path="/cancel/orders/:id" element={<PrivateRoute><CancelOrder/></PrivateRoute>} /> 
   <Route path="/orders/order/:id" element={<PrivateRoute><GetAorder/></PrivateRoute>} /> 
   

   {/*================== admin routes protected with token ============ */}
   
   {/* <Route path="/admin/home" element={<AdminPrivateRoute><AdminHome/></AdminPrivateRoute>} /> 
   <Route path="/admin/category" element={<AdminPrivateRoute><Admin_Category/></AdminPrivateRoute>} /> 
   <Route path="/admin/sub-category" element={<AdminPrivateRoute><Admin_Subcategories/></AdminPrivateRoute>} /> 
    */}
   <Route path="/sidebar" element={<AdminPrivateRoute><SidebarWithSearch/></AdminPrivateRoute>}/>
   <Route element={<SidebarWithSearch/>}>
   <Route path="/admin/category" element={<AdminPrivateRoute><Admin_Category/></AdminPrivateRoute>}/>
   <Route path="/admin/sub-category" element={<AdminPrivateRoute><Admin_Subcategories/></AdminPrivateRoute>}/>
   <Route path="/admin/delivery-agent/profile" element={<AdminPrivateRoute><DeliveryAgentProfile/></AdminPrivateRoute>}/>
   <Route path="/admin/view/delivery-agent/profile" element={<AdminPrivateRoute><ViewDeliveryAgent/></AdminPrivateRoute>}/>
   <Route path="/admin/edit/delivery-agent/profile/:id" element={<AdminPrivateRoute><EditDeliveryAgent/></AdminPrivateRoute>}/>
   <Route path="/admin/view/orders" element={<AdminPrivateRoute><ViewAllOrders/></AdminPrivateRoute>}/>
   <Route path="/admin/assign/orders/:id" element={<AdminPrivateRoute><AssignOrders/></AdminPrivateRoute>}/>
   
   
   
     
     
     
     
     
      </Route>
   <Route path="/delivery/agent/orders" element={<PrivateRouteDeliveryBoy><GetOrders_Deliveryagent/></PrivateRouteDeliveryBoy>}/>



   
   </Routes>
  </myContext.Provider>
    </>
  )
}

export default App
