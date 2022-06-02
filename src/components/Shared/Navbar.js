import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import avatar from "../../images/avatar.png";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [user] = useAuthState(auth);

  // ________sign out_______
  const logOut = () => {
    signOut(auth);
  };

  return (
    <div className="font-serif bg-slate-600 text-base-100 fixed top-0 left-0 right-0 z-50 shadow-2xl shadow-base-200">
      <div className="navbar md:py-4 md:px-12">
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
              className="menu bg-slate-400 menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/myPortfolio">My Portfolio</NavLink>
              </li>
              <li>{user && <NavLink to="/dashboard">Dashboard</NavLink>}</li>
            </ul>
          </div>
          {/* ________dropdown content end________ */}

          {/* _________logo / name_________ */}
          <NavLink
            to="/"
            className="font-semibold text-primary md:text-2xl flex items-center flex-col"
          >
            <img src={logo} className="w-24 md:w-28 lg:w-32" alt="logo" /> 𝓡𝔂𝓪𝓷
            𝓘𝓷𝓼𝓽𝓻𝓾𝓶𝓮𝓷𝓽
          </NavLink>

          {/* ___________________________ */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/myPortfolio">My Portfolio</NavLink>
            </li>
            <li>{user && <NavLink to="/dashboard">Dashboard</NavLink>}</li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* ________dropdown for profile image_______  */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn btn-ghost hover:bg-transparent m-1"
            >
              {user?.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full border-2"
                  src={user?.photoURL}
                  alt="avatar-img"
                />
              ) : (
                <img
                  className="w-10 h-10 rounded-full"
                  src={avatar}
                  alt="avatar-img"
                />
              )}
            </label>

            {/* _______dropdown content here __________  */}
            <ul
              tabIndex="0"
              className="dropdown-content bg-slate-400 menu p-2 shadow rounded-box w-52"
            >
              {user?.photoURL ? (
                <img
                  className="w-10 h-10 mx-auto rounded-full"
                  src={user?.photoURL}
                  alt="avatar-img"
                />
              ) : (
                <img
                  className="w-10 h-10 rounded-full mx-auto"
                  src={avatar}
                  alt="avatar-img"
                />
              )}

              <li className="text-xs pt-2 uppercase font-semibold">
                {user?.displayName}
              </li>
              <li>
                {user && (
                  <Link to="/dashboard">
                    <button className="btn btn-xs btn-error mx-auto rounded-full text-base-100 capitalize">
                      My Profile
                    </button>
                  </Link>
                )}
              </li>
              <li>
                {user ? (
                  <button
                    onClick={logOut}
                    className="btn btn-ghost btn-xs w-1/2 mx-auto text-base-100 p-0 font-bold"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="btn btn-active btn-xs w-1/2 mx-auto text-base-100 p-0"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
            {/* __________dropdown content end_________  */}
          </div>
          {/* _________dropdown end___________  */}
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Navbar;
