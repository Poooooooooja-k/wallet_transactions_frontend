import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const login = useSelector(state => state.auth.isLogin);
  
  return (
    <nav className="bg-transparent shadow-md w-screen">
      <div className="container">
        {login && (
          <div className="h-32 grid grid-cols-12">
            <div className="hidden items-center justify-around col-span-11 md:flex">
              <Link to="/home" className="text-white">
                Home
              </Link>
              <Link to="/profile" className="text-white">
                Profile
              </Link>
            </div>
            <div className="md:hidden flex justify-end items-center col-span-8">
              <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                </svg>
              </button>
            </div>
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/homepage" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    Home
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    Profile
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
