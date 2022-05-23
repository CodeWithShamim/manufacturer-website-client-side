import React from "react";
import Banner from "./Banner";
import RefrigeratorTools from "./RefrigeratorTools/RefrigeratorTools";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-4 md:px-24">
        <RefrigeratorTools />
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
