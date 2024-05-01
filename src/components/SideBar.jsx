// import React from 'react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = React.useState(true);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
   
//     <div
//       className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white transition duration-300 ease-in-out ${
//         isOpen? 'translate-x-0' : '-translate-x-full'
//       }`}
//     >
//       <div className="flex justify-between p-4">
//         <h2 className="text-lg font-bold">Sidebar</h2>
//         <button
//           className="text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out"
//           onClick={handleToggle}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>
//       <ul className="px-4 py-2">
//         <li className="py-2">
//           <a
//             href="#"
//             className="flex items-center text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
//               />
//             </svg>
//             <span className="hidden md:block">Orders</span>
//           </a>
//           <ul className="pl-4 py-2">
//             <li>
//               <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out">
//                 Order 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out">
//                 Order 2
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="py-2">
//           <a
//             href="#"
//             className="flex items-center text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356 1.857M7 20h10v-2"
//               />
//             </svg>
//             <span className="hidden md:block">Delivery Agents</span>
//           </a>
//           <ul className="pl-4 py-2">
//             <li>
//               <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out">
//                 Agent 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out">
//                 Agent 2
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="py-2">
//           <a
//             href="#"
//             className="flex items-center text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 4.354a4 4 0 1 1 0 7.754M12 14.654a4 4 0 0 1 0-7.754m4.656 0h-4.656m7.756 0h-4.656a4 4 0 0 1-3.918-1.538H12.02a4 4 0 0 1-3.918 1.538z"
//               />
//             </svg>
//             <span className="hidden md:block">Users</span>
//           </a>
//           <ul className="pl-4 py-2">
//             <li>
//               <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out">
//                 User 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out">
//                 User 2
//               </a>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';

function SidebarWithSearch() {
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);

  const handleOpen = (value) => {
    setOpen(open === value? 0 : value);
  };

  return (
    <div className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <h5 className="text-blue-600 font-bold text-xl  ">Admin Panel</h5>
      </div>
      
      <ul className="list-none p-0">
        <li className="p-0">
          <button
            className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => handleOpen(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
            </svg>
            Dashboard
            {open === 1? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7 7-7"
                />
              </svg>
            )}
          </button>
          {open === 1 && (
            <ul className="list-none p-0">
              <li>
                <a
                  href="/admin/category"
                  className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2zm1-13c0-1.055-.67-2-1.754-2h5.582l4.95 4.95-1.524 1.524-5.582-5.582V4h-1v9h1zM19 18v1h-1v-1h1zM4 22h1v-1H4z"
                    />
                  </svg>
                  Projects
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="p-0">
          <button
            className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => handleOpen(2)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 000-7z"
              />
            </svg>
            Teams
            {open === 2? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7 7-7"
                />
              </svg>
            )}
          </button>
          {open === 2 && (
            <ul className="list-none p-0">
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 15v-1a4 4 0 00-4-4H8M18 15a4 4 0 01-4 4v1"
                    />
                  </svg>
                  Team 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 15v-1a4 4 0 00-4-4H8M18 15a4 4 0 01-4 4v1"
                    />
                  </svg>
                  Team 2
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="p-0">
          <button className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            Inbox
            <span className="ml-auto text-xs text-gray-500">14</span>
          </button>
        </li>
        <li className="p-0">
          <button className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 000-7z"
              />
            </svg>
            Profile
          </button>
        </li>
        <li className="p-0">
          <button className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Settings
          </button>
        </li>
        <li className="p-0">
          <button className="flex items-center w-full p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SidebarWithSearch;