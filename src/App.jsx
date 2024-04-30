
import {Routes,Route} from "react-router-dom";
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

function App() {


  const contextValue = {
    
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
   {/* <Route path="/not-found" element={<NotFound/>}/> */}
   <Route path="*" element={<NotFound/>}/>

   {/*================= user routes protected with token ============*/}

   <Route path="/place-orders" element={<PrivateRoute><Order/></PrivateRoute>} /> 
   <Route path="/confirm-orders" element={<PrivateRoute><ConfirmOrder/></PrivateRoute>} /> 
   <Route path="/orders" element={<PrivateRoute><GetOrders/></PrivateRoute>} /> 
   <Route path="/cancel/orders/:id" element={<PrivateRoute><CancelOrder/></PrivateRoute>} /> 
   <Route path="/orders/order/:id" element={<PrivateRoute><GetAorder/></PrivateRoute>} /> 

   {/*================== admin routes protected with token ============ */}
   
   <Route path="/admin/home" element={<AdminPrivateRoute><AdminHome/></AdminPrivateRoute>} /> 



   
   </Routes>
  </myContext.Provider>
    </>
  )
}

export default App
