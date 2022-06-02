import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import ToolDetail from "./ToolDetail";

const RefrigeratorTools = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://ryan-refrigerator-instrument.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setTools(data?.slice(0, 9));
      });
  }, []);

  return (
    <div className="font-serif px-4 md:px-12 pt-12  pb-32 bg-slate-500 mt-[400px] lg:mt-[600px]">
      <div className=" text-base-100 text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
        Our Latest Tools
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {tools.map((tool) => (
          <ToolDetail key={tool._id} tool={tool}></ToolDetail>
        ))}
      </div>

      {isLoading && <Loading />}
    </div>
  );
};

export default RefrigeratorTools;
