
import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { myContext } from "./api/ContextApi";

// import PrivateRoute from "./utils/Privateroutes";





function App() {


  const contextValue = {
    
  }
  


  return (
    <>
  <myContext.Provider value={contextValue}>

   <Routes>
   <Route path="/" element={<HomePage/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   </Routes>
  </myContext.Provider>
    </>
  )
}

export default App
