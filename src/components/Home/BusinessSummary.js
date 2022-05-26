import React from "react";
import { FaUsers, FaMoneyCheck, FaComment, FaTools } from "react-icons/fa";
import bg from "../../images/summary.jpg";

const BusinessSummary = () => {
  return (
    <div
      className="pt-16 pb-28 font-serif bg-slate-400"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl font-serif md:text-4xl text-base-100 font-bold capitalize rounded">
        Business Summary
      </h1>

      <div className="stats stats-vertical md:stats-horizontal  shadow pt-6 mt-10 font-sans font-semibold text-purple-400 w-4/5">
        {/* ______customers____ */}
        <div className="stat">
          <div className="stat-figure text-red-400 s-full">
            <FaUsers className="w-16 h-16" />
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">1k+</div>
        </div>

        {/* ____annual revenue____ */}
        <div className="stat">
          <div className="stat-figure text-red-400 s-full">
            <FaMoneyCheck className="w-16 h-16" />
          </div>
          <div className="stat-title">Annual Revenue</div>
          <div className="stat-value">100M</div>
        </div>

        {/* ______rviews______ */}
        <div className="stat">
          <div className="stat-figure text-red-400 s-full">
            <FaComment className="w-16 h-16" />
          </div>
          <div className="stat-title">Reviews</div>
          <div className="stat-value">200k+</div>
        </div>

        {/* _______tools_______ */}
        <div className="stat">
          <div className="stat-figure text-red-400 s-full">
            <FaTools className="w-16 h-16" />
          </div>
          <div className="stat-title">Tools</div>
          <div className="stat-value">100+</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
