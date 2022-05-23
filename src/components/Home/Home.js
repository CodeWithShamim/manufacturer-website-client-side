import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import RefrigeratorTools from "./RefrigeratorTools/RefrigeratorTools";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-4 md:px-24">
        <RefrigeratorTools />
      </div>
      <BusinessSummary />
      <div className="px-4 md:px-24">
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
