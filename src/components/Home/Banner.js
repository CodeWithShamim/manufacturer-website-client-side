import React from "react";
import banner from "../../images/banner/banner.png";
import img from "../../images/banner/landing_man.png";

const Banner = () => {
  return (
    <div
      className="h-96 lg:h-screen flex flex-col md:flex-row items-center justify-center w-full mx-auto fixed z-[-1] left-0 right-0 top-[70px] text-base-100 px-16 text-left"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* ---left side---  */}
      <div className="flex-1">
        <h1
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1200"
          data-aos-delay="50"
          className="text-3xl lg:text-6xl font-bold text-transparent bg-clip-text   bg-gradient-to-r from-base-100 via-blue-400 to-base-200 font-serif drop-shadow-2xl hidden md:block"
        >
          World Best Manufacturer LTD. Grow Your Business!
        </h1>
      </div>
      {/* ----right side--- */}
      <div
        className="flex-1 shadow-2xl"
        data-aos="fade-down"
        data-aos-duration="1800"
        data-aos-delay="100"
      >
        <img src={img} alt="banner-img" />
      </div>
    </div>
  );
};

export default Banner;
