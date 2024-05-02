import React, { useState } from 'react';



// function Dropdown({ label, options, onSelect }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (id) => {
//     console.log("id",id)
//     onSelect(id);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative ">
//       <button
//         type="button"
//         className="px-3 py-2 rounded-md bg-indigo-400 text-green-300 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus-ring-2 focus-ring-inset focus-ring-indigo-500 w-full  "
//         onClick={handleClick}
//       >
//         {label}
     
//       </button>
//       {isOpen && (
//         <ul
//           className="absolute z-10 top-full left-0 w-full rounded-md shadow-lg bg-white overflow-hidden"
//         >
//           {options.map((option) => (
//             <li key={option._id} className="block px-4 py-2 hover:bg-gray-100">
//               <button
//                 type="button"
//                 className="text-left w-full focus:outline-none focus-ring-2 focus-ring-inset focus-ring-indigo-500"
//                 onClick={() => handleOptionSelect(option._id)}
//               >
//                 {option.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Dropdown;
function Dropdown({ label, options, onSelect, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (id) => {
    
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <button
        type="button"
        className="px-3 py-2 rounded-md bg-indigo-400 text-green-300 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus-ring-2 focus-ring-inset focus-ring-indigo-500 w-full  "
        onClick={handleClick}
      >
        {label}
        
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 top-full left-0 w-full rounded-md shadow-lg bg-white overflow-hidden"
        >
          {options.map((option) => (
            <li key={option._id} className="block px-4 py-2 hover:bg-gray-100">
              <button
                type="button"
                className="text-left w-full focus:outline-none focus-ring-2 focus-ring-inset focus-ring-indigo-500"
                onClick={() => handleOptionSelect(option._id)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Dropdown;