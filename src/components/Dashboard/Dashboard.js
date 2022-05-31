import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="bg-cyan-700 flex flex-col md:flex-row justify-center items-start">
      {/* ___dropdown link here___  */}
      <div className="bg-cyan-900 text-base-100 font-sans md:font-serif justify-center items-center md:justify-start w-full md:w-60 list-none flex md:flex-col p-6 md:h-screen shadow-2xl">
        <ul className="grid gap-3 grid-flow-col md:grid-flow-row font-serif text-sm">
          <li>
            <NavLink to="/dashboard">My Profile</NavLink>
          </li>
          {!isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/myOrders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">Add Review</NavLink>
              </li>
            </>
          )}

          {/* __admin route__ */}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/addProduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageProducts">
                  Manage Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageOrders">Manage Orders</NavLink>
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
