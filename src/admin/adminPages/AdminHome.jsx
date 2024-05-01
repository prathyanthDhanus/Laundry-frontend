import React from 'react'
import SidebarWithSearch from '../../components/SideBar';
import Admin_Category from './Admin_Category';

const AdminHome = () => {
  return (
    <div>
<SidebarWithSearch/>
<Admin_Category/>


    </div>
  )
}

export default AdminHome

// import React, { useState } from 'react';
// import SidebarWithSearch from '../../components/SideBar';
// import Admin_Category from './Admin_Category';

// const AdminHome = () => {
//   // State to keep track of the selected component
//   const [selectedComponent, setSelectedComponent] = useState('Admin_Category');

//   return (
//     <div className="flex">
//       {/* Sidebar component */}
//       <SidebarWithSearch />

//       {/* Main content area */}
//       <div className="flex-1 p-5">
//         {/* Conditional rendering based on the selected component */}
//         {selectedComponent === 'Admin_Category' && <Admin_Category />}
//         {/* Add more components here and conditionally render based on the selectedComponent state */}
//       </div>
//     </div>
//   );
// }

// export default AdminHome;
