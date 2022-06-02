import React from "react";
import banner from "../../images/banner/banner.png";
import img from "../../images/banner/23395337.jpg";

const Banner = () => {
  return (
    <div
      className="h-96 lg:h-screen flex items-center justify-between w-full mx-auto fixed z-[-1] left-0 right-0 top-[70px]"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* ---left side---  */}
      <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde
          incidunt sint dignissimos molestiae temporibus fugit alias error eum,
          est, eveniet illum illo? Dolorum, sunt itaque placeat in
          necessitatibus debitis!
        </p>
      </div>
      {/* ----right side--- */}
      <div>
        <img src={img} alt="banner-img" />
      </div>
    </div>
  );
};

export default Banner;
