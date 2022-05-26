import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/not-found.jpg";

const NotFound = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${notFound})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-32 md:pt-60">
        <h1 className="text-base-100 text-4xl bg-black p-2 uppercase  font-semibold">
          <Link to="/">Go To Home</Link>
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
