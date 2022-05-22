import React, { useEffect, useState } from "react";
import ToolDetail from "./ToolDetail";

const RefrigeratorTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
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
    </div>
  );
};

export default RefrigeratorTools;
