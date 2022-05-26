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
        setTools(data?.slice(0, 6));
      });
  }, []);

  return (
    <div className="my-24 font-serif">
      <h1 className="text-primary text-4xl font-serif font-bold">
        Our Stocking Refrigerator Tools
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20">
        {tools.map((tool) => (
          <ToolDetail key={tool._id} tool={tool}></ToolDetail>
        ))}
      </div>

      {isLoading && <Loading />}
    </div>
  );
};

export default RefrigeratorTools;
