import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { FaBars } from 'react-icons/fa'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const { userData, logout } = useUser(); // Mengambil userData dan logout dari UserContext
  const navigate = useNavigate();

  // Function to logout
  const handleLogout = () => {
    logout(); // Menggunakan fungsi logout dari UserContext
    navigate('/login'); // Mengarahkan ke halaman login
  };

  // Toggle dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 bg-gray-800 z-50 h-24 flex items-center">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-10 w-auto" alt="Logo" />
              <h1 className="ml-4 text-white text-xl font-bold">CareerQuest</h1>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <FaBars className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-14">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/vacancy" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
              Vacancy
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
              About Us
            </Link>

            <div className="ml-4 flex items-center">
              {userData ? (
                <div className="relative">
                  <button
                    onClick={toggleMenu}
                    className="flex items-center max-w-xs rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <img className="h-10 w-10 rounded-full" src={userData.imageUrl} alt="User" />
                  </button>

                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <div className="px-4 py-2 text-sm text-gray-700">
                        <div className="font-bold">{userData.name}</div>
                        <div className="text-gray-500">{userData.email}</div>
                      </div>
                      <hr className="my-1" />
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700">
                        Your Profile
                      </Link>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700">
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-500">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white space-y-2 px-4 py-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/vacancy" className="block px-3 py-2 rounded-md text-base font-medium">
            Vacancy
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium">
            About Us
          </Link>
          
          {userData && (
            <div className="mt-4">
              <div className="flex items-center gap-3">
                <img className="h-10 w-10 rounded-full" src={userData.imageUrl} alt="User" />
                <div>
                  <p className="text-sm font-medium">{userData.name}</p>
                  <p className="text-xs text-gray-400">{userData.email}</p>
                </div>
              </div>
              <Link to="/profile" className="block mt-2 text-sm text-white hover:underline">
                Your Profile
              </Link>
              <button onClick={handleLogout} className="block mt-1 text-sm text-white hover:underline">
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
