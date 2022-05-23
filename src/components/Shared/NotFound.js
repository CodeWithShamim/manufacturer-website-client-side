import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-red-500 text-4xl p-16">Opps, Not Found</h1>
      <h1 className="text-primary text-2xl uppercase font-semibold">
        <Link to="/">Go To Home</Link>
      </h1>
    </div>
  );
};

export default NotFound;
