import React, { useState } from 'react';
import { FaHome, FaList, FaPlus, FaKey, FaUser, FaSignOutAlt, FaArrowRight } from "react-icons/fa";
import Cookies from 'js-cookie'; 
import { useUser } from '../context/UserContext'; 
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  const userData = useUser(); 
  const [isOpen, setIsOpen] = useState(false); 


  const handleLogout = () => {
    Cookies.remove('token');
    window.location.href = '/login'; 
  };


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-center items-center py-4 px-2 bg-gray-900 lg:hidden">
        <button
          onClick={toggleSidebar}
          className="flex items-center gap-2 text-white text-lg"
        >
          <FaArrowRight className="text-2xl" />

        </button>
      </div>
      <div
        className={`fixed lg:static lg:w-1/6 lg:mt-10 top-0 left-0 h-full bg-gray-900 text-white lg:flex flex-col transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40 lg:translate-x-0 lg:static`}
      >
        <div className="flex flex-col min-h-screen justify-between relative">
          {/* Menu Items */}
          <div className={`px-4 py-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="space-y-6 mt-24 lg:mt-10">
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">
                <Link to="/dashboard" className="flex items-center gap-3 w-full">
                  <FaHome />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">
                <Link to="/list-jobs" className="flex items-center gap-3 w-full">
                  <FaList />
                  <span>List Job Table</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">
                <Link to="/add-jobs" className="flex items-center gap-3 w-full">
                  <FaPlus />
                  <span>Add New Job</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">
                <Link to="/profile" className="flex items-center gap-3 w-full">
                  <FaUser />
                  <span>Profile</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">
                <Link to="/change-password" className="flex items-center gap-3 w-full">
                  <FaKey />
                  <span>Change Password</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:text-red-600 px-3 py-2 rounded-lg">
                <button onClick={handleLogout} className="text-sm cursor-pointer hover:bg-gray-700">
                  <FaSignOutAlt className="text-xl" />
                </button>
                <span>Logout</span>
              </li>
            </ul>
          </div>
          
          {userData && (
            <div className="sticky inset-x-0 bottom-0 bg-gray-900 p-4 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    alt="Profile"
                    src={userData.imageUrl}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{userData.name}</p>
                    <p className="text-xs text-gray-400">{userData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
