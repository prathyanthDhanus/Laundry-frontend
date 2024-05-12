
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

function SidebarWithSearch() {
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);

  const handleOpen = (value) => {
    setOpen(open === value? 0 : value);
  };

  return (
    <div className='flex '>
    <div className="h-[calc(104vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
      <div className="mb-2 flex items-center gap-4 p-4">
        <div className='text-4xl '>👨‍💼</div>
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
                  Category
                </a>
              </li>
              <li>
                <a
                  href="/admin/sub-category"
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
                 Sub-Category
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
                  href="/admin/delivery-agent/profile"
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
                  Create delivery agent
                </a>
              </li>
              <li>
                <a
                  href="/admin/view/delivery-agent/profile"
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
                 View all delivery agents
                </a>
              </li>
              <li>
                <a
                  href="/admin/view/orders"
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
                 View all orders
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
    <div className='w-full'>

      <Outlet/>
    </div>
   
    </div>
  );
}

export default SidebarWithSearch;


