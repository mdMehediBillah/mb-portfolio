import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

  // Function to handle menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle between true and false
  };

  // Add or remove the 'overflow-hidden' class from the body to prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Disable scrolling
    } else {
      document.body.classList.remove("overflow-hidden"); // Enable scrolling
    }
  }, [isOpen]);

  return (
    <header className="container p-4 z-50 relative mx-auto max-w-screen-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-rose-600 font-bold text-xl">
          Billah
        </NavLink>

        {/* Hamburger/Cross Icon for Mobile (hidden on large screens) */}
        <div className="md:hidden relative z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              // Cross icon (Font Awesome) when menu is open
              <i className="fa-solid fa-xmark fa-2x text-yellow-500"></i>
            ) : (
              // Hamburger icon (Font Awesome) when menu is closed
              <i className="fa-solid fa-bars fa-2x text-blue-500 "></i>
            )}
          </button>
        </div>

        {/* Full Navbar Links (hidden on mobile, visible on larger screens) */}
        <nav className="hidden md:flex md:items-center md:gap-7 text-md font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 hover:text-orange-600 border-b-2 border-yellow-500"
                : "text-blue-400 hover:text-orange-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 hover:text-orange-600 border-b-2 border-yellow-500"
                : "text-blue-400 hover:text-orange-600"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 hover:text-orange-600 border-b-2 border-yellow-500"
                : "text-blue-400 hover:text-orange-600"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Overlay behind the mobile menu to prevent clicking on other content */}
      {isOpen && (
        <div className="fixed inset-0  z-20" onClick={toggleMenu}></div>
      )}

      {/* Mobile Menu - Links appear vertically on the right when toggled (hidden on large screens) */}
      {isOpen && (
        <nav
          className="md:hidden fixed top-16 right-0 w-2/6 h-full bg-rose-600 opacity-90 shadow-md
          flex flex-col items-end justify-start text-md font-medium py-4 px-6 gap-3 z-50 rounded-l-lg"
        >
          <NavLink
            to="/about"
            onClick={toggleMenu} // Close the menu when a link is clicked
            className=""
          >
            About
          </NavLink>
          <NavLink to="/projects" onClick={toggleMenu} className="">
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="">
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
