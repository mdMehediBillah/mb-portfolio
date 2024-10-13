import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <span className="w-18 h-18 object-contain bg-gray-100 px-3 py-1 rounded font-semibold text-rose-600 text-xl">
          Billah
        </span>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 hover:text-orange-600"
              : "text-gray-600 hover:text-orange-600"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 hover:text-orange-600"
              : "text-gray-600 hover:text-orange-600"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 hover:text-orange-600"
              : "text-gray-600 hover:text-orange-600"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
