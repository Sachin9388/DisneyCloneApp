// // Dropdown.js
// import React, { useState, useRef, useEffect } from "react";

// const Dropdown = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownButton = useRef();
//   const dropdownMenu = useRef();

//   // Function to toggle the dropdown
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Close the dropdown when clicking outside of it
//   const handleClickOutside = (event) => {
//     if (
//       dropdownButton.current &&
//       dropdownMenu.current &&
//       !dropdownButton.current.contains(event.target) &&
//       !dropdownMenu.current.contains(event.target)
//     ) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     // Add click event listener to the window
//     window.addEventListener("click", handleClickOutside);

//     // Remove event listener when component unmounts
//     return () => {
//       window.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <div className="flex items-center justify-center">
//         <div className="relative inline-block text-left">
//           <button
//             ref={dropdownButton}
//             className="inline-flex justify-center w-44 h-12 px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-gray-500"
//             style={{ backgroundColor: "#222226" }}
//             onClick={toggleDropdown}
//           >
//             English
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5 ml-2 -mr-1"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//           <div
//             ref={dropdownMenu}
//             className={`origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 ${
//               isDropdownOpen ? "" : "hidden"
//             }`}
//             style={{ backgroundColor: "#16181f" }}
//           >
//             <div
//               className="py-2 p-2"
//               role="menu"
//               aria-orientation="vertical"
//               aria-labelledby="dropdown-button"
//             >
//               <a
//                 className="flex justify-center rounded-md px-4 py-2 text-sm text-gray-400 active:bg-blue-100 cursor-pointer"
//                 role="menuitem"
//               >
//                 English
//               </a>
//               <a
//                 className="flex justify-center rounded-md px-4 py-2 text-sm text-gray-400 active:bg-blue-100 cursor-pointer"
//                 role="menuitem"
//               >
//                 Hindi
//               </a>
//               <a
//                 className="flex justify-center rounded-md px-4 py-2 text-sm text-gray-400 active:bg-blue-100 cursor-pointer"
//                 role="menuitem"
//               >
//                 Tamil
//               </a>
//               <a
//                 className="flex justify-center rounded-md px-4 py-2 text-sm text-gray-400 active:bg-blue-100 cursor-pointer"
//                 role="menuitem"
//               >
//                 Telugu
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Dropdown;

import React from "react";
import { Select, Option } from "@material-tailwind/react";

const Dropdown = () => {
  return (
    <>
      <div className="">
        <select
          className="border-2 py-2 px-3 text-white border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2"
          style={{ backgroundColor: "#222226" }}
        >
          <option className="text-gray-400">English</option>
          <option className="text-gray-400">Hindi</option>
          <option className="text-gray-400">Tamil</option>
          <option className="text-gray-400">Telugu</option>
        </select>
      </div>
    </>
  );
};

export default Dropdown;
