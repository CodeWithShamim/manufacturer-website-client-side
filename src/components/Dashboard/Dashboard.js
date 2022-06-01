import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import {
  FaUserEdit,
  FaHandHoldingUsd,
  FaRegComments,
  FaArrowAltCircleRight,
} from "react-icons/fa";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="bg-cyan-700 flex flex-col md:flex-row justify-center items-start">
      {/* ___dropdown link here___  */}
      <div className="bg-cyan-900 text-base-100 md:font-serif justify-center items-center md:justify-start w-full md:w-60 list-none flex md:flex-col p-6 md:h-screen shadow-2xl">
        <ul className="grid gap-3 grid-flow-col md:grid-flow-row text-sm text-left">
          <li className="md:border md:border-gray-300 md:px-6 md:py-1 md:rounded-sm">
            <NavLink to="/dashboard">
              <span className="flex items-start justify-start">
                <FaUserEdit className="md:mr-1 text-xl hidden md:block" />
                My Profile
              </span>
            </NavLink>
          </li>
          {!isAdmin && (
            <>
              <li className="md:border md:border-gray-300 md:px-6 md:py-1 md:rounded-sm">
                <NavLink to="/dashboard/myOrders">
                  <span className="flex items-start justify-start">
                    <FaHandHoldingUsd className="md:mr-1 text-xl hidden md:block" />
                    My Orders
                  </span>
                </NavLink>
              </li>
              <li className="md:border md:border-gray-300 md:px-6 md:py-1 md:rounded-sm">
                <NavLink to="/dashboard/addReview">
                  <span className="flex items-start justify-start">
                    <FaRegComments className="md:mr-1 text-xl hidden md:block" />
                    Add Review
                  </span>
                </NavLink>
              </li>
            </>
          )}

          {/* __admin route__ */}
          {isAdmin && (
            <>
              <li className="md:border md:border-gray-300 md:px-6 md:py-1 md:rounded-sm">
                <NavLink to="/dashboard/addProduct">
                  <span className="flex items-start justify-start">
                    <FaArrowAltCircleRight className="md:mr-1 text-xl hidden md:block" />
                    Add Product
                  </span>
                </NavLink>
              </li>
              <li className="md:border md:border-gray-300 md:px-6 md:py-1 md:rounded-sm">
                <NavLink to="/dashboard/makeAdmin">
                  <span className="flex items-start justify-start">
                    <FaArrowAltCircleRight className="md:mr-1 text-xl hidden md:block" />
                    Make Admin
                  </span>
                </NavLink>
              </li>
              <li className="md:border md:border-gray-300 md:px-6 md:py-1 md:rounded-sm">
                <NavLink to="/dashboard/manageProducts">
                  <span className="flex items-start justify-start">
                    <FaArrowAltCircleRight className="md:mr-1 text-xl hidden md:block" />
                    Manage Products
                  </span>
                </NavLink>
              </li>
              <li className="md:border md:border-gray-300 md:px-6 md:py-1 md:rounded-sm">
                <NavLink to="/dashboard/manageOrders">
                  <span className="flex items-start justify-start">
                    <FaArrowAltCircleRight className="md:mr-1 text-xl hidden md:block" />
                    Manage Orders
                  </span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* __ashboard content here_ */}
      <div className="flex-1 w-full md:w-96">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
