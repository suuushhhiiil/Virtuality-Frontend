import React, { useState } from "react";
import { Menu, X, SunDimIcon, Moon } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";
import "./Navbar.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Virtuality</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
            Create a New Account
          </a>
            </div>
          <div className="lg:hidden md:flex flex items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X/> : <Menu />}
            </button>
          </div>
        </div>
        {
          <div
            className={`fixed right-0 z-20 w-full p-12 flex flex-col justify-center bg-neutral-900 items-center lg:hidden ${
              mobileDrawerOpen ? `showMenu` : `hideMenu`
            }`}
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="space-x-5 mt-4">
              <a href="#" className="py-2 px-3 border rounded-md w-fit">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md w-fit"
              >
                Create a New Account
              </a>
            </div>
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
