import React from "react";
import img from "../../images/banner/banner-3.jpg";
import bg from "../../images/contact.jpg";
import { FaArrowRight } from "react-icons/fa";

const NewServices = () => {
  return (
    <div
      className="py-6 bg-black text-white flex flex-col md:flex-row items-center justify-center p-6 md:p-0"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ________left side______ */}
      <div className="flex-1">
        <img className="rounded" src={img} alt="img" />
      </div>

      {/* _______right side______ */}
      <div className="text-left flex-1 pt-4 md:p-12">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-serif">
          Our Future Tools
        </h2>

        <p className="py-4 font-serif">
          Our future plan is We are prividee new modern upgraded refrigerator
          parts. - smoothness - Unique tools - Perfect tool quality - Seamless
          tool etc..
        </p>
        {/* ------add btn------- */}
        <button className="btn btn-info rounded-sm text-white font-bold">
          Read More <FaArrowRight className="text-red-400 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default NewServices;
