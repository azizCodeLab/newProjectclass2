import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   let login = localStorage.getItem("isLogin");
  //   if (login === "yes") {
  //     setIsLogin(true);
  //     navigate("/dashboard");
  //   } else {
  //     setIsLogin(false);
  //     navigate("/");
  //   }
  // }, [isLogin, navigate]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            Navbar
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">
              Dashboard
            </Link>
           
              <Link to="/logout" className="text-gray-700 hover:text-red-600">
                Logout
              </Link>
       
              <Link to="/" className="text-gray-700 hover:text-green-600">
                Login
              </Link>
        
          </div>

          {/* Search Box */}
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition">
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 border-t">
          <Link
            to="/"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          {/* {isLogin ? (
            <Link
              to="/logout"
              className="block text-gray-700 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/"
              className="block text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )} */}

          {/* Search in mobile */}
          <div className="flex items-center space-x-2 mt-3">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition">
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
