import React from "react";
import Banner from "./Banner";
import RefrigeratorTools from "./RefrigeratorTools/RefrigeratorTools";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-4 md:px-24">
        <RefrigeratorTools />
      </div>
    </div>
  );
};

export default Home;
