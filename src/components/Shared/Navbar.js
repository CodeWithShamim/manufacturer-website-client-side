import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="navbar md:py-6 md:px-12">
        {/* ________dropdown content start________ */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/myPortfolio">My Portfolio</NavLink>
              </li>
            </ul>
          </div>
          {/* ________dropdown content end________ */}

          {/* _________logo / name_________ */}
          <NavLink
            to="/"
            className="btn btn-ghost text-primary normal-case md:uppercase md:text-xl font-bold"
          >
            Ryan Refrigerator Instrument
          </NavLink>

          {/* ___________________________ */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/myPortfolio">My Portfolio</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/login"
            className="btn btn-error text-base-100 font-bold md:px-6"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
