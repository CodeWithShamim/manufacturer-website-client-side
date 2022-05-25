import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-fit bg-primary flex flex-col md:flex-row justify-center items-start">
      {/* ___dropdown link here___  */}
      <div className="bg-black text-base-100 font-sans md:font-serif justify-center w-full md:w-72 list-none flex md:flex-col md:pb-96 gap-6 p-6 md:p-16 md:rounded-2xl md:mx-10 md:my-6 shadow-2xl">
        {
          <>
            <li>
              <NavLink to="/dashboard">My Orders</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addReview">Add Review</NavLink>
            </li>
          </>
        }
        <li>
          <NavLink to="/dashboard/myProfile">My Profile</NavLink>
        </li>
      </div>

      {/* __ashboard content here_ */}
      <div className="flex-1 w-96">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
