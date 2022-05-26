import React from "react";
import NewServices from "./NewServices";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import RefrigeratorTools from "./RefrigeratorTools/RefrigeratorTools";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <RefrigeratorTools />
      <BusinessSummary />
      <NewServices></NewServices>
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
