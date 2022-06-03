import React, { useEffect, useState } from "react";
import ProductSkeleton from "../../../skeleton/ProductSkeleton";
import ToolDetail from "./ToolDetail";

const RefrigeratorTools = () => {
  const [tools, setTools] = useState(null);
  const [loading] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  useEffect(() => {
    setTimeout(async () => {
      fetch("https://ryan-refrigerator-instrument.herokuapp.com/tool")
        .then((res) => res.json())
        .then((data) => {
          setTools(data?.slice(0, 9));
        });
    }, 5000);
  }, []);

  return (
    <div className="font-serif px-4 md:px-12 pt-12  pb-32 bg-slate-500 mt-[400px] lg:mt-[600px]">
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="700"
        data-aos-delay="100"
        className=" text-base-100 text-2xl md:text-3xl lg:text-4xl font-serif font-bold"
      >
        Our Latest Tools
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {tools &&
          tools?.map((tool) => (
            <ToolDetail key={tool._id} tool={tool}></ToolDetail>
          ))}

        {/* ---- add loading skeleton--- */}
        {!tools &&
          loading.map((x) => <ProductSkeleton key={x}></ProductSkeleton>)}
      </div>
    </div>
  );
};

export default RefrigeratorTools;
